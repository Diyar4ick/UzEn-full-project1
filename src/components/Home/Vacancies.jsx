import { useSelector } from "react-redux";

const Vacancies = () => {

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="vacancy-page container">
      {/* <h3 className="main-title">{textInfo?.title}</h3> */}
      <div className="vacancy-page__card">
        <div className="vacancy-page__content1">
         <p>
          <span className="bold">{textInfo?.blocks?.[0]?.description?.[0]?.children?.[0]?.text}</span>
          <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[1]?.children?.[0]?.text}
          <span className="enter"></span>
          <span className="bold">{textInfo?.blocks?.[0]?.description?.[2]?.children?.[0]?.text}</span>
          <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[3]?.children?.[0]?.text}
          <span className="enter"></span>
          <span className="bold">{textInfo?.blocks?.[0]?.description?.[4]?.children?.[0]?.text}</span>
          <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.slice(5, 14).map((item, index) => (
            <p key={index}>{item?.children?.[0]?.text}
            <span className="enter"></span>
            </p>
        ))}
          <span className="enter"></span>
          <span className="bold">{textInfo?.blocks?.[0]?.description?.[15]?.children?.[0]?.text}</span>
          <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.slice(16, 39).map((item, index) => (
            <p key={index}>{item?.children?.[0]?.text}
            <span className="enter"></span>
            </p>
        ))}
        <span className="bold">{textInfo?.blocks?.[0]?.description?.[39]?.children?.[0]?.text}</span>
        <span className="enter"></span>
        {textInfo?.blocks?.[0]?.description?.[40]?.children?.[0]?.text}
        <span className="enter"></span>
        {textInfo?.blocks?.[0]?.description?.[41]?.children?.[0]?.text}
         </p>
        </div>
      </div>
      <p className="vacancy-page__details">
        {textInfo?.details?.[0]?.children?.[0]?.text}
        <span className="enter"></span>
        {textInfo?.details?.[1]?.children?.[0]?.text}
        <span className="enter"></span>
        {textInfo?.details?.[2]?.children?.[0]?.text}
        <span className="enter"></span>
        {textInfo?.details?.[3]?.children?.[0]?.text}
        <span className="enter"></span>
        {textInfo?.details?.[4]?.children?.[0]?.text}
        <span className="enter"></span>
        <span className="bold">
          {textInfo?.details?.[5]?.children?.[0]?.text}
        </span>
      </p>
    </div>
  );
};

export default Vacancies;
