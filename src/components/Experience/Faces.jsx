import { useSelector } from "react-redux";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";

const Faces = () => {
  const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;


  const planLinks = [];
  for (let i = 1; i <= 13; i++) {
    const url = textInfo?.blocks[0]?.[`pdf${i}`]?.url ? `${BASE_URL}${textInfo?.blocks[0]?.[`pdf${i}`]?.url}` : ''
    planLinks.push(url ? url : '')
  }

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>; 
  }
  return (
    <div className="corp-manage-page">
      <div className="container">
        <Detail/>
        <div className="corp-manage-page__content">
          <h3 className="main-title">{textInfo?.blocks?.[0]?.title}</h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                <td colSpan={2} className="corp-manage-page__table-title">
                  <p>{textInfo?.blocks?.[0]?.table_title}</p>
                </td>
              </tr>
              {textInfo?.blocks?.[0]?.table_description?.map((face, idx) => (
              <tr key={idx}>
                <td><p>{face?.children?.[0]?.text}</p></td>
                <td><a href={`${planLinks[idx]}`} target="_blank">{textInfo?.blocks[0]?.table_link}</a></td>
              </tr>
             ))}
            </tbody>
          </table>
        </div>
        <Detail2/>
      </div>
    </div>
  );
};

export default Faces;
 