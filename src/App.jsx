import CometStar from "./components/CometStar";
import Earth from "./components/earth/Earth";
import Weather from "./components/weather/Weather";

const App = () => {
  return (
    <>
      <CometStar />
      <Weather />
      <div className="frame z-[1]">
        <Earth />
      </div>
    </>
  );
};
export default App;
