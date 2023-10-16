import { TbBuildingFactory } from "react-icons/tb";
import { FaTree } from "react-icons/fa";
const Progress = ({airState ,stateNumber}) => {
  return (
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
  );
};
export default Progress;
