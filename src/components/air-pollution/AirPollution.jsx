import useAirPollution from "../../hooks/useAirPollution";
import BarChart from "./BarChart";
import Progress from "./Progress";
const AirPollution = ({ geo }) => {
  const { data, err, loading, airState } = useAirPollution(geo);
  if (loading || err) return <>...</>;
  return (
    <div className="my-6 w-full md:w-2/4 lg:flex lg:items-center lg:justify-center">
      <Progress airState={airState} stateNumber={data?.list[0].main.aqi} />
      <BarChart data={data?.list[0].components} />
    </div>
  );
};
export default AirPollution;
