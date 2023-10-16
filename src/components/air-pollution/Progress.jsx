import {
  FaFaceGrinBeam,
  FaFaceSmileBeam,
  FaFaceGrin,
  FaFaceMeh,
  FaFaceFrown,
} from "react-icons/fa6";
const Progress = ({ airState, stateNumber }) => {
  const emoji = (state) => {
    let emoji = <></>;
    switch (+state) {
      case 5:
        emoji = <FaFaceGrinBeam />;
        break;
      case 4:
        emoji = <FaFaceSmileBeam />;
        break;
      case 3:
        emoji = <FaFaceGrin />;
        break;
      case 2:
        emoji = <FaFaceMeh />;
        break;
      case 1:
        emoji = <FaFaceFrown />;
        break;
    }
    return emoji;
  };
  return (
    <div className="m-3 flex-center">
      <div className={"circle" + " " + "per-" + stateNumber}>
        <div className="inner">
          <div className="text-center">
            <div className="text-5xl">{emoji(stateNumber)}</div>
            <div className="text-xs mt-1">{airState[stateNumber]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Progress;
