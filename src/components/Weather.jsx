import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { dayIcon, nightIcon } from "../data/icon";

const Weather = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  useEffect(() => {
    apiClient
      .get("/forecast", {
        params: {
          lat: 34.0901,
          lon: -118.4065,
          country: "US",
          cnt: 8,
        },
      })
      .then((res) => setData(res.data.list))
      .catch((err) => setErr(err));
  }, []);
  if(err) return <></>;
  return (
    <>
      <ul className="weather">
        {data?.map((item) => (
          <li>
            {item.weather[0].description}
            {
            Number(item.dt_txt.slice(11, 13)) > 2 &&
            Number(item.dt_txt.slice(11, 13)) < 18 ? (
              <img src={`${dayIcon[item.weather[0].id]}`} alt={item.weather[0].id} />
            ) : (
              <img src={`${nightIcon[item.weather[0].id]}`} alt={item.weather[0].id} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Weather;
