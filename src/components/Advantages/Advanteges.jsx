// import cubes from "../../assets/images/generalIcons/cubes.png";
// import boxes from "../../assets/images/generalIcons/boxes.svg";
// import person from "../../assets/images/generalIcons/person.png";
// import newspaper from "../../assets/images/generalIcons/newspaper.png";
import { useSelector } from "react-redux";

const Advanteges = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;
  
   const dataArray = Array.from({length: 4}, (_, i) => {
      const idx = i + 1  
      const advCard = textInfo?.blocks?.[1]?.[`card${idx}`]
      const advImgPath = textInfo?.blocks?.[1]?.[`card_icon${idx}`]?.[0]?.url
      const fullAdvImg = advImgPath ? `${BASE_URL}${advImgPath}` : null
       
      return {
        title: advCard?.[0]?.card_title || advCard?.card_title,
        text: advCard?.[0]?.card_description || advCard?.card_description,
        img: fullAdvImg,
      }
    })
  
  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className="adv-page">
      <section className="adv-page__section1">
        <div className="container">
          <div className="adv-page__section1-title">
            <h2>{textInfo?.blocks?.[0]?.title}</h2>
          </div>
          <div className="adv-page__section1-reasons">
            {textInfo?.blocks?.[0]?.reasons?.map((reason, idx) => (
            <div key={idx} className="adv-page__section1-reason">
              <span>{idx + 1}</span>
              <p>{reason?.children?.[0]?.text || reason?.text}</p>
            </div>
            ))}
          
          </div>
        </div>
      </section>
     <section className="adv-page__section2">
        <div className="container">
          <h3 className="adv-page__section2-title">{textInfo?.blocks?.[1]?.title}</h3>
          <div className="adv-page__section2-content">
          {dataArray.map((advCard, idx) => (
            <div key={idx} className="adv-page__section2-card">
              <img src={advCard.img} alt="" />
              <div className="">
                <h4>{advCard.title}</h4>
                <p>
                  {advCard.text}
                </p>
              </div>
            </div>
           
          ))}
           
          </div>
        </div>
    </section>
    </div>
  );
};

export default Advanteges;
 