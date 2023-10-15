import useData from "./useData";

const useAirPollution = () => {
  const { data, err, loading } = useData("air_pollution", {
    lat: 34.0901,
    lon: -118.4065,
    country: "US",
  });
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
