import axios from "axios";
export default axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",
    headers: {
        "Content-Type": "text/plain",
      },
    params:{
      "appid":"35e137dd18b0472d4a39e58563af677e",
    }
})
