import { useSelector } from "react-redux";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";

const Faces = () => {
  const planLinks = [
      '/pdfs/Faces/afflic_2024.pdf',
      '',
      '/pdfs/Faces/afflic_2022.pdf',
      '/pdfs/Faces/afflic_2022_2.pdf',
      '/pdfs/Faces/afflic_2021.pdf',
      '/pdfs/Faces/afflic_2020.pdf',
      '/pdfs/Faces/afflic_2020_2.pdf',
      '/pdfs/Faces/afflic_2019.pdf',
      '/pdfs/Faces/afflic_2019_2.pdf',
      '/pdfs/Faces/afflic_2019_3.pdf',
      '/pdfs/Faces/afflic_2019_4.pdf',
    ]

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

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
 