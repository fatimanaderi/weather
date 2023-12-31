import useData from "./useData";

const useAirPollution = (geo) => {
  const { data, err, loading } = useData({endpoint:"air_pollution",geo});
  const airState = {
    "5": "Good",
    "4": "Fair",
    "3": "Moderate",
    "2":"Poor",
    "1":"Very Poor",
  };
  return { data, err, loading, airState };
};
export default useAirPollution;
