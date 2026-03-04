import { useSelector } from "react-redux";
// import img3 from "../../assets/images/general/Icons/otchet.jpg";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";
import { Link } from "react-router-dom";

const Reports = () => {
    const BASE_URL = import.meta.env.VITE_API_URL

    const reportLinks = [
      'src/assets/pdfs/ReportZips/EmitentReportPdf.zip',
      'src/assets/pdfs/ReportZips/YearReportPdf.zip',
      'src/assets/pdfs/ReportZips/CBRFReportPdf.zip',
      'src/assets/pdfs/ReportZips/MSFOReportPdf.zip',
      'src/assets/pdfs/ReportZips/KPIReportPdf.zip',
      'src/assets/pdfs/ReportZips/AutditCReportPdf.zip',
      'src/assets/pdfs/ReportZips/KUReportPdf.zip',
    ]

    const { data, status } = useSelector((state) => state.text)
    const textInfo = Array.isArray(data) ? data[0] : data;

    const reportImgPath = textInfo?.blocks?.[0]?.report_img?.[0]?.url
    const fullReportImg = reportImgPath ? `${BASE_URL}${reportImgPath}` : null

      const dataArray = Array.from({length: 7}, (_, i) => {
      const idx = i + 1  
      const reportCard = textInfo?.blocks?.[0]?.[`card${idx}`]
       
      return {
        img: fullReportImg,
        title: reportCard?.[0]?.title || reportCard?.title,
        subtitle: reportCard?.[0]?.sutitle || reportCard?.sutitle,
      } 
    })

    if (status === 'loading' || !data) {
      return <div>Загрузка...</div>
    }

    // Emitent-report = Квартальные отчеты эммитента
// Year-report = Годовые и квартальные отчеты
// CBRF-report = Отчеты ЦКР РЦБ
// IFRS-report = Отчеты МСФО
// RPI-report = Перечень КПЭ
// KU-report = Оценка КУ 

  return (
    <div className="corp-manage-page">
      <div className="container">
        <Detail/>
        <div className="report-page__content">
          {dataArray.map((reportCard, idx) => (

           <div key={idx} className="corp-manage-page__details-card">
            <img src={reportCard.img} alt="" />
            <p>
              <span className="bold">{reportCard.title}</span>
              <span className="enter"></span>
              {reportCard.subtitle}
            </p>
            <a href={`${reportLinks[idx]}`} download>{textInfo?.blocks?.[0]?.button}</a>
          </div>
          ))}

       
        </div>
        <Detail2/>
      </div>
    </div>
  );
};

export default Reports;
 