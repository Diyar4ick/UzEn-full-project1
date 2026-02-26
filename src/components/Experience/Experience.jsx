// import homePageIconImg from "../../assets/images/iconBanner-left.svg";
// import map from "../../assets/images/uzbMap.png";
// import cyrcle from "../../assets/images/generalIcons/cyrcle.svg";
// import icon from "../../assets/images/serviceImages/service-icon10.jpg";

// import expImg1 from "../../assets/images/expImg1.jpg";
// import expImg2 from "../../assets/images/expImg2.jpg";

// import sertIcon from "../../assets/images/serviceImages/service-icon11.jpg";

// import sert1 from "../../assets/images/serts/sert1.jpg";
// import sert2 from "../../assets/images/serts/sert2.jpg";
// import sert22 from "../../assets/images/serts/sert2-2.jpg";
// import sert3 from "../../assets/images/serts/sert3.jpg";
// import sert32 from "../../assets/images/serts/sert3-2.jpg";
// import sert4 from "../../assets/images/serts/sert4.jpg";
// import sert42 from "../../assets/images/serts/sert4-2.jpg";
// import sert5 from "../../assets/images/serts/sert5.jpg";
// import sert52 from "../../assets/images/serts/sert5-2.jpg";
// import sert6 from "../../assets/images/serts/sert6.jpg";

// import map2 from "../../assets/images/map.jpg";

// import partnersImg1 from "../../assets/images/partners/img1.png";
// import partnersImg2 from "../../assets/images/partners/img2.png";
// import partnersImg3 from "../../assets/images/partners/img3.jpg";
// import partnersImg4 from "../../assets/images/partners/img4.svg";
// import partnersImg5 from "../../assets/images/partners/img5.svg";
// import partnersImg6 from "../../assets/images/partners/img6.png";
// import partnersImg7 from "../../assets/images/partners/img7.jpg";
// import partnersImg9 from "../../assets/images/partners/img9.jpg";
// import partnersImg10 from "../../assets/images/partners/img10.jpg";
// import partnersImg11 from "../../assets/images/partners/img11.jpg";

// import clientsImg1 from "../../assets/images/clients/img1.jpg";
// import clientsImg2 from "../../assets/images/clients/img2.jpg";
// import clientsImg3 from "../../assets/images/clients/img3.png";
// import clientsImg4 from "../../assets/images/clients/img4.png";
// import clientsImg5 from "../../assets/images/clients/img5.png";
// import clientsImg6 from "../../assets/images/clients/img6.jpg";
// import clientsImg7 from "../../assets/images/clients/img7.jpg";
// import clientsImg8 from "../../assets/images/clients/img8.png";
// import clientsImg9 from "../../assets/images/clients/img9.jpg";
// import clientsImg10 from "../../assets/images/clients/img10.jpg";
// import clientsImg11 from "../../assets/images/clients/img11.jpg";
// import clientsImg12 from "../../assets/images/clients/img12.png";

import { useState } from "react";
import LicenzModal from "../LicenzModal/LicenzModal";
import { useSelector } from "react-redux";

