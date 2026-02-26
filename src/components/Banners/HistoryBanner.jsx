import { useSelector } from 'react-redux';
// import historyBannerImg from '../../assets/images/banner-2.jpg'

const HistoryBanner = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  
     const { header } = useSelector((state) => state.global)
     const textInfo = Array.isArray(header) ? header[0] : header; 
  
     const historyBannerPath = textInfo?.blocks?.[2]?.history_banner?.[0]?.url
     const partnerImgPath = textInfo?.blocks?.[2]?.partner_uet?.[0]?.url

     const fullImageHistoryBanner = historyBannerPath ? `${BASE_URL}${historyBannerPath}` : null
     const fullPartnerImage = partnerImgPath ? `${BASE_URL}${partnerImgPath}` : null


  return (
    <div className="main-banner">
      <div className="main-banner-first">
        <img src={fullImageHistoryBanner} alt="" className="main-banner-img" />
        <div className="main-banner-black">
          <div className="container">
            <h1>
              {textInfo?.blocks?.[2]?.title}
              <span>UZEE</span>
            </h1>
          </div>
        </div>
      </div> 
       <div className="main-banner-second">
          <div className="container">
            <p>
              <span className="main-banner-second-span1">
                <span className="main-banner-second-span2">70</span>
                <span className="main-banner-second-span3">  
                  <span className="main-banner-second-span4">{textInfo?.blocks?.[2]?.text_year}</span> 
                  {textInfo?.blocks?.[2]?.text_work}
                </span>
              </span>
             {textInfo?.blocks?.[2]?.description}
            </p>
            <img src={fullPartnerImage} alt="" className='partner-img'/>
          </div>
        </div>
    </div>
  );
};

export default HistoryBanner;
 