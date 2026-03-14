import { useSelector } from "react-redux";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";

const Prospect = () => {
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const BASE_URL = import.meta.env.VITE_API_URL

  const planLinks = []
  for (let i = 1; i <= 3; i++) {
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
          <h3 className="main-title">
            {textInfo?.blocks?.[0]?.title}
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
               {textInfo?.blocks?.[0]?.table_description?.map((prospect, idx) => (
              <tr key={idx}>
                <td><p>{prospect?.children?.[0]?.text}</p></td>
                <td><a href={`${planLinks[idx]}`} target="_blank">{textInfo?.blocks[0]?.table_link}</a></td>
              </tr>
             ))}
            </tbody> 
          </table> 
        </div>
        <Detail2/>
      </div>
    </div>
  )
}

export default Prospect 