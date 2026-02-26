import { useSelector } from "react-redux";
const Detail2 = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  
  const { detail } = useSelector((state) => state.global) 
  const textInfo = Array.isArray(detail) ? detail[0] : detail

  const phonePath = textInfo?.blocks?.[1]?.phone_img?.[0]?.url
  const addressPath = textInfo?.blocks?.[1]?.address_img?.[0]?.url

  const fullPhoneImg = phonePath ? `${BASE_URL}${phonePath}` : null
  const fullAddressImg = addressPath ? `${BASE_URL}${addressPath}` : null
  return (
    <>
    <div className="corp-manage-page__details">
          <div className="corp-manage-page__details-card">
            <img src={fullPhoneImg} alt="" />
            <p>
              {textInfo?.blocks?.[1]?.phone_text}
            </p>
            <a href="">{textInfo?.blocks?.[1]?.phone_number}</a>
          </div>
          <div className="corp-manage-page__details-card">
            <img src={fullAddressImg} alt="" />
            <p>
              {textInfo?.blocks?.[1]?.address_text}
            </p>
          </div>
        </div>
    </>
  )
}

export default Detail2 