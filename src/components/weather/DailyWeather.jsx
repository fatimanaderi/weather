import useDailyWeather from "../../hooks/useDailyWeather"

const DailyWeather=()=>{
    const { data , loading , err} =useDailyWeather()
    if (err) return <></>;
    return(
        <></>
    )
}
export default DailyWeather