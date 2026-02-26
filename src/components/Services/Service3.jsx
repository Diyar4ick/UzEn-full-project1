import { useSelector } from "react-redux";
// import greet from "../../assets/images/serviceImages/service-3-img.jpg";
// import icon1 from "../../assets/images/serviceImages/service-icon1.jpg";
// import icon2 from "../../assets/images/serviceImages/service-icon2.jpg";
// import icon3 from "../../assets/images/serviceImages/service-icon3.jpg";
// import icon4 from "../../assets/images/serviceImages/service-icon4.jpg";
// import icon5 from "../../assets/images/serviceImages/service-icon5.jpg";

const Service3 = () => {
  const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text)
    const textInfo = Array.isArray(data) ? data[0] : data;

    const service3Card1ImgPath = textInfo?.blocks?.[2]?.service3_card1_img?.[0]?.url;
    const service3Card2ImgPath = textInfo?.blocks?.[2]?.service3_card2_img?.[0]?.url;
    const service3ImgPath = textInfo?.blocks?.[2]?.service3_img?.[0]?.url;
    
    // Полные URL картинок
    const fullService3Card1Img = service3Card1ImgPath ? `${BASE_URL}${service3Card1ImgPath}` : null;
    const fullService3Card2Img = service3Card2ImgPath ? `${BASE_URL}${service3Card2ImgPath}` : null;
    const fullService3Img = service3ImgPath ? `${BASE_URL}${service3ImgPath}` : null;
    
    // Массив всех полных URL
    const serviceImages = [
      fullService3Card1Img,
      fullService3Card2Img,
    ];

    const dataArray = Array.from({length: 2}, (_, i) => {
      const idx = i + 1  
      const serviceCard = textInfo?.blocks?.[2]?.[`service3_card${idx}`]
       
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
    <div className="service-3" id="service3">
      <div className="container">
        <div className="service-3__greet">
          <h4 className="service-3__title">
            {textInfo?.blocks?.[2]?.service3_name}
          </h4>
          <img src={fullService3Img} alt="" className="service-3__greet-img" />
          <span className="service-3__greet-subtitle">{textInfo?.blocks?.[2]?.service3_subtext}</span>
        </div>
        <div className="service-3__content">
          {dataArray.map((serviceCard, idx) => (
            <div key={idx} className="service-3__card">
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

export default Service3;
 