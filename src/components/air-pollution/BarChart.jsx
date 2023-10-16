import airPollutionData from "../../data/airPollutionData";

const BarChart = ({ data }) => {
  let min = (k) => airPollutionData[k].min;
  let max = (k) => airPollutionData[k].max;
  let percentage = (min, max, val) => {
    let per = Math.round(((val - min) * 100) / (max - min));
    if (per > 100) return 100;
    return per;
  };
  return (
    <div className="flex-center mt-6 mx-3">
      <table className="text-[10px] leading-4 text-center h-[200px]" cellPadding="1" cellSpacing="0">
        <tbody>
          <tr>
            {data &&
              Object.entries(data).map(([key, val], i) => (
                <td className="align-bottom h-[200px] p-1 w-8" key={"barchart" + i}>
                  <span className="font-bold text-yellow-400 rounded-sm">{ Math.round(val * 10) / 10}</span>
                  <div
                    className="glassmorphism rounded-lg w-6"
                    style={{ height: percentage(min(key), max(key), val)+"%" }}
                  ></div>
                </td>
              ))}
          </tr>
          <tr>
            {data &&
              Object.entries(data).map(([key], i) => (
                <td className="text-yellow-600 font-bold" key={"rowchart" + i}>{key}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BarChart;
