import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getTextInfo } from "../../store/getTextSlice";
import { fetchDetail, fetchFooter, fetchHeader } from "../../store/globalSlice";

const Header = () => {
  // --- ЛОГИКА ИЗ 1 ВЕРСИИ (БЕЗ ИЗМЕНЕНИЙ) ---
  const BASE_URL = import.meta.env.VITE_API_URL
  const location = useLocation();

  // const [activeMenu, setActiveMenu] = useState(""); // Сохраняем для совместимости, хотя во 2 версии используем details
  const [burger, setBurger] = useState(false);
  const [openLng, setOpenLng] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ru");
  const dispatch = useDispatch();

  const page = location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  useEffect(() => {
    dispatch(fetchHeader(selectedLang))
    dispatch(fetchFooter(selectedLang))
    dispatch(fetchDetail(selectedLang))
  }, [selectedLang, dispatch])

  useEffect(() => {
    dispatch(clearData()); 
    dispatch(getTextInfo({ lng: selectedLang, page }));
  }, [selectedLang, page, dispatch]);

  const handleLanguageChange = (newLang) => {
    setSelectedLang(newLang);
    setOpenLng(false);
  };

  const { header } = useSelector((state) => state.global)
  const textInfo = Array.isArray(header) ? header[0] : header;

  const headerPromoIcon1Path = textInfo?.blocks?.[0]?.facebook?.url
  const headerPromoIcon2Path = textInfo?.blocks?.[0]?.instagram?.url
  const headerPromoIcon3Path = textInfo?.blocks?.[0]?.twitter?.url
  const headerPromoIcon4Path = textInfo?.blocks?.[0]?.wk?.url
  const headerPromoIcon5Path = textInfo?.blocks?.[0]?.whatsapp?.url
  const headerPromoIcon6Path = textInfo?.blocks?.[0]?.youtube?.url 
  // const headerSearchIconPath = textInfo?.blocks?.[0]?.searchIcon?.url
  const logoPath = textInfo?.blocks?.[1]?.logo?.url

  const fullImageHeaderPromoIcon1 = headerPromoIcon1Path ? `${BASE_URL}${headerPromoIcon1Path}` : null
  const fullImageHeaderPromoIcon2 = headerPromoIcon2Path ? `${BASE_URL}${headerPromoIcon2Path}` : null
  const fullImageHeaderPromoIcon3 = headerPromoIcon3Path ? `${BASE_URL}${headerPromoIcon3Path}` : null
  const fullImageHeaderPromoIcon4 = headerPromoIcon4Path ? `${BASE_URL}${headerPromoIcon4Path}` : null
  const fullImageHeaderPromoIcon5 = headerPromoIcon5Path ? `${BASE_URL}${headerPromoIcon5Path}` : null
  const fullImageHeaderPromoIcon6 = headerPromoIcon6Path ? `${BASE_URL}${headerPromoIcon6Path}` : null
  // const fullImageheaderSearchPath = headerSearchIconPath ? `${BASE_URL}${headerSearchIconPath}` : null
  const fullImagelogo = logoPath ? `${BASE_URL}${logoPath}` : null
  // --- КОНЕЦ ЛОГИКИ ИЗ 1 ВЕРСИИ ---

  // --- UI-ЛОГИКА ИЗ 2 ВЕРСИИ ---
  const menuPanelRef = useRef(null);
  const closeBtnRef = useRef(null);

  const closeBurger = () => setBurger(false);

  const handleDetailsToggle = (e) => {
    const summary = e.currentTarget;
    const details = summary.closest("details");
    if (!details) return;
    e.preventDefault();
    const isOpen = details.getAttribute("open") !== null;
    if (isOpen) {
      details.removeAttribute("open");
    } else {
      document.querySelectorAll(".header__nav-details[open]").forEach((d) => d.removeAttribute("open"));
      details.setAttribute("open", "");
    }
  };

  // Блокировка скролла
  useEffect(() => {
    if (burger) {
      document.body.classList.add("body-menu-open");
    } else {
      document.body.classList.remove("body-menu-open");
    }
    return () => document.body.classList.remove("body-menu-open");
  }, [burger]);

  // Закрытие по Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setBurger(false);
    };
    if (burger) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [burger]);

  // Закрытие при клике вне
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (e.target.closest(".header__nav-details") || e.target.closest(".header__nav")) return;
      document.querySelectorAll(".header__nav-details[open]").forEach((d) => d.removeAttribute("open"));
    };
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Trap focus
  useEffect(() => {
    if (!burger || !menuPanelRef.current) return;
    closeBtnRef.current?.focus();
    const panel = menuPanelRef.current;
    const focusables = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const onKeyDownTrap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    panel.addEventListener("keydown", onKeyDownTrap);
    return () => panel.removeEventListener("keydown", onKeyDownTrap);
  }, [burger]);

  return (
    <header className="header">
      <div className={`header__promo ${openLng ? "header__promo--lng-open" : ""}`}>
        <div className="container">
          <div className="header__promo-media">
            <img src={fullImageHeaderPromoIcon1} alt="facebook" />
            <img src={fullImageHeaderPromoIcon2} alt="instagram" />
            <img src={fullImageHeaderPromoIcon3} alt="twitter" />
            <img src={fullImageHeaderPromoIcon4} alt="vk" />
            <img src={fullImageHeaderPromoIcon5} alt="whatsapp" />
            <img src={fullImageHeaderPromoIcon6} alt="youtube" />
          </div>
          <div className="header__promo-address">
            <p className="header__promo-text">
              {textInfo?.blocks?.[0]?.address?.[0]?.children?.[0]?.text}
            </p>
            <p className="header__promo-text">
              {textInfo?.blocks?.[0]?.address?.[1]?.children?.[0]?.text}
            </p>
          </div>
          <div className="header__promo-lng">
            <button
              type="button"
              onClick={() => setOpenLng(!openLng)}
              className="header__promo-lng-button"
              aria-expanded={openLng}
            >
              {textInfo?.blocks?.[0]?.lngTitle || selectedLang.toUpperCase()} ▾
            </button>
            {openLng && (
              <ul className="header__promo-lng-list open">
                {["ru", "en", "uz"].map((lng) => (
                  <li key={lng}>
                    <button
                      type="button"
                      className={`header__promo-lng-item ${selectedLang === lng ? "is-active" : ""}`}
                      onClick={() => handleLanguageChange(lng)}
                    >
                      {lng.charAt(0).toUpperCase() + lng.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="header__nav">
        <div className="container">
          <NavLink to="/">
            <img src={fullImagelogo} alt="logo" className="logo" />
          </NavLink>
          
          <ul
            ref={menuPanelRef}
            className={`header__nav-list ${burger ? "active" : ""}`}
            onClick={(e) => e.target.closest("a") && closeBurger()}
          >
            <li className="header__nav-close-wrap">
              <button
                ref={closeBtnRef}
                type="button"
                className="header__nav-close"
                onClick={closeBurger}
                aria-label="Закрыть меню"
              >
                ✕ Закрыть
              </button>
            </li>

            {/* Дропдаун: Об организации */}
            <li className="header__nav-item">
              <details className="header__nav-details">
                <summary className="header__nav-summary" onClick={handleDetailsToggle}>
                   {textInfo?.blocks?.[1]?.about_org} ▾
                </summary>
                <ul className="header__nav-dropdown">
                  <li><NavLink to="/">{textInfo?.blocks?.[1]?.about_org}</NavLink></li>
                  <li><NavLink to="/history">{textInfo?.blocks?.[1]?.history}</NavLink></li>
                  <li><NavLink to="/structure">{textInfo?.blocks?.[1]?.strucure}</NavLink></li>
                  <li><NavLink to="/management">{textInfo?.blocks?.[1]?.management}</NavLink></li>
                  <li><NavLink to="/vacancies">{textInfo?.blocks?.[1]?.vacancy}</NavLink></li>
                </ul>
              </details>
            </li>

            {/* Дропдаун: Деятельность */}
            <li className="header__nav-item">
              <details className="header__nav-details">
                <summary className="header__nav-summary" onClick={handleDetailsToggle}>
                  {textInfo?.blocks?.[1]?.services} ▾
                </summary>
                <ul className="header__nav-dropdown">
                  <li><NavLink to="/activity">{textInfo?.blocks?.[1]?.activity}</NavLink></li>
                  <li><NavLink to="/projects">{textInfo?.blocks?.[1]?.projects}</NavLink></li>
                  <li><NavLink to="/tenders">{textInfo?.blocks?.[1]?.tenders}</NavLink></li>
                </ul>
              </details>
            </li>

            {/* Дропдаун: Опыт и компетенции */}
            <li className="header__nav-item">
              <details className="header__nav-details">
                <summary className="header__nav-summary" onClick={handleDetailsToggle}>
                  {textInfo?.blocks?.[1]?.exp} ▾
                </summary>
                <ul className="header__nav-dropdown">
                  <p className="dropdown-label"> - Раскрытие информации</p>
                  <li><NavLink to="/exp">{textInfo?.blocks?.[1]?.exp}</NavLink></li>
                  <li><NavLink to="/corp-manage">{textInfo?.blocks?.[1]?.corp_manage}</NavLink></li>
                  <li><NavLink to="/significant-facts">{textInfo?.blocks?.[1]?.facts}</NavLink></li>
                  <li><NavLink to="/reports">{textInfo?.blocks?.[1]?.reports}</NavLink></li>
                  <li><NavLink to="/FXD-table">{textInfo?.blocks?.[1]?.table_fxd}</NavLink></li>
                  <li><NavLink to="/faces">{textInfo?.blocks?.[1]?.faces}</NavLink></li>
                  <li><NavLink to="/stratagy">{textInfo?.blocks?.[1]?.strategy}</NavLink></li>
                  <li><NavLink to="/business-plan">{textInfo?.blocks?.[1]?.business_plan}</NavLink></li>
                  <li><NavLink to="/prospect">{textInfo?.blocks?.[1]?.prospectus}</NavLink></li>
                  <li><NavLink to="/autdit-conclusion">{textInfo?.blocks?.[1]?.aut_conclusion}</NavLink></li>
                  
                  <p className="dropdown-label"> - {textInfo?.blocks?.[1]?.shareholders}</p>
                  <li><NavLink to="/divident-info">{textInfo?.blocks?.[1]?.info_dividend}</NavLink></li>
                  <li><NavLink to="/business-plan-doing">{textInfo?.blocks?.[1]?.business_plan_doing}</NavLink></li>
                  <li><NavLink to="/voting-results">{textInfo?.blocks?.[1]?.vote_osa}</NavLink></li>
                  <li><NavLink to="/budget-distribution">{textInfo?.blocks?.[1]?.profit}</NavLink></li>
                </ul>
              </details>
            </li>

            <li className="header__nav-item">
              <details className="header__nav-details">
                <summary className="header__nav-summary" onClick={handleDetailsToggle}>
                  {textInfo?.blocks?.[1]?.adventages} ▾
                </summary>
                <ul className="header__nav-dropdown">
                  <li><NavLink to="/adv">{textInfo?.blocks?.[1]?.adventages}</NavLink></li>
                </ul>
              </details>
            </li>

            <li className="header__nav-item">
              <a href="#contacts">{textInfo?.blocks?.[1]?.contacts}</a>
            </li>

            {/* Доп. инфо для мобилки (из версии 2) */}
            <li className="header__nav-mobile-extras">
              <div className="header__nav-mobile-contacts">
                <a href="tel:+998555200404">+998 55 520 04 04</a>
                <a href="mailto:info@uzee.uz">info@uzee.uz</a>
              </div>
              <div className="header__nav-mobile-lng">
                <span>Язык:</span>
                <button type="button" onClick={() => handleLanguageChange("ru")} className={selectedLang === "ru" ? "is-active" : ""}>Ru</button>
                <button type="button" onClick={() => handleLanguageChange("en")} className={selectedLang === "en" ? "is-active" : ""}>En</button>
                <button type="button" onClick={() => handleLanguageChange("uz")} className={selectedLang === "uz" ? "is-active" : ""}>Uz</button>
              </div>
            </li>
          </ul>

          <div
            className={`burger ${burger ? "active" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;