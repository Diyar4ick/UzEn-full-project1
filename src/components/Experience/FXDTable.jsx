import { useSelector } from "react-redux";

const FXDTable = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const { data, status } = useSelector((state) => state.text); 
  const textInfo = Array.isArray(data) ? data[0] : data;
  const planLinks = []

  for (let i = 1; i <= 5; i++) {
    const url = textInfo?.blocks[0]?.[`pdf${i}`]?.url ? `${BASE_URL}${textInfo?.blocks[0]?.[`pdf${i}`]?.url}` : ''
    planLinks.push(url ? url : '')
  }

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }

  return ( 
    <div className="FXD-table-page">
      <div className="container">
        <div className="FXD-table-page__table">
          <h3 className="main-title">
            {textInfo?.blocks?.[0]?.title}
          </h3>
          <table className="FXD-table-page__table">
            <tbody>
              <tr>
                <td colSpan={2} className="corp-manage-page__table-title">
                  <p>{textInfo?.blocks?.[0]?.table_title}</p>
                </td>
              </tr>
               {textInfo?.blocks?.[0]?.table_content?.map((cell, idx) => (
              <tr key={idx}>
                <td>
                  <p>
                    {cell?.children?.[0]?.text}
                  </p>
                </td>
                <td>
                  <a href={`${planLinks[idx]}`} target="_blank">{textInfo?.blocks?.[0]?.table_link}</a>
                </td>
              </tr>
               
             ))}
           
            </tbody>
          </table>
        </div>
        <h3 className="main-title bold">
          {textInfo?.blocks?.[1]?.title}
          <span className="enter"></span>
          {textInfo?.blocks?.[1]?.subtitle}
        </h3>
        <span className="enter"></span>
          {textInfo?.blocks?.[1]?.description?.map((text, idx) => (
            <p key={idx}>
              {text?.children?.[0]?.text || text?.text}
              <span className="enter"></span>
            </p>
          ))}
        <h3 className="main-title bold">
           {textInfo?.blocks?.[2]?.title}
          <span className="enter"></span>
          {textInfo?.blocks?.[2]?.subtitle}
        </h3>
        <span className="enter"></span>
         {textInfo?.blocks?.[2]?.description?.map((text, idx) => (
            <p key={idx}>
              {text?.children?.[0]?.text || text?.text}
              <span className="enter"></span>
            </p>
          ))}
        <h3 className="main-title bold">
           {textInfo?.blocks?.[3]?.title}
          <span className="enter"></span>
          {textInfo?.blocks?.[3]?.subtitle}
        </h3>
         {textInfo?.blocks?.[3]?.description?.map((text, idx) => (
            <p key={idx}>
              {text?.children?.[0]?.text || text?.text}
              <span className="enter"></span>
            </p>
          ))}
        <h3 className="main-title bold">
           {textInfo?.blocks?.[4]?.title}
          <span className="enter"></span>
          {textInfo?.blocks?.[4]?.subtitle}
        </h3>
         {textInfo?.blocks?.[4]?.description?.map((text, idx) => (
            <p key={idx}>
              {text?.children?.[0]?.text || text?.text}
              <span className="enter"></span>
            </p>
          ))}
      </div>
    </div>
  ); 
}; 

export default FXDTable;
