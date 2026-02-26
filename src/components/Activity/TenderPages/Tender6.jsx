import { useSelector } from "react-redux";

const Tender6 = () => {

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
          {textInfo?.blocks?.[0]?.description?.slice(0, 12).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
        </p>
        <h3 className="bold"> {textInfo?.blocks?.[0]?.title2}</h3>
        <span className="enter"></span>
        <h3 className="bold"> {textInfo?.blocks?.[0]?.title_num}</h3>
        <span className="enter"></span>
        <h3> {textInfo?.blocks?.[0]?.title_table}</h3>
        <h3 className="enter"></h3>
          { textInfo?.blocks?.[0]?.table_description?.slice(0, 4).map((text, idx) => (
            <p key={idx}>{text.children?.[0]?.text}
            <span className="enter"></span></p>
          ))}
        <span className="enter"></span>
        <table className="tenders-page__info1-table" border="1" cellpadding="">
          <tbody>
            <tr>
              <td>{textInfo?.blocks?.[0]?.table?.[0]?.children?.[0]?.text}</td>
              <td>{textInfo?.blocks?.[0]?.table?.[1]?.children?.[0]?.text}</td>
              <td>{textInfo?.blocks?.[0]?.table?.[2]?.children?.[0]?.text}</td>
              <td>{textInfo?.blocks?.[0]?.table?.[3]?.children?.[0]?.text}</td>
            </tr>
            <tr>
              <td>{textInfo?.blocks?.[0]?.table?.[4]?.children?.[0]?.text}</td>
              <td>{textInfo?.blocks?.[0]?.table?.[5]?.children?.[0]?.text}</td>
              <td>{textInfo?.blocks?.[0]?.table?.[6]?.children?.[0]?.text}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <span className="enter"></span>
        <span className="enter"></span>
        <span className="enter"></span>
        <table className="tenders-page__info1-table" border="1" cellpadding="">
          <tbody>
           {(() => {
              const rows = [];
              const table = textInfo?.blocks?.[0]?.table?.slice(7, 29) || [];

              for (let i = 0; i < table.length; i += 2) {
                rows.push(
                  <tr key={i}>
                    <td>
                      {table[i].children?.[0]?.text}
                    </td>
                    <td>
                      {table[i + 1].children?.[0]?.text}
                    </td>
                  </tr>,
                );
              }
              return rows
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tender6;
 