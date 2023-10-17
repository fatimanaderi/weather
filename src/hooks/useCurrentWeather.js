import useData from "./useData";
const useCurrentWeather = () => {
  const { data, err, loading } = useData({endpoint:"weather"});
  return { data, err, loading };
};
export default useCurrentWeather;
