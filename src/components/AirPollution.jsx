import useAirPollution from "../hooks/useAirPollution";
import { TbBuildingFactory } from "react-icons/tb";
import { FaTree } from "react-icons/fa";
const AirPollution = () => {
  const { data, err, loading, airState } = useAirPollution();
  if (loading || err) return <>...</>;
  let stateNumber = data?.list[0].main.aqi;
  return (
    <div className="my-4 mx-5">
      <div className={"circle" + " " + "per-" + stateNumber}>
        <div className="inner">
          {airState[stateNumber]}
          {[1, 2, 3].includes(+stateNumber) ? (
            <TbBuildingFactory className="ml-1" />
          ) : (
            <FaTree className="ml-1" />
          )}
        </div>
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
