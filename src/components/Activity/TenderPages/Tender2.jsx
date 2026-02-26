import { useSelector } from "react-redux";

const Tender2 = () => {

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
          {textInfo?.blocks?.[0]?.description?.slice(0, 5).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
          <ul>
            {textInfo?.blocks?.[0]?.description?.slice(5, 8).map((text, idx) => (
            <li key={idx}>
              <p>
                {text?.children?.[0]?.text}
              </p>
            </li>
          ))}
          </ul>
         {textInfo?.blocks?.[0]?.description?.slice(8, 11).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
          <span className="bold">
           {textInfo?.blocks?.[0]?.description?.[11]?.children?.[0]?.text}
          </span>
          <ul>
            <li>
              <p>
                {textInfo?.blocks?.[0]?.description?.[12]?.children?.[0]?.text}
              </p>
            </li>
            <li>
              <p>
                {textInfo?.blocks?.[0]?.description?.[13]?.children?.[0]?.text}
              </p>
            </li>
          </ul>
          {textInfo?.blocks?.[0]?.description?.slice(14, 23).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Tender2;
 