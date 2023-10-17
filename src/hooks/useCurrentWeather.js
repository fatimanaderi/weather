import useData from "./useData";
const useCurrentWeather = () => {
  const { data, err, loading } = useData("weather", {
    lat: 34.0901,
    lon: -118.4065,
    cnt:7
  });
  return { data, err, loading };
};
export default useCurrentWeather;
