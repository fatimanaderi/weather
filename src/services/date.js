import daysWeak from "../data/daysWeak";
import months from "../data/months";

let getDate = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = daysWeak[a.getDay()];
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    return{
        year , month , date , day , hour , min , sec , 
    }
  };
export default getDate;