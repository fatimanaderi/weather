
const CometStar = () => {
  return (
    <div className="starry-sky">
      {Array(6)
        .fill("")
        .map((item, index) => (
          <div key={index} id={`stars-group-${index}`}></div>
        ))}
    </div>
  );
};
export default CometStar;
