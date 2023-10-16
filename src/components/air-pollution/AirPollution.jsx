import useAirPollution from "../../hooks/useAirPollution";
import BarChart from "./BarChart";
import Progress from "./Progress"
const AirPollution = () => {
  const { data, err, loading, airState } = useAirPollution();
  if (loading || err) return <>...</>;
  return (
    <div className="my-4 mx-5">
      <Progress airState={airState} stateNumber={data?.list[0].main.aqi} />
      <BarChart data={data?.list[0].components}/>
    </div>
  );
};
export default AirPollution;
