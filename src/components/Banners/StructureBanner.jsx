import { useSelector } from 'react-redux';
// import structureBannerImg from '../../assets/images/banners/structure-page.jpg'

const StructureBanner = () => {
     const BASE_URL = import.meta.env.VITE_API_URL

     const { header } = useSelector((state) => state.global)
     const textInfo = Array.isArray(header) ? header[0] : header; 
  
     const secondBannerPath = textInfo?.blocks?.[2]?.second_banner?.[0]?.url
     const partnerImgPath = textInfo?.blocks?.[2]?.partner_uet?.[0]?.url

     const fullImageSecondBanner = secondBannerPath ? `${BASE_URL}${secondBannerPath}` : null
     const fullPartnerImage = partnerImgPath ? `${BASE_URL}${partnerImgPath}` : null


  return (
     <div className="structure-banner">
          <div className="structure-banner-first">
            <img src={fullImageSecondBanner} alt="" className="structure-banner-img" />
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
  )
}

export default StructureBanner