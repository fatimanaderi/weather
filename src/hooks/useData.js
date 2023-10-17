import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
const useData = ({ endpoint, params,geo }) => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/" + endpoint, {
        params: { ...params , ...geo },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  }, [geo.lat]);

  return { data, err, loading };
};
export default useData;
