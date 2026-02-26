import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL

export const getData = async (lng, page) => {
    try {
        const getInfo = await axios.get(`${BASE_URL}/api/${page}?locale=${lng}&populate[blocks][populate]=*`)
        const res = getInfo
        console.log(res);
        return res.data
    } catch (err) {
        console.error(err)
    }
}
// http://localhost:1337/api/home?locale=ru&populate[blocks][populate]=*

