import axios from "axios";
import { useEffect, useState } from "react";

const useGeo = (searchInput) => {
  const [geo, setGeo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  const fetchGeo = () => {
    axios
      .get("http://api.openweathermap.org/geo/1.0/direct", {
        params: { q: searchInput, appid: "35e137dd18b0472d4a39e58563af677e" },
      })
      .then(({ data }) => {
        setGeo({ lon: data[0].lon, lat: data[0].lat });
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  };
  const fetchIp = () => {
    axios
      .get("https://api.ipify.org?format=json")
      .then(({ data }) => fetchLonLat(data.ip))
      .catch((err) => setErr(err));
  };
  const fetchLonLat = (ip) => {
    axios
      .get("https://api.ipgeolocation.io/ipgeo", {
        params: { apiKey: "c46c5c571f2c4205bd3bbdaecf06b678", ip },
      })
      .then(({ data }) => {
        setGeo({ lon: data.longitude, lat: data.latitude });
        setLoading(false);
      })
      .catch((err) => setErr(err));
  };
  useEffect(() => {
    setLoading(true);
    if (searchInput != null) {
      fetchGeo();
    } else {
      fetchIp();
    }
  }, [searchInput]);

  return { geo, err, loading };
};
export default useGeo;
