import useAirPollution from "../../hooks/useAirPollution";
import Progress from "./Progress"
const AirPollution = () => {
  const { data, err, loading, airState } = useAirPollution();
  if (loading || err) return <>...</>;
  return (
    <div className="my-4 mx-5">
      <Progress airState={airState} stateNumber={data?.list[0].main.aqi} />
      <div className="my-4 mt-5 glassmorphism h-fit rounded-2xl">
        {data &&
          Object.entries(data.list[0].components).map(([key, val], i) => (
            <div key={i}>
              {key} : {val}
            </div>
          ))}
      </div>
    </div>
  );
};
export default AirPollution;
