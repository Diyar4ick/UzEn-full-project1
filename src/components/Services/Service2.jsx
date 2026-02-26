import { useSelector } from "react-redux";
// import greet from "../../assets/images/serviceImages/service-2-img.jpg";
// import icon1 from "../../assets/images/serviceImages/service-icon1.jpg";
// import icon2 from "../../assets/images/serviceImages/service-icon2.jpg";
// import icon3 from "../../assets/images/serviceImages/service-icon3.jpg";
// import icon4 from "../../assets/images/serviceImages/service-icon4.jpg";
// import icon5 from "../../assets/images/serviceImages/service-icon5.jpg";

const Service2 = () => {
  const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text)
    const textInfo = Array.isArray(data) ? data[0] : data;

    const service2Card1ImgPath = textInfo?.blocks?.[1]?.service2_card1_img?.[0]?.url;
    const service2Card2ImgPath = textInfo?.blocks?.[1]?.service2_card2_img?.[0]?.url;
    const service2Card3ImgPath = textInfo?.blocks?.[1]?.service2_card3_img?.[0]?.url;
    const service2Card4ImgPath = textInfo?.blocks?.[1]?.service2_card4_img?.[0]?.url;
    const service2ImgPath = textInfo?.blocks?.[1]?.service2_img?.[0]?.url;
    
    // Полные URL картинок
    const fullService2Card1Img = service2Card1ImgPath ? `${BASE_URL}${service2Card1ImgPath}` : null;
    const fullService2Card2Img = service2Card2ImgPath ? `${BASE_URL}${service2Card2ImgPath}` : null;
    const fullService2Card3Img = service2Card3ImgPath ? `${BASE_URL}${service2Card3ImgPath}` : null;
    const fullService2Card4Img = service2Card4ImgPath ? `${BASE_URL}${service2Card4ImgPath}` : null;
    const fullService2Img = service2ImgPath ? `${BASE_URL}${service2ImgPath}` : null;
    
    // Массив всех полных URL
    const serviceImages = [
      fullService2Card1Img,
      fullService2Card2Img,
      fullService2Card3Img,
      fullService2Card4Img,
    ];

    const dataArray = Array.from({length: 5}, (_, i) => {
      const idx = i + 1  
      const serviceCard = textInfo?.blocks?.[1]?.[`service2_card${idx}`]
       
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
    <div className="service-2" id="service2">
      <div className="container">
        <div className="service-2__greet">
          <h4 className="service-2__title">
            {textInfo?.blocks?.[1]?.service2_name}
          </h4>
          <img src={fullService2Img} alt="" className="service-2__greet-img" />
          <span className="service-2__greet-subtitle">{textInfo?.blocks?.[1]?.service2_subtext}</span>
        </div>
        <div className="service-2__content">
          {dataArray.map((serviceCard, idx) => (
            <div key={idx} className="service-2__card">
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

export default Service2;
 