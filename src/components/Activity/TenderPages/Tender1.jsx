import { useSelector } from "react-redux";

const Tender1 = () => {
    const { data, status } = useSelector((state) => state.text)
    const textInfo = Array.isArray(data) ? data[0] : data;

    if (status === 'loading' || !data) {
      return <div>Загрузка...</div>
    }
  return (
    <div className="tenders-page__info1">
      <div className="container">
        <h3 className="bold">
        {textInfo?.blocks?.[0]?.title}
          <span className="enter"></span>
          {textInfo?.blocks?.[0]?.subtitle}
        </h3>
        <p>
          <span className="bold">{textInfo?.blocks?.[0]?.description?.[0]?.children?.[0]?.text}</span>
          <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.slice(1, 17).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}

          <span className="enter"></span>
          <span className="bold">
           {textInfo?.blocks?.[0]?.description?.[17]?.children?.[0]?.text}
          </span>
          <ul>
            {textInfo?.blocks?.[0]?.description?.slice(18, 25).map((text, idx) => (
            <li key={idx}>
              <p>
                {text?.children?.[0]?.text}
              </p>
            </li>
          ))}
          </ul>
          <span className="enter"></span>
          <span className="bold">{textInfo?.blocks?.[0]?.description?.[25]?.children?.[0]?.text}</span>
          <span className="enter"></span>
          <ul>
            {textInfo?.blocks?.[0]?.description?.slice(26, 31).map((text, idx) => (
            <li key={idx}>
              <p>
                {text?.children?.[0]?.text}
              </p>
            </li>
          ))}
           
          </ul>
          <span className="enter"></span>
          <span className="bold">
            {textInfo?.blocks?.[0]?.description?.[31]?.children?.[0]?.text}
          </span>
          <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.slice(32, 39).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Tender1;
