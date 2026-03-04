import { useSelector } from "react-redux";
import Detail from "../Details/Detail";
import Detail2 from "../Details/Detail2";

const BusinessPlan = () => {
  const planLinks = [
      'public/pdfs/BusinessPlansPdfs/bp2025_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2024_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2023_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/izm_BP_2022_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2022_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/izm_BP_2021_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2021_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2020_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2019_rus.pdf',
      '',
      'public/pdfs/BusinessPlansPdfs/bp2017_rus.rar',
      'public/pdfs/BusinessPlansPdfs/bp2016_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/izm_BP_2015_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2015_rus.pdf',
      'public/pdfs/BusinessPlansPdfs/bp2014_rus.pdf',
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
             {textInfo?.blocks?.[0]?.table_description?.map((plan, idx) => (
              <tr key={idx}>
                <td><p>{plan?.children?.[0]?.text}</p></td>
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

export default BusinessPlan;
