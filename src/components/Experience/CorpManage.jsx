import { useSelector } from "react-redux";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";

const CorpManage = () => {

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const dataArray = Array.from({ length: 5 }, (_, i) => {
    const idx = i + 1;
    const memberCard = textInfo?.blocks?.[0]?.[`member${idx}`];

    return {
      name: memberCard?.[0]?.name || memberCard?.name,
      content: memberCard?.[0]?.content || memberCard?.content,
    };
  });

  if (status === "loading" || !data) { 
    return <div>Загрузка...</div>;
  } 
  return (
    <div className="corp-manage-page">
      <div className="container">
        <Detail />
        <div className="corp-manage-page__content">
          <h3 className="main-title">{textInfo?.blocks?.[0]?.title}</h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                {/* <td></td> */}
                <td colSpan={3} className="corp-manage-page__table-title">
                  <p className="">{textInfo?.blocks?.[0]?.table_title1}</p>
                </td>
                {/* <td></td> */}
              </tr>
              {dataArray.map((serviceCard, idx) => (
                <tr key={idx}>
                  <td>
                    <p>{serviceCard?.name}</p>
                  </td>
                  <td>
                    <p>{serviceCard?.content}</p>
                  </td>
                  <td>
                    <a href="">{textInfo?.blocks?.[0]?.table_link}</a>
                  </td>
                </tr>
              ))}
              <tr>
                {/* <td></td> */}
                <td colSpan={3} className="corp-manage-page__table-title">
                  <p className="">{textInfo?.blocks?.[0]?.table_title2}</p>
                </td>
                {/* <td></td> */}
              </tr>
              <tr>
                <td>
                  <p>
                    {textInfo?.blocks?.[0]?.member6?.name ||
                      textInfo?.blocks?.[0]?.member6?.[0]?.name}
                  </p>
                </td>
                <td>
                  <p>
                    {textInfo?.blocks?.[0]?.member6?.content ||
                      textInfo?.blocks?.[0]?.member6?.[0]?.content}
                  </p>
                </td>
                <td>
                  <a href="">{textInfo?.blocks?.[0]?.table_link}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Detail2 />
      </div>
    </div>
  );
};

export default CorpManage;
