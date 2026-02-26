import { useSelector } from "react-redux";
// import greet from "../../assets/images/serviceImages/service-1-img.jpg";
// import icon1 from "../../assets/images/serviceImages/service-icon1.jpg";
// import icon2 from "../../assets/images/serviceImages/service-icon2.jpg";
// import icon3 from "../../assets/images/serviceImages/service-icon3.jpg";
// import icon4 from "../../assets/images/serviceImages/service-icon4.jpg";
// import icon5 from "../../assets/images/serviceImages/service-icon5.jpg";

const Service1 = () => {
    const BASE_URL = import.meta.env.VITE_API_URL

    const { data, status } = useSelector((state) => state.text)
    const textInfo = Array.isArray(data) ? data[0] : data;

    const service1Card1ImgPath = textInfo?.blocks?.[0]?.service1_card1_img?.[0]?.url;
    const service1Card2ImgPath = textInfo?.blocks?.[0]?.service1_card2_img?.[0]?.url;
    const service1Card3ImgPath = textInfo?.blocks?.[0]?.service1_card3_img?.[0]?.url;
    const service1Card4ImgPath = textInfo?.blocks?.[0]?.service1_card4_img?.[0]?.url;
    const service1Card5ImgPath = textInfo?.blocks?.[0]?.service1_card5_img?.[0]?.url;
    const service1ImgPath = textInfo?.blocks?.[0]?.service_img?.[0]?.url;
    
    // Полные URL картинок
    const fullService1Card1Img = service1Card1ImgPath ? `${BASE_URL}${service1Card1ImgPath}` : null;
    const fullService1Card2Img = service1Card2ImgPath ? `${BASE_URL}${service1Card2ImgPath}` : null;
    const fullService1Card3Img = service1Card3ImgPath ? `${BASE_URL}${service1Card3ImgPath}` : null;
    const fullService1Card4Img = service1Card4ImgPath ? `${BASE_URL}${service1Card4ImgPath}` : null;
    const fullService1Card5Img = service1Card5ImgPath ? `${BASE_URL}${service1Card5ImgPath}` : null;
    const fullService1Img = service1ImgPath ? `${BASE_URL}${service1ImgPath}` : null;
    
    // Массив всех полных URL
    const serviceImages = [
      fullService1Card1Img,
      fullService1Card2Img,
      fullService1Card3Img,
      fullService1Card4Img,
      fullService1Card5Img,
    ];

    const dataArray = Array.from({length: 5}, (_, i) => {
      const idx = i + 1  
      const serviceCard = textInfo?.blocks?.[0]?.[`service1_card${idx}`]
       
      return {
        img: serviceImages[i],
        title: serviceCard?.[0]?.title || serviceCard?.title, 
        description: serviceCard?.[0]?.description || serviceCard?.description
      }
    })
    
    if (status === 'loading' || !data) { 
      return <div>Загрузка...</div>
    }

  return (
    <div className="service-1" id="service1">
      <div className="container"> 
        <div className="service-1__greet">
          <h3 className="main-title">
           {textInfo?.blocks?.[0]?.title} 
          </h3>
          <h4 className="service-1__title">
            {textInfo?.blocks?.[0]?.service_name}
          </h4>
          <img src={fullService1Img} alt="" className="service-1__greet-img" />
          <span className="service-1__greet-subtitle">{textInfo?.blocks?.[0]?.service_subtext}</span>
        </div>
        <div className="service-1__content">
          {dataArray.map((serviceCard, idx) => (
            <div key={idx} className="service-1__card">
            <img src={serviceCard.img} alt="" />
            <h4>{serviceCard.title}</h4>
            <ul> 
              <li>
                <p className="">{serviceCard.description}</p>
              </li>
            </ul>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service1;
 