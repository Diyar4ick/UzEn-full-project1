import { useSelector } from "react-redux";

const Tender3 = () => {

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
          <span className="enter"></span>
         {textInfo?.blocks?.[0]?.subtitle2}
        </h3>
        <p>
           {textInfo?.blocks?.[0]?.description?.slice(0, 5).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
          <ul>
            <li>
              <p>
                {textInfo?.blocks?.[0]?.description?.[5]?.children?.[0]?.text}
              </p>
            </li>
            <li>
              <p>
                {textInfo?.blocks?.[0]?.description?.[6]?.children?.[0]?.text}
              </p>
            </li>
          </ul>
          {textInfo?.blocks?.[0]?.description?.slice(7, 20).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Tender3;
