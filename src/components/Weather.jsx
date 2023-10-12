import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const Weather = () => {
  const [data, setData] = useState();
  useEffect(() => {
    apiClient
      .get("/forecast", {
        params: {
          lat: 34.0901,
          lon: -118.4065,
          country: "US",
          cnt:8
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },[]);
  return <>hi</>;
};
export default Weather;
