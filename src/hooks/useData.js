import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
const useData = (endpoint, params) => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  useEffect(() => {
    apiClient
      .get("/" + endpoint, {
        params,
      })
      .then((res) => setData(res.data))
      .catch((err) => setErr(err));
  }, []);

  return { data, err };
};
export default useData;
