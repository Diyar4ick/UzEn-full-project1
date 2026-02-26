import { useSelector } from "react-redux";
import Detail from "../../Details/Detail";
import Detail2 from "../../Details/Detail2";

const SignFact2021 = () => {

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

const factPdfLinks = [
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-6.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-41.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-40.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-39.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-38.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-37.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-35-36.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-34.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-33.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-32.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-31.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-30.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-29.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-28.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-27.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-26.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-25.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-24.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-30-10.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-12.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-22.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-20.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-19.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-6.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-32-2.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-36.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-8.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-23.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-22.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-19.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-18.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-17.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-16.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-15.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-14.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-13.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-21-12.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-11.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-6-10.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-5.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-3-4.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-2.pdf",
  "src/assets/pdfs/SignFactsPdf2021/signFacts2021-1.pdf"
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
  );  
};

export default SignFact2021;
