import useData from "./useData";

const useAirPollution = () => {
  const { data, err, loading } = useData("air_pollution", {
    lat: 34.0901,
    lon: -118.4065,
    country: "US",
  });
  const airState = {
    "1": { name: "Good" ,color : "border-lime-300" },
    "2": { name: "Fair",color : "border-lime-200" },
    "3": { name: "Moderate",color : "border-yellow-200" },
    "4": { name: "Poor",color : "border-orange-300" },
    "5": { name: "Very Poor",color : "border-red-300" },
  };
  return { data, err, loading, airState };
};
export default useAirPollution;
