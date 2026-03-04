// import homePageIconImg from "../../assets/images/iconBanner-left.svg";
// import homePageIconImg2 from "../../assets/images/iconBanner-right.svg";
// import persons from "../../assets/images/generalIcons/person-2.svg";
// import statistics from "../../assets/images/generalIcons/statistics.svg";
// import lamp from "../../assets/images/generalIcons/lamp.svg";
// import news from "../../assets/images/news/news-26-january.jpg";
// import news2 from "../../assets/images/news/news-newyear-2026.jpg";
// import news3 from "../../assets/images/news/news-engineering-day.jpg";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import homeBanner from "../../assets/images/homePages/homePageBanner.jpg";

// import areasImg1 from "../../assets/images/homePages/homePageSection3-1.jpg";
// import areasImg2 from "../../assets/images/homePages/homePageSection3-2.jpg";
// import areasImg3 from "../../assets/images/homePages/homePageSection3-3.jpg";
// import areasImg4 from "../../assets/images/projects/project.jpg";

// import checkmark from "../../assets/images/checkmark.svg";
// import adventages from "../../assets/images/companyIcons/company-advantages.jpg";
import MainBanner from "../Banners/MainBanner";
import { useSelector } from "react-redux";

const Home = () => {
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const BASE_URL = import.meta.env.VITE_API_URL
  //section 1 and 2
  const iconLeftPath = textInfo?.blocks?.[0]?.icon_banner_left?.[0]?.url;
  const iconRightPath = textInfo?.blocks?.[1]?.icon_banner_right?.[0]?.url;

  const fullImageUrlIconLeft = iconLeftPath
    ? `${BASE_URL}${iconLeftPath}`
    : null;
  const fullImageUrlIconRight = iconRightPath
    ? `${BASE_URL}${iconRightPath}`
    : null;

  //section 3
  const jointStockIcon1Path = textInfo?.blocks?.[2]?.jointstock_icon1?.url;
  const jointStockIcon2Path = textInfo?.blocks?.[2]?.jointstock_icon2?.url;
  const jointStockIcon3Path = textInfo?.blocks?.[2]?.jointstock_icon3?.url;

  const fullImageUrlJointStockIcon1 = jointStockIcon1Path
    ? `${BASE_URL}${jointStockIcon1Path}`
    : null;
  const fullImageUrlJointStockIcon2 = jointStockIcon2Path
    ? `${BASE_URL}${jointStockIcon2Path}`
    : null;
  const fullImageUrlJointStockIcon3 = jointStockIcon3Path
    ? `${BASE_URL}${jointStockIcon3Path}`
    : null;

  //section4
  const newsCardImg1Path = textInfo?.blocks?.[3]?.news_img1?.url;
  const newsCardImg2Path = textInfo?.blocks?.[3]?.news_img2?.url;
  const newsCardImg3Path = textInfo?.blocks?.[3]?.news_img3?.url;

  const fullImageUrlNewsCardImg1 = newsCardImg1Path
    ? `${BASE_URL}${newsCardImg1Path}`
    : null;
  const fullImageUrlNewsCardImg2 = newsCardImg2Path
    ? `${BASE_URL}${newsCardImg2Path}`
    : null;
  const fullImageUrlNewsCardImg3 = newsCardImg3Path
    ? `${BASE_URL}${newsCardImg3Path}`
    : null;

    // section5 
    const serviceImgPath = textInfo?.blocks?.[4]?.img?.[0]?.url    
    const fullServiceImg = serviceImgPath ? `${BASE_URL}${serviceImgPath}` : null

    //section6
    const sphereImg1Path = textInfo?.blocks?.[5]?.banner1?.[0]?.url
    const sphereImg2Path = textInfo?.blocks?.[5]?.banner2?.[0]?.url
    const sphereImg3Path = textInfo?.blocks?.[5]?.banner3?.[0]?.url
    const sphereImg4Path = textInfo?.blocks?.[5]?.banner4?.[0]?.url

    const fullSphereImg1 = sphereImg1Path ? `${BASE_URL}${sphereImg1Path}` : null
    const fullSphereImg2 = sphereImg2Path ? `${BASE_URL}${sphereImg2Path}` : null
    const fullSphereImg3 = sphereImg3Path ? `${BASE_URL}${sphereImg3Path}` : null
    const fullSphereImg4 = sphereImg4Path ? `${BASE_URL}${sphereImg4Path}` : null

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <MainBanner />
      <div className="home-page">
        <section className="home-page__section1">
          <img src={fullImageUrlIconLeft} alt="" className="iconBannerImg" />
          <div className="container">
            <div className="home-page__section1-content">
              <h3 className="main-title">
                {/* О <span>нас</span> */}
                {textInfo?.blocks?.[0]?.title}
              </h3>
              <p className="home-page__section1-subtitle main-subtitle">
                {textInfo?.blocks?.[0]?.subtitle}
              </p>
              <p className="main-description">
                {textInfo?.blocks?.[0]?.description?.[0]?.children?.[0]?.text}
                <span className="enter"></span>
                {textInfo?.blocks?.[0]?.description?.[1]?.children?.[0]?.text}
                <span className="enter"></span>
                {textInfo?.blocks?.[0]?.description?.[2]?.children?.[0]?.text}
              </p>
            </div>
          </div>
        </section>
        <section className="home-page__section2">
          <div className="container">
            <div className="home-page__section2-content">
              <h3 className="main-title">{textInfo?.blocks?.[1]?.title}</h3>
              <p className="home-page__section2-subtitle main-subtitle">
                {textInfo?.blocks?.[1]?.subtitle}
              </p>
            </div>
          </div>
          <img src={fullImageUrlIconRight} alt="" className="iconBannerImg" />
        </section>
        <section className="home-page__section3">
          <img
            className="home-page__section3-backround"
            src={homeBanner}
            alt=""
          />
          <div className="container">
            <div className="home-page__section3-content">
              <p className="home-page__section3-subtitle">
                {textInfo?.blocks?.[2]?.subtitle}
              </p>
              <h2 className="home-page__section3-title">
                {textInfo?.blocks?.[2]?.title}
              </h2>
              <p className="home-page__section3-description">
                {textInfo?.blocks?.[2]?.text}
              </p>
            </div>
            <div className="home-page__section3-cards">
              <div className="home-page__section3-card">
                <img src={fullImageUrlJointStockIcon1} alt="" />
                <h3>{textInfo?.blocks?.[2]?.card1?.title}</h3>
                <p>{textInfo?.blocks?.[2]?.card1?.description}</p>
              </div>
              <div className="home-page__section3-card">
                <img src={fullImageUrlJointStockIcon2} alt="" />
                <h3>{textInfo?.blocks?.[2]?.card2?.[0].title}</h3>
                <p>{textInfo?.blocks?.[2]?.card2?.[0].description}</p>
              </div>
              <div className="home-page__section3-card">
                <img src={fullImageUrlJointStockIcon3} alt="" />
                <h3>{textInfo?.blocks?.[2]?.card3?.[0].title}</h3>
                <p>{textInfo?.blocks?.[2]?.card3?.[0].description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-page__section4">
          <div className="container">
            <h3 className="home-page__section4-title">
              {textInfo?.blocks?.[3]?.title}
            </h3>
            <div className="home-page__section4-news">
              <div className="home-page__section4-card">
                <img src={fullImageUrlNewsCardImg1} alt="" />
                <div className="home-page__section4-content">
                  <span>
                    <p>{textInfo?.blocks?.[3]?.news_card?.[0]?.title}</p>
                  </span>
                  <h4>
                    {
                      textInfo?.blocks?.[3]?.news_card?.[0]?.description?.[0]
                        ?.children?.[0]?.text
                    }
                  </h4>
                </div>
              </div>
              <div className="home-page__section4-card">
                <img src={fullImageUrlNewsCardImg2} alt="" />
                <div className="home-page__section4-content">
                  <span>
                    <p>{textInfo?.blocks?.[3]?.news_card2?.[0]?.title}</p>
                  </span>
                  <h4>
                    {
                      textInfo?.blocks?.[3]?.news_card2?.[0]?.description?.[0]
                        ?.children?.[0]?.text
                    }
                  </h4>
                </div>
              </div>
              <div className="home-page__section4-card">
                <img src={fullImageUrlNewsCardImg3} alt="" />
                <div className="home-page__section4-content">
                  <span>
                    <p>{textInfo?.blocks?.[3]?.news_card3?.[0]?.title}</p>
                  </span>
                  <h4>
                    {
                      textInfo?.blocks?.[3]?.news_card3?.[0]?.description?.[0]
                        ?.children?.[0]?.text
                    }
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-page__section5">
          <div className="container">
            <img src={fullServiceImg} alt="" className="" />
            <div className="home-page__section5-content">
              <h3 className="main-title">{textInfo?.blocks?.[4]?.title}</h3>
              <p className="main-subtitle">
                {textInfo?.blocks?.[4]?.subtitle}
              </p>
              <ul className="home-page__section5-worklist">
                <li className="home-page__section5-task">
                  <Link smooth to="/activity#service1" className="home-page__section5-work">
                    {textInfo?.blocks?.[4]?.link1}
                  </Link>
                  <ul>
                    <li>
                      <span className="main-description">
                        {textInfo?.blocks?.[4]?.link1_description}
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="home-page__section5-task">
                  <Link smooth to="/activity#service2" className="home-page__section5-work">
                    {textInfo?.blocks?.[4]?.link2}
                  </Link>
                  <ul>
                    <li>
                      <span className="main-description">
                        {textInfo?.blocks?.[4]?.link2_description}
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="home-page__section5-task">
                  <Link smooth to="/activity#service3" p className="home-page__section5-work">
                   {textInfo?.blocks?.[4]?.link3}
                  </Link>
                  <ul>
                    <li>
                      <span className="main-description">
                        {textInfo?.blocks?.[4]?.link3_description}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="home-page__section6">
          <div className="container">
            <div className="home-page__section6-images">
              <img src={fullSphereImg1} alt="" />
              <img src={fullSphereImg2} alt="" />
              <img src={fullSphereImg3} alt="" />
              <img src={fullSphereImg4} alt="" />
            </div>
            <div className="home-page__section6-content">
              <h3 className="main-title">
                {textInfo?.blocks?.[5]?.title}
              </h3>
              <ul className="home-page__section6-list">
                <li>
                  <button className="home-page__section6-btn">
                    {textInfo?.blocks?.[5]?.featurs?.[0]?.children?.[0]?.text}
                  </button>
                </li>
                <li> 
                  <button className="home-page__section6-btn">
                   {textInfo?.blocks?.[5]?.featurs?.[1]?.children?.[0]?.text}
                  </button>
                </li>
                <li>
                  <button className="home-page__section6-btn">
                   {textInfo?.blocks?.[5]?.featurs?.[2]?.children?.[0]?.text}
                  </button>
                </li>
                <li>
                  <button className="home-page__section6-btn">
                    {textInfo?.blocks?.[5]?.featurs?.[3]?.children?.[0]?.text}
                  </button>
                </li>
                <li>
                  <button className="home-page__section6-btn">
                   {textInfo?.blocks?.[5]?.featurs?.[4]?.children?.[0]?.text}
                  </button>
                </li>
                <li>
                  <button className="home-page__section6-btn">
                    {textInfo?.blocks?.[5]?.featurs?.[5]?.children?.[0]?.text}
                  </button>
                </li>
                <li>
                  <button className="home-page__section6-btn">
                   {textInfo?.blocks?.[5]?.featurs?.[6]?.children?.[0]?.text}
                  </button>
                </li>
                <li>
                  <button className="home-page__section6-btn">
                   {textInfo?.blocks?.[5]?.featurs?.[7]?.children?.[0]?.text}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}; 

export default Home;
