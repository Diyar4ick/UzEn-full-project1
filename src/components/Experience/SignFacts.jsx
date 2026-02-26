// import img3 from "../../assets/images/generalIcons/facts.jpg";
import { Link } from "react-router-dom";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";
import { useSelector } from "react-redux";

const SignFacts = () => {
    const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const factIImgPath = textInfo?.blocks?.[0]?.fact_img?.[0]?.url
  const fullFactIImg = factIImgPath ? `${BASE_URL}${factIImgPath}` : null

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  } 
  return (
    <div className="corp-manage-page"> 
      <div className="container">
        <Detail/>
        <div className="sign-facts-page__content">
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2025?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2025?.[0]?.fact_text}
            </p>
            <a href="">{textInfo?.blocks?.[0]?.fact_link}</a>
          </div>
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2024?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2024?.[0]?.fact_text}
            </p>
            <Link to="/sign-fact2024">{textInfo?.blocks?.[0]?.fact_link}</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2023?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2023?.[0]?.fact_text}
            </p>
            <Link to="/sign-fact2023">{textInfo?.blocks?.[0]?.fact_link}</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2022?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2022?.[0]?.fact_text}
            </p>
            <Link to="/sign-fact2022">{textInfo?.blocks?.[0]?.fact_link}</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2021?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2021?.[0]?.fact_text}
            </p>
            <Link to="/sign-fact2021">{textInfo?.blocks?.[0]?.fact_link}</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2020?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2020?.[0]?.fact_text}
            </p>
            <Link to="/sign-fact2020">{textInfo?.blocks?.[0]?.fact_link}</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={fullFactIImg} alt="" />
            <p>
              <span className="bold">{textInfo?.blocks?.[0]?.card2019?.[0]?.fact_year}</span>
              <span className="enter"></span>
              {textInfo?.blocks?.[0]?.card2019?.[0]?.fact_text}
            </p>
            <Link to="/sign-fact2019">{textInfo?.blocks?.[0]?.fact_link}</Link>
          </div>
        </div>
        <Detail2/> 
      </div>
    </div>
  );
};
 
export default SignFacts;