const Experience = () => {
  const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text)
  const textInfo = Array.isArray(data) ? data[0] : data; 

  // const bannerLeftPath = textInfo?.blocks?.[0]?.banner_left?.[0]?.url
  const mapPath = textInfo?.blocks?.[0]?.map?.[0]?.url
  const cyrclePath = textInfo?.blocks?.[0]?.cyrcle?.[0]?.url
  const expImg1Path = textInfo?.blocks?.[1]?.exp_img1?.[0]?.url
  const expImg2Path = textInfo?.blocks?.[1]?.exp_img2?.[0]?.url
  const expFooterImgPath = textInfo?.blocks?.[1]?.exp_footer_img?.[0]?.url
  const clientsImg9Path = textInfo?.blocks?.[4]?.client9?.[0]?.url
  const clientsImg10Path = textInfo?.blocks?.[4]?.client10?.[0]?.url
  const clientsImg11Path = textInfo?.blocks?.[4]?.client11?.[0]?.url
  const clientsImg12Path = textInfo?.blocks?.[4]?.client12?.[0]?.url
  const clientMapPath = textInfo?.blocks?.[4]?.client_map?.[0]?.url
  const sertIconPath = textInfo?.blocks?.[2]?.sert_icon?.[0]?.url || textInfo?.blocks?.[2]?.sert_icon?.url

  // const fullImgBannerLeft = bannerLeftPath ? `${BASE_URL}${bannerLeftPath}` : null
  const fullImgMap = mapPath ? `${BASE_URL}${mapPath}` : null
  const fullImgCyrcle = cyrclePath ? `${BASE_URL}${cyrclePath}` : null
  const fullExpImg1 = expImg1Path ? `${BASE_URL}${expImg1Path}` : null
  const fullExpImg2 = expImg2Path ? `${BASE_URL}${expImg2Path}` : null
  const fullExpFooterImg = expFooterImgPath ? `${BASE_URL}${expFooterImgPath}` : null
  const fullClientImg9 = clientsImg9Path ? `${BASE_URL}${clientsImg9Path}` : null
  const fullClientImg10 = clientsImg10Path ? `${BASE_URL}${clientsImg10Path}` : null
  const fullClientImg11 = clientsImg11Path ? `${BASE_URL}${clientsImg11Path}` : null
  const fullClientImg12 = clientsImg12Path ? `${BASE_URL}${clientsImg12Path}` : null
  const fullClientMapImg = clientMapPath ? `${BASE_URL}${clientMapPath}` : null
  const fullSertIcon = sertIconPath ? `${BASE_URL}${sertIconPath}` : null

  const licenzImages = [];
  const partnersImages = [];
  const clientsImages = [];
  for (let i = 1; i <= 8; i++) {
    const imgPath = textInfo?.blocks?.[2]?.[`sertificate${i}`]?.[0]?.url
    const fullImg = imgPath ? `${BASE_URL}${imgPath}` : null
    licenzImages.push(fullImg)
  }
  for (let i = 1; i <= 11; i++) {
    const imgPath = textInfo?.blocks?.[3]?.[`partner${i}`]?.[0]?.url
    const fullImg = imgPath ? `${BASE_URL}${imgPath}` : null
    partnersImages.push(fullImg)
  }
  for (let i = 1; i <= 8; i++) {
    const imgPath = textInfo?.blocks?.[4]?.[`client${i}`]?.[0]?.url
    const fullImg = imgPath ? `${BASE_URL}${imgPath}` : null
    clientsImages.push(fullImg)
  }

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (y / rect.height - 0.5) * -20;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;

    card.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
  };
  const [modal, setModal] = useState(false);
  const [imgIdx, setImgIdx] = useState(null);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

    if (status === 'loading' || !data) {
      return <div>Загрузка...</div>
    }
  return (
    <div className="exp-page">
      <section className="exp-page__section1">
        {/* <img src={fullImgBannerLeft} alt="" className="iconBannerImg" /> */}
        <h3 className="main-title">
          {textInfo?.blocks?.[0]?.title}
        </h3>
        <div className="exp-page__section1-map">
          <img src={fullImgMap} alt="" className="exp-page__section1-map-img" />
          <div className="exp-page__section1-map-cards">
            <div className="exp-page__section1-map-amount1">
              <h5>
                <img src={fullImgCyrcle} alt="" />
                {textInfo?.blocks?.[0]?.map_amount1?.[0]?.map_amount_num}
              </h5>
              <p>{textInfo?.blocks?.[0]?.map_amount1?.[0]?.map_amount_text}</p>
            </div>
            <div className="exp-page__section1-map-amount2">
              <h5>
                <img src={fullImgCyrcle} alt="" />
                {textInfo?.blocks?.[0]?.map_amount2?.[0]?.map_amount_num}
              </h5>
              <p>{textInfo?.blocks?.[0]?.map_amount2?.[0]?.map_amount_text}</p>
            </div>
            <div className="exp-page__section1-map-amount3">
              <h5>
                <img src={fullImgCyrcle} alt="" />
                {textInfo?.blocks?.[0]?.map_amount3?.[0]?.map_amount_num}
              </h5>
              <p>{textInfo?.blocks?.[0]?.map_amount3?.[0]?.map_amount_text}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="exp-page__section2">
        <div className="container">
          <h3 className="main-title">
            {textInfo?.blocks?.[1]?.title}
          </h3>
          <div className="exp-page__section2-content">
            <div className="exp-page__section2-box">
              <img src={fullExpImg1} alt="" />
              <p>{textInfo?.blocks?.[1]?.our_exp_comp_box1?.box_text || textInfo?.blocks?.[1]?.our_exp_comp_box1?.[0]?.box_text}</p>
            </div>
            <div className="exp-page__section2-box">
              <img src={fullExpImg2} alt="" />
              <p>{textInfo?.blocks?.[1]?.our_exp_comp_box2?.box_text || textInfo?.blocks?.[1]?.our_exp_comp_box2?.[0]?.box_text}</p>
            </div>
          </div>
          <div className="exp-page__section2-footer">
            <img src={fullExpFooterImg} alt="" />
            <p>{textInfo?.blocks?.[1]?.exp_subtext}</p>
          </div>
        </div>
      </section>
      <section className="exp-page__section3">
        <div className="container">
          <div className="exp-page__section3-content">
            <h3 className="main-title">
              {textInfo?.blocks?.[2]?.title}
            </h3>
            <img src={fullSertIcon} alt="" />
            <p className="main-subtitle">
              {textInfo?.blocks?.[2]?.sert_description}
            </p>
          </div>
          <div className="exp-page__section3-certificates-grid">
          {licenzImages.map((img, index) => (
            <img
              src={img}
              key={index}
              alt="" 
              className="exp-page__section3-img1"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                openModal();
                setImgIdx(index);
              }}
            />
          ))}
          </div>
          {modal && (
            <LicenzModal close={closeModal} img={licenzImages[imgIdx]} />
          )}
        </div>
      </section>
      <section className="exp-page__section4">
        <h3 className="main-title">
          {textInfo?.blocks?.[3]?.title}
        </h3>
        <div className="exp-page__section4-partners">
         {partnersImages?.map((partnerImg, idx) => (
          <img key={idx} src={partnerImg} alt="" />
         ))}
        </div>
      </section>
      <section className="exp-page__section5">
        <h3 className="main-title">
         {textInfo?.blocks?.[4]?.title}
        </h3>
        <div className="exp-page__section5-clients container">
          {clientsImages?.map((clientImg, idx) => (
          <img key={idx} src={clientImg} alt="" />
         ))}
        </div>
      </section>
      <section className="exp-page__section6">
          <div className="exp-page__section6-img">
            <img src={fullClientImg9} alt="" />
          </div>
          <div className="exp-page__section6-img">
            <img src={fullClientImg10} alt="" />
          </div>
          <div className="exp-page__section6-img">
            <img src={fullClientImg11} alt="" />
          </div>
          <div className="exp-page__section6-img">
            <img src={fullClientMapImg} alt="" />
          </div>
          <div className="exp-page__section6-img">
              <img src={fullClientImg12} alt="" />
          </div>
              
      </section>
    </div>
  );
};
 
export default Experience; 
