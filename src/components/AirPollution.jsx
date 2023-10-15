import useAirPollution from "../hooks/useAirPollution";

const AirPollution = () => {
  const { data, err, loading, airState } = useAirPollution();
  if (loading || err) return <>...</>;
  let stateNumber = data?.list[0].main.aqi;
  return (
    <div className="my-4 mx-5">
      <div className={"circle" + " " + "per-" + stateNumber}>
        <div className="inner">{airState[stateNumber]}</div>
      </div>
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
