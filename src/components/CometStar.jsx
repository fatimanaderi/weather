const CometStar = () => {
  return (
    <>
      {Array(6).fill("").map((item, index) => (
        <div id={`stars-group-${index}`}></div>
      ))}
    </>
  );
};
export default CometStar;
