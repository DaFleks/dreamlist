
var daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getWeekday = (unixEpoch) => {
    const date = new Date(unixEpoch * 1000);
    return daysArr[date.getDay()].substring(0, 3).toUpperCase();
}

export default getWeekday;