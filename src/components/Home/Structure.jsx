// import img1 from "../../assets/images/structure-img.jpg";
// import department1 from "../../assets/images/structure/department-img1.jpg";
// import department2 from "../../assets/images/structure/department-img2.jpg";
// import department3 from "../../assets/images/structure/department-img3.jpg";
// import department4 from "../../assets/images/structure/department-img4.jpg";
// import department5 from "../../assets/images/structure/department-img5.jpg";
// import department6 from "../../assets/images/structure/department-img6.jpg";
// import department7 from "../../assets/images/structure/department-img7.jpg";
// import department8 from "../../assets/images/structure/department-img8.jpg";

import branch1 from "../../assets/images/structure/branch-img1.jpg";
import StructureBanner from "../Banners/StructureBanner";
import { useSelector } from "react-redux";

const Structure = () => {
  const BASE_URL = import.meta.env.VITE_API_URL

  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  const structureImgPath = textInfo?.blocks?.[0]?.structure?.[0]?.url
  const departmentImg1Path = textInfo?.blocks?.[1]?.department_img1?.[0]?.url
  const departmentImg2Path = textInfo?.blocks?.[1]?.department_img2?.[0]?.url
  const departmentImg3Path = textInfo?.blocks?.[1]?.department_img3?.[0]?.url
  const departmentImg4Path = textInfo?.blocks?.[1]?.department_img4?.[0]?.url
  const departmentImg5Path = textInfo?.blocks?.[1]?.department_img5?.[0]?.url
  const departmentImg6Path = textInfo?.blocks?.[1]?.department_img6?.[0]?.url
  const departmentImg7Path = textInfo?.blocks?.[1]?.department_img7?.[0]?.url
  const departmentImg8Path = textInfo?.blocks?.[1]?.department_img8?.[0]?.url
  
  const structureFullImg = structureImgPath ? `${BASE_URL}${structureImgPath}` : null
  const department1FullImg = structureImgPath ? `${BASE_URL}${departmentImg1Path}` : null
  const department2FullImg = structureImgPath ? `${BASE_URL}${departmentImg2Path}` : null
  const department3FullImg = structureImgPath ? `${BASE_URL}${departmentImg3Path}` : null
  const department4FullImg = structureImgPath ? `${BASE_URL}${departmentImg4Path}` : null
  const department5FullImg = structureImgPath ? `${BASE_URL}${departmentImg5Path}` : null
  const department6FullImg = structureImgPath ? `${BASE_URL}${departmentImg6Path}` : null
  const department7FullImg = structureImgPath ? `${BASE_URL}${departmentImg7Path}` : null
  const department8FullImg = structureImgPath ? `${BASE_URL}${departmentImg8Path}` : null

  
  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <StructureBanner />
      <div className="structure-page">
        <section className="structure-page__section1 container">
          <h3 className="main-title">
            {textInfo?.blocks?.[0]?.title}
          </h3>
          <img src={structureFullImg} alt="" />
          <p>
            <span className="bold">
              {textInfo?.blocks?.[0]?.description?.[0]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[1]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[2]?.children?.[0]?.text}
            <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[3]?.children?.[0]?.text}
            <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[4]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[5]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[6]?.children?.[0]?.text}
            <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[7]?.children?.[0]?.text}
            <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[8]?.children?.[0]?.text}
            <span className="enter"></span>
            <ul>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[9]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>
                 {textInfo?.blocks?.[0]?.description?.[10]?.children?.[0]?.text}
                </p>
                <span className="enter"></span>
              </li>
              <li>
                <p>
                 {textInfo?.blocks?.[0]?.description?.[11]?.children?.[0]?.text}
                </p>
                <span className="enter"></span>
              </li>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[12]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[13]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
            </ul>
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[14]?.children?.[0]?.text}
            <span className="enter"></span>
            <ul>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[15]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[16]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[17]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[18]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[19]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
            </ul>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[20]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[21]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[22]?.children?.[0]?.text}
            <span className="enter"></span>
            <ul>
              <li>
                <p>{textInfo?.blocks?.[0]?.description?.[23]?.children?.[0]?.text}</p>
                <span className="enter"></span>
              </li>
              <li>
                <p>
                 {textInfo?.blocks?.[0]?.description?.[24]?.children?.[0]?.text}
                </p>
                <span className="enter"></span>
              </li>
              <li>
                <p>
                  {textInfo?.blocks?.[0]?.description?.[25]?.children?.[0]?.text}
                </p>
                <span className="enter"></span>
              </li>
            </ul>
            <span className="enter"></span>
            <span className="bold">
             {textInfo?.blocks?.[0]?.description?.[26]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[27]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[28]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[29]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[30]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[31]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[32]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[33]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[34]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[35]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[36]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[37]?.children?.[0]?.text}
            <span className="enter"></span>
           {textInfo?.blocks?.[0]?.description?.[38]?.children?.[0]?.text}
            <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[39]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[40]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[41]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[42]?.children?.[0]?.text}
            <span className="enter"></span>
            <span className="bold">
              {textInfo?.blocks?.[0]?.description?.[43]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[44]?.children?.[0]?.text}
            <span className="enter"></span>
            <span className="bold">
              {textInfo?.blocks?.[0]?.description?.[45]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[46]?.children?.[0]?.text}
            <span className="enter"></span>
            <span className="bold">
              {textInfo?.blocks?.[0]?.description?.[47]?.children?.[0]?.text}
              </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[48]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[49]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[50]?.children?.[0]?.text}
            <span className="enter"></span>
            <span className="bold">
              {textInfo?.blocks?.[0]?.description?.[51]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[52]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[53]?.children?.[0]?.text}
            <span className="enter"></span>
            <span className="bold">
             {textInfo?.blocks?.[0]?.description?.[54]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[55]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[56]?.children?.[0]?.text}
            <span className="enter"></span>
            <span className="bold">
              {textInfo?.blocks?.[0]?.description?.[57]?.children?.[0]?.text}
            </span>
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[58]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[59]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[60]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[61]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[62]?.children?.[0]?.text}
            <span className="enter"></span>
          {textInfo?.blocks?.[0]?.description?.[63]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[64]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[65]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[66]?.children?.[0]?.text}
            <span className="enter"></span>
            {textInfo?.blocks?.[0]?.description?.[67]?.children?.[0]?.text}
          </p>
        </section>
        <section className="structure-page__section2">
          <div className="container">
            <h3 className="main-title">{textInfo?.blocks?.[1]?.title}</h3>
            <div className="structure-page__section2-items">
              <div className="structure-page__section2-card">
                <img src={department1FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>{textInfo?.blocks?.[1]?.department_card?.[0]?.title}</h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                      {textInfo?.blocks?.[1]?.department_card?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department2FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card2?.[0]?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card2?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card2?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card2?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card2?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card2?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department3FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card3?.[0]?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card3?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card3?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card3?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card3?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card3?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department4FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card4?.[0]?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card4?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card4?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card4?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card4?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card4?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department5FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card5?.[0]?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card5?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card5?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card5?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card5?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card5?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department6FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card6?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card6?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card6?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card6?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card6?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card6?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department7FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card7?.[0]?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card7?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card7?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card7?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card7?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card7?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="structure-page__section2-card">
                <img src={department8FullImg} alt="" />
                <div className="structure-page__section2-card-content">
                  <h3>
                    {textInfo?.blocks?.[1]?.department_card8?.[0]?.title}
                  </h3>
                  <p>
                    {textInfo?.blocks?.[1]?.department_card8?.[0]?.description}
                  </p>
                  <h4>{textInfo?.blocks?.[1]?.department_card8?.[0]?.name}</h4>
                  <ul className="structure-page__section2-numlist">
                    <li>
                      <p className="structure-page__section2-numitem">
                        {textInfo?.blocks?.[1]?.department_card8?.[0]?.contacts}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card8?.[0]?.phone}
                      </p>
                    </li>
                    <li>
                      <p className="structure-page__section2-numitem">
                       {textInfo?.blocks?.[1]?.department_card8?.[0]?.email}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="main-title">{textInfo?.blocks?.[2]?.title}</h3>
            <div className="structure-page__section2-card">
              <img src={branch1} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>{textInfo?.blocks?.[2]?.card_title}</h3>
                <p>
                  {textInfo?.blocks?.[2]?.card_description}
                </p>
                <h4>{textInfo?.blocks?.[2]?.card_name}</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                     {textInfo?.blocks?.[2]?.card_contacts}
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      {textInfo?.blocks?.[2]?.card_phone}
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                     {textInfo?.blocks?.[2]?.card_email}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Structure;
