import { useSelector } from "react-redux";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";

const VotingResults = () => {

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

          <h3 className="main-title">
            {textInfo?.blocks?.[0]?.title}
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
               {textInfo?.blocks?.[0]?.table_description?.map((face, idx) => (
              <tr key={idx}>
                <td><p>{face?.children?.[0]?.text}</p></td>
                <td><a href='' target="_blank">{textInfo?.blocks[0]?.table_link}</a></td>
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

export default VotingResults;
 