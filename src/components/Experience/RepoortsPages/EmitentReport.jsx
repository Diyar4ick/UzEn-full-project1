import { useSelector } from "react-redux";
import Detail from "../../Details/Detail";
import Detail2 from "../../Details/Detail2";

const EmitentReport = () => {
    
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

   const factPdfLinks = [
    "src/assets/pdfs/EmitentReportPdf/otchet_emmitent1_2023.pdf",
    "src/assets/pdfs/EmitentReportPdf/otchet_emmitent3_2022.pdf",
    "src/assets/pdfs/EmitentReportPdf/otchet_emmitent2_2022.pdf",
    "src/assets/pdfs/EmitentReportPdf/otchet_emmitent1_2022.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_3kvartal_2021.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_2kvartal_2021.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_1kvartal_2021.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_3kvartal_2020.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_2kvartal_2020.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_1kvartal_2020.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_3kvartal_2019.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_2kvartal_2019.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_1kvartal_2019.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_3kvartal_2018.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_2kvartal_2018.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_1kvartal_2018.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_3kvartal_2017.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_2kvartal_2017.pdf",
    "src/assets/pdfs/EmitentReportPdf/emitent_1kvartal_2017.pdf",
  ];
  if (status === "loading" || !data) {
    return <div>Загрузка...</div>; 
  }
  return (
     <div className="corp-manage-page">
      <div className="container">
        <Detail/>
        <div className="corp-manage-page__content">
          <h3 className="main-title">{textInfo?.blocks[0]?.title}</h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                <td colSpan={2} className="corp-manage-page__table-title">
                  <p>{textInfo?.blocks[0]?.table_title}</p>
                </td> 
              </tr>
              {textInfo?.blocks?.[0]?.table_content?.map((fact, idx) => (
              <tr key={idx}>
                <td><p>{fact?.children?.[0]?.text}</p></td>
                <td><a href={factPdfLinks[idx]} target="_blank">{textInfo?.blocks[0]?.table_link}</a></td>
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

export default EmitentReport