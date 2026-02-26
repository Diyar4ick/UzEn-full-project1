import arrowYel from "../../assets/images/generalIcons/arrow-yellow.svg";
import arrowBlue from "../../assets/images/generalIcons/arrow-blue.svg";
import arrowGreen from "../../assets/images/generalIcons/arrow-green.svg";

import HistoryBanner from "../Banners/HistoryBanner";
import { useSelector } from "react-redux";

const History = () => {
  // --- ЛОГИКА ИЗ 1 ВЕРСИИ ---
  const BASE_URL = import.meta.env.VITE_API_URL
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const placePath = textInfo?.blocks?.[0]?.history_place?.[0].url;
  const iconLeftPath = textInfo?.blocks?.[1]?.icon_banner_left?.[0]?.url;

  const fullPlaceImg = placePath ? `${BASE_URL}${placePath}` : null;
  const fullImageUrlIconLeft = iconLeftPath ? `${BASE_URL}${iconLeftPath}` : null;

  if (status === "loading" || !data) {
    return <div className="loading">Загрузка...</div>;
  }
  // --- КОНЕЦ ЛОГИКИ ---

  return (
    <>
      <HistoryBanner />
      <div className="history-page">
        {/* СЕКЦИЯ 1: ИСТОРИЯ ОБЩЕСТВА */}
        <section className="history-page__section1 container">
          <h3 className="main-title">
            {textInfo?.blocks?.[0]?.title}
          </h3>
          <div className="history-page__section1-content">
            <img src={fullPlaceImg} alt="History" />
            <p>
              {/* Вывод первых 7 абзацев описания */}
              {textInfo?.blocks?.[0]?.description?.slice(0, 7).map((item, idx) => (
                <span key={idx}>
                  {item?.children?.[0]?.text}
                  <span className="enter"></span>
                </span>
              ))}
            </p>
          </div>
          <p>
            {/* Вывод оставшихся абзацев описания (с 8-го и дальше) */}
            {textInfo?.blocks?.[0]?.description?.slice(7).map((item, idx) => (
              <span key={idx}>
                {item?.children?.[0]?.text}
                <span className="enter"></span>
              </span>
            ))}
          </p>
        </section>

        {/* СЕКЦИЯ 2: ХРОНОЛОГИЯ */}
        <section className="history-page__section2">
          <img src={fullImageUrlIconLeft} alt="" className="iconBannerImg" />
          <div className="container">
            <h3 className="history-page__section2-title main-title">
              {/* Используем заголовок из API */}
              {textInfo?.blocks?.[1]?.title}
            </h3>

            {/* Блок шевронов (стрелок) как во 2-й версии */}
            <div className="history-page__section2-chevrons">
              <div className="history-page__section2-chevrons-item history-page__section2-chevrons-item--yellow">
                <img src={arrowYel} alt="" />
                <span>1956</span>
              </div>
              <div className="history-page__section2-chevrons-item history-page__section2-chevrons-item--yellow">
                <img src={arrowYel} alt="" />
                <span>1990</span>
              </div>
              <div className="history-page__section2-chevrons-item history-page__section2-chevrons-item--yellow">
                <img src={arrowYel} alt="" />
                <span>1992</span>
              </div>
              <div className="history-page__section2-chevrons-item history-page__section2-chevrons-item--yellow">
                <img src={arrowYel} alt="" />
                <span>2002</span>
              </div>
              <div className="history-page__section2-chevrons-item history-page__section2-chevrons-item--blue">
                <img src={arrowBlue} alt="" />
                <span>2019</span>
              </div>
              <div className="history-page__section2-chevrons-item history-page__section2-chevrons-item--green">
                <img src={arrowGreen} alt="" />
                <span>Now</span>
              </div>
            </div>

            {/* Карточки с контентом из API (структура как во 2-й версии) */}
            <div className="history-page__section2-cards">
              {/* Карточка 1 (1956 - 1990) */}
              <div className="history-page__section2-card">
                <p>
                  {textInfo?.blocks?.[1]?.description?.[0]?.children?.[0]?.text}
                </p>
                <p>
                  {textInfo?.blocks?.[1]?.description?.[1]?.children?.[0]?.text}
                </p>
              </div>

              {/* Карточка 2 (1992 - 2002) */}
              <div className="history-page__section2-card">
                <p>
                  {textInfo?.blocks?.[1]?.description?.[2]?.children?.[0]?.text}
                </p>
                <p>
                  {textInfo?.blocks?.[1]?.description?.[3]?.children?.[0]?.text}
                </p>
              </div>

              {/* Карточка 3 (2019 - Now) */}
              <div className="history-page__section2-card">
                <p>
                  {textInfo?.blocks?.[1]?.description?.[4]?.children?.[0]?.text}
                </p>
                <p>
                  {textInfo?.blocks?.[1]?.description?.[5]?.children?.[0]?.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default History;