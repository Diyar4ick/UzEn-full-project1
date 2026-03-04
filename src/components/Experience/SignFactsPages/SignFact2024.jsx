import { useSelector } from "react-redux";
import Detail from "../../Details/Detail";
import Detail2 from "../../Details/Detail2";
const SignFact2024 = () => {

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const factPdfLinks = [
  'public/pdfs/SignFactsPdf2024/signFacts2024-23.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-20.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-12.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-9.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-9.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-32.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-22.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-8.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-8.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-21.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-36.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-36.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-44.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-44.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-44.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-44.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-44.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-6.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-6.pdf',
  'public/pdfs/SignFactsPdf2024/signFacts2024-6.pdf'
];

  if (status === "loading" || !data) { 
    return <div>Загрузка...</div>;
  } 
  return (
    <div className="corp-manage-page">
      <div className="container">
        <Detail/>
        <div className="corp-manage-page__content">
          <h3 className="main-title">
            {textInfo?.blocks[0]?.title}
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                <td colSpan={2} className="corp-manage-page__table-title"><p>{textInfo?.blocks[0]?.table_title}</p></td>
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
  );
};

export default SignFact2024;
