// import sert1 from "../../assets/images/footerSerts/footer-sert1.jpg";
// import sert2 from "../../assets/images/footerSerts/footer-sert2.jpg";
// import sert3 from "../../assets/images/footerSerts/footer-sert3.jpg";
// import sert4 from "../../assets/images/footerSerts/footer-sert4.jpg";
// import sert5 from "../../assets/images/footerSerts/footer-sert5.jpg";
// import logo from "../../assets/images/logo.png";
// import facebook from "../../assets/images/generalIcons/facebook.svg";
// import instagram from "../../assets/images/generalIcons/instagram.svg";
// import twitter from "../../assets/images/generalIcons/twitter.svg";
// import vk from "../../assets/images/generalIcons/vk.svg";
// import whatsapp from "../../assets/images/generalIcons/whatsapp.svg";
// import youtube from "../../assets/images/generalIcons/youtube.svg";
// import email from "../../assets/images/generalIcons/email.svg";
// import phone from "../../assets/images/generalIcons/phone.svg";
// import propCompany1 from "../../assets/images/propCompanies/uzassystem.jpg";
// import propCompany2 from "../../assets/images/propCompanies/srepae.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  
  const { footer } = useSelector((state) => state.global) 
  const textInfo = Array.isArray(footer) ? footer[0] : footer
  
  const emailPath = textInfo?.blocks?.[1]?.email?.url
  const phonePath = textInfo?.blocks?.[1]?.phone?.url
  const logoPath = textInfo?.blocks?.[1]?.logo?.url
  
  const socialImg1Path = textInfo?.blocks?.[1]?.facebook?.url
  const socialImg2Path = textInfo?.blocks?.[1]?.instagram?.url
  const socialImg3Path = textInfo?.blocks?.[1]?.twitter?.url
  const socialImg4Path = textInfo?.blocks?.[1]?.wk?.url
  const socialImg5Path = textInfo?.blocks?.[1]?.whatsapp?.url
  const socialImg6Path = textInfo?.blocks?.[1]?.youtube?.url

  const uzassystemPath = textInfo?.blocks?.[1]?.prop_uzassystem?.url
  const srepaePath = textInfo?.blocks?.[1]?.prop_sd?.url

  const govPath = textInfo?.blocks?.[1]?.company_gov?.url
  const datacenterPath = textInfo?.blocks?.[1]?.company_datacenter?.url
  const mygovPath = textInfo?.blocks?.[1]?.company_mygov?.url
  const gisPath = textInfo?.blocks?.[1]?.company_gis?.url
  const forumPath = textInfo?.blocks?.[1]?.contacts_forum?.url
 
  const emailFullImage = emailPath ? `${BASE_URL}${emailPath}` : null
  const phoneFullImage = phonePath ? `${BASE_URL}${phonePath}` : null
  const logoFullImage = logoPath ? `${BASE_URL}${logoPath}` : null
  
  const socialImg1FullImage = socialImg1Path ? `${BASE_URL}${socialImg1Path}` : null
  const socialImg2FullImage = socialImg2Path ? `${BASE_URL}${socialImg2Path}` : null
  const socialImg3FullImage = socialImg3Path ? `${BASE_URL}${socialImg3Path}` : null
  const socialImg4FullImage = socialImg4Path ? `${BASE_URL}${socialImg4Path}` : null
  const socialImg5FullImage = socialImg5Path ? `${BASE_URL}${socialImg5Path}` : null
  const socialImg6FullImage = socialImg6Path ? `${BASE_URL}${socialImg6Path}` : null

  const uzassystemFullImage = uzassystemPath ? `${BASE_URL}${uzassystemPath}` : null
  const srepaeFullImage = srepaePath ? `${BASE_URL}${srepaePath}` : null

  const govFullImage = govPath ? `${BASE_URL}${govPath}` : null
  const datacenterFullImage = datacenterPath ? `${BASE_URL}${datacenterPath}` : null
  const mygovFullImage = mygovPath ? `${BASE_URL}${mygovPath}` : null
  const gisFullImage = gisPath ? `${BASE_URL}${gisPath}` : null
  const forumFullImage = forumPath ? `${BASE_URL}${forumPath}` : null
 
  
  return (
    <footer className="footer" id="contacts">
      <div className="container">
      <div className="footer__top">
        <div className="footer__contacts">
          <h3 className="footer-h3">{textInfo?.blocks?.[0]?.contacts_title}</h3>
          <div className="footer__email">
            <img src={emailFullImage} alt="" />
            <a href="">{textInfo?.blocks?.[0]?.email}</a>
          </div> 
          <div className="footer__phone">
            <img src={phoneFullImage} alt="" />
            <div className="footer__phone-numbers">
              <p>{textInfo?.blocks?.[0]?.phone_number1}</p>
              <p>{textInfo?.blocks?.[0]?.phone_number2}</p>
            </div>
          </div>
          <div className="footer__address">
            <p>{textInfo?.blocks?.[0]?.address}</p>
          </div>
          <img src={logoFullImage} alt="" className="footer__contacts-logo" />
          <div className="footer__media">
            <h4>{textInfo?.blocks?.[0]?.social_title}</h4>
            <div className="footer__media-images">
              <a href="">
                <img src={socialImg1FullImage} alt="" />
              </a>
              <a href="">
                <img src={socialImg2FullImage} alt="" />
              </a>
              <a href="">
                <img src={socialImg3FullImage} alt="" />
              </a>
              <a href="">
                <img src={socialImg4FullImage} alt="" />
              </a>
              <a href="">
                <img src={socialImg5FullImage} alt="" />
              </a>
              <a href="">
                <img src={socialImg6FullImage} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__map">
          <h3 className="footer-h3">{textInfo?.blocks?.[0]?.map_title}</h3>
          <ul className="footer__map-list">
            <li>
              <Link to='/' className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                {textInfo?.blocks?.[0]?.link_about}
              </Link>
            </li>
            <li>
              <Link to="/activity" className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                {textInfo?.blocks?.[0]?.link_act}
              </Link>
            </li>
            <li>
              <Link to="/exp" className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                {textInfo?.blocks?.[0]?.link_exp}
              </Link>
            </li>
            <li>
              <Link to="/adv" className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                {textInfo?.blocks?.[0]?.link_adv}
              </Link>
            </li>
           
          </ul>
        </div>
         <div className="footer__prop-companies">
          <h3 className="footer-h3">{textInfo?.blocks?.[0]?.company_title}</h3>
          <ul className="footer__map-list">
            <li>
              <a href='https://uzassystem.uz/ru/' className="footer__map-item">
              <img src={uzassystemFullImage} alt="" />
              </a>
            </li>
            <li>
              <a href="https://srepae.com/" className="footer__map-item">
              <img src={srepaeFullImage} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__sert">
          <a href="https://gov.uz/oz"><img src={govFullImage} alt="" /></a>
          <a href="https://dc.uz/"><img src={datacenterFullImage} alt="" /></a>
          <a href="https://my.gov.uz/uz"><img src={mygovFullImage} alt="" /></a>
          <a href="https://gov.uz/oz/uzkomnazorat"><img src={gisFullImage} alt="" /></a>
          <a href="https://uforum.uz/"><img src={forumFullImage} alt="" /></a>
        </div>
      </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
        <p>{textInfo?.blocks?.[0]?.footer_bottom?.[0]?.children?.[0]?.text}</p>
        <p>{textInfo?.blocks?.[0]?.footer_bottom?.[1]?.children?.[0]?.text}</p>
        <p>{textInfo?.blocks?.[0]?.footer_bottom?.[2]?.children?.[0]?.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
