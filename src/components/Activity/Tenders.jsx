import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Tenders = () => {

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className="tenders-page">
      <div className="container">
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            <span className="bold">
              {textInfo?.blocks?.[0]?.card1?.[0]?.date}{" "}
            </span>
            {textInfo?.blocks?.[0]?.card1?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card1?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card1?.[0]?.text}</p>
            <Link to="/tender1" className="tenders-page__card-link">
              {textInfo?.blocks?.[0]?.card1?.[0]?.button}
            </Link>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            <span className="bold">
              {textInfo?.blocks?.[0]?.card2?.[0]?.date}{" "}
            </span>
            {textInfo?.blocks?.[0]?.card2?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card2?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card2?.[0]?.text}</p>
            <Link to="/tender2" className="tenders-page__card-link">
              {textInfo?.blocks?.[0]?.card2?.[0]?.button}
            </Link>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            <span className="bold">
              {textInfo?.blocks?.[0]?.card3?.[0]?.date}{" "}
            </span>
            {textInfo?.blocks?.[0]?.card3?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card3?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card3?.[0]?.text}</p>
            <div className="tenders-page__card-links">
              <Link to="/tender3" className="tenders-page__card-link">
                {textInfo?.blocks?.[0]?.card3?.[0]?.button}
              </Link>
              <a
                href="src/assets/tenderDocuments/оценка.zip"
                download="оценка.zip"
                className="tenders-page__card-link"
              >
                {textInfo?.blocks?.[0]?.card3?.[0]?.button2}
              </a>
            </div>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            <span className="bold">
              {textInfo?.blocks?.[0]?.card4?.[0]?.date}{" "}
            </span>
            {textInfo?.blocks?.[0]?.card4?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card4?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card4?.[0]?.text}</p>
            <Link to="/tender4" className="tenders-page__card-link">
              {textInfo?.blocks?.[0]?.card4?.[0]?.button}
            </Link>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            <span className="bold">
              {textInfo?.blocks?.[0]?.card5?.[0]?.date}{" "}
            </span>
            {textInfo?.blocks?.[0]?.card5?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card5?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card5?.[0]?.text}</p>
            <div className="tenders-page__card-links">
              <Link to="/tender5" className="tenders-page__card-link">
                {textInfo?.blocks?.[0]?.card5?.[0]?.button}
              </Link>
              <a
                href="src/assets/tenderDocuments/msfo.zip"
                download="msfo.zip"
                className="tenders-page__card-link"
              >
                {textInfo?.blocks?.[0]?.card5?.[0]?.button2}
              </a>
            </div>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            <span className="bold">
              {textInfo?.blocks?.[0]?.card6?.[0]?.date}{" "}
            </span>
            {textInfo?.blocks?.[0]?.card6?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card6?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card6?.[0]?.text}</p>
            <div className="tenders-page__card-links">
              <Link to="/tender6" className="tenders-page__card-link">
                {textInfo?.blocks?.[0]?.card6?.[0]?.button}
              </Link>
              
            </div>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            {textInfo?.blocks?.[0]?.card7?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card7?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card7?.[0]?.text}</p>
            <div className="tenders-page__card-links">
               <a
                href="src/assets/tenderDocuments/gnss.zip"
                download="gnss.zip"
                className="tenders-page__card-link"
              >
                {textInfo?.blocks?.[0]?.card7?.[0]?.button2}
              </a>
            </div>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            {textInfo?.blocks?.[0]?.card8?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card8?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card8?.[0]?.text}</p>
            <div className="tenders-page__card-links">
               <a
                href="src/assets/tenderDocuments/digsilent.zip"
                download="digsilent.zip"
                className="tenders-page__card-link"
              >
                {textInfo?.blocks?.[0]?.card8?.[0]?.button2}
              </a>
            </div>
          </div>
        </div>
        <div className="tenders-page__card">
          <p className="tenders-page__card-nav">
            {textInfo?.blocks?.[0]?.card9?.[0]?.subtitle}
          </p>
          <div className="tenders-page__card-content">
            <h3>{textInfo?.blocks?.[0]?.card9?.[0]?.title}</h3>
            <p>{textInfo?.blocks?.[0]?.card9?.[0]?.text}</p>
            <div className="tenders-page__card-links">
               <a
                href="src/assets/tenderDocuments/samfksfasad.zip"
                download="samfksfasad.zip"
                className="tenders-page__card-link"
              >
                {textInfo?.blocks?.[0]?.card9?.[0]?.button2}
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Tenders;
