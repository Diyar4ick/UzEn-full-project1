import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Management = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const [activeMenu, setActiveMenu] = useState(null); // Храним индекс выбранного менеджера

  // --- ПОЛУЧЕНИЕ ДАННЫХ ---
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;
  const managers = textInfo?.blocks || [];

  // Находим данные выбранного менеджера для модалки
  const selectedManager = activeMenu !== null ? managers[activeMenu] : null;

  // --- ЛОГИКА МОДАЛКИ (ИЗ 2 ВЕРСИИ) ---
  useEffect(() => {
    if (selectedManager === null) return;

    document.body.classList.add("body-menu-open");
    const onKey = (e) => e.key === "Escape" && setActiveMenu(null);
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("body-menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [selectedManager]);

  if (status === "loading" || !data) {
    return <div className="loading">Загрузка...</div>;
  }

  // Вспомогательная функция для получения URL картинки
  const getImgUrl = (manager) => {
    // В Strapi картинка может быть либо объектом, либо массивом
    const path = manager?.manager_avatar?.[0]?.url || manager?.manager_avatar?.url;
    return path ? `${BASE_URL}${path}` : null;
  };

  return (
    <div className="manage-page container">
      <h3 className="main-title">
        {textInfo?.title}
      </h3>

      <div className="manage-page__content">
        {managers.map((manager, index) => (
          <div key={index} className="manage-page__card">
            <div className="manage-page__card-info">
              <img src={getImgUrl(manager)} alt={manager?.manager_name} />
              <div>
                <h4>{manager?.manager_name}</h4>
                <span>{manager?.manager_duty}</span>
                <ul>
                  <li>
                    <p>{manager?.manager_phone}</p>
                  </li>
                  <li>
                    <p>{manager?.manager_workdays}</p>
                  </li>
                  <li>
                    <p>{manager?.manager_email}</p>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => setActiveMenu(index)}
              className="manage-page__button"
            >
              {manager?.duty_button || "обязанности"}
            </button>
          </div>
        ))}
      </div>

      {/* МОДАЛЬНОЕ ОКНО (СТРУКТУРА ИЗ 2 ВЕРСИИ + ДАННЫЕ ИЗ API) */}
      {selectedManager && (
        <div
          className="manage-page__modal-backdrop"
          onClick={() => setActiveMenu(null)}
        >
          <div
            className="manage-page__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="manage-page__modal-head">
              <h3 className="manage-page__modal-title">
                {textInfo?.title}
              </h3>
              <button
                className="manage-page__modal-close"
                onClick={() => setActiveMenu(null)}
              >
                ✕ {selectedManager?.close_button || "Закрыть"}
              </button>
            </div>

            <div className="manage-page__modal-body">
              <div className="manage-page__modal-profile">
                <img src={getImgUrl(selectedManager)} alt="" />
                <div>
                  <h4>{selectedManager?.manager_name}</h4>
                  <span className="manage-page__modal-position">
                    {selectedManager?.manager_duty}
                  </span>
                  <ul>
                    <li>
                      <p>{selectedManager?.manager_phone}</p>
                    </li>
                    <li>
                      <p>{selectedManager?.manager_workdays}</p>
                    </li>
                    <li>
                      <p>{selectedManager?.manager_email}</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="manage-page__modal-duties">
                <h4 className="manage-page__modal-duties-title">
                  {selectedManager?.duty_button || "обязанности"}
                </h4>
                <div className="manage-page__modal-duties-text">
                  {/* Вывод контента обязанностей из API */}
                  {selectedManager?.dropdown_content?.map((item, idx) => (
                    <p key={idx}>
                      {item?.children?.[0]?.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Management;