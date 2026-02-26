// import companyIcon1 from "../../assets/images/companyIcons/company-icon1.jpg";
// import companyIcon2 from "../../assets/images/companyIcons/company-icon2.jpg";
// import companyIcon3 from "../../assets/images/companyIcons/company-icon3.jpg";
// import companyIcon4 from "../../assets/images/companyIcons/company-icon4.jpg";
// import companyIcon5 from "../../assets/images/companyIcons/company-icon5.jpg";
// import companyIcon6 from "../../assets/images/companyIcons/company-icon6.jpg";
// import companyIcon7 from "../../assets/images/companyIcons/company-icon7.jpg";
// import companyIcon8 from "../../assets/images/companyIcons/company-icon8.jpg";
// import companyIcon9 from "../../assets/images/companyIcons/company-icon9.jpg";
// import companyIcon10 from "../../assets/images/companyIcons/company-icon10.jpg";
// import companyIcon11 from "../../assets/images/companyIcons/company-icon11.jpg";
// import companyBanner from "../../assets/images/companyIcons/company-banner.jpg";

// import logo2 from "../../assets/images/logo2.jpg";
import Service1 from "../Services/Service1";
import Service2 from "../Services/Service2";
import Service3 from "../Services/Service3";
import { useSelector } from "react-redux";

const Activity = () => {
  const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const logoPath = textInfo?.blocks?.[3]?.logo?.[0]?.url;
  const bannerPath = textInfo?.blocks?.[3]?.backround?.[0]?.url;

  const fullLogo = logoPath ? `${BASE_URL}${logoPath}` : null;
  const fullBanner = bannerPath ? `${BASE_URL}${bannerPath}` : null;

  const companyIcons = [];

  for (let i = 1; i < 14; i++) {
    const imgPath = textInfo?.blocks?.[3]?.[`company_icon${i}`]?.[0]?.url;

    const fullImg = imgPath ? `${BASE_URL}${imgPath}` : null;

    companyIcons.push(fullImg);
  }

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className="activity-page">
      <Service1 />
      <Service2 />
      <Service3 />
      <section className="activity-page__section3">
        <div className="activity-page__section3-nav">
          <h3 className="main-title">{textInfo?.blocks?.[3]?.title}</h3>
          <img src={fullLogo} alt="" className="logo-2" />
        </div>
        <img
          src={fullBanner}
          alt=""
          className="activity-page__section3-banner"
        />
        <div className="container">
          <div className="activity-page__section3-content">
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card1_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[0]} alt="" />
                <img src={companyIcons[9]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card2_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[5]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card3_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[7]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card4_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[7]} alt="" />
                <img src={companyIcons[8]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card5_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[1]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card6_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[2]} alt="" />
                <img src={companyIcons[3]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card7_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[10]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card8_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[6]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card9_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[8]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card10_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[4]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card11_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[6]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card12_description}</p>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card13_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[6]} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>{textInfo?.blocks?.[3]?.card14_description}</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcons[8]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="activity-page__section4">
        <div className="container">
          <h4 className="bold">{textInfo?.blocks?.[4]?.title}</h4>
          <ul>
            {textInfo?.blocks?.[4]?.description?.map((item, idx) => {
              return (
                <li key={idx}>
                  <p>{item?.children?.[0]?.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Activity;
