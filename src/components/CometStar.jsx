
const CometStar = () => {
  return (
    <div className="z-0 w-full h-full fixed overflow-hidden top-0">
      {Array(6)
        .fill("")
        .map((item, index) => (
          <div key={index} id={`stars-group-${index}`}></div>
        ))}
    </div>
  );
};
export default CometStar;
