import { useSelector } from "react-redux"

const Detail = () => {
  
  const { detail } = useSelector((state) => state.global) 
  const textInfo = Array.isArray(detail) ? detail[0] : detail

  return (
    <>
        <div className="corp-manage-page__cardText">
          <p className="corp-manage-page__cardText-nav">
            {textInfo?.blocks?.[0]?.subtitle}
          </p>
          <p className="corp-manage-page__cardText-content">
            <span className="bold">{textInfo?.blocks?.[0]?.title}</span>
           {textInfo?.blocks?.[0]?.content}
          </p>
        </div> 
    </>
  )
}

export default Detail