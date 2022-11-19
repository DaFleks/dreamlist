const CurrentDate = () => {
    var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date();

    const today = `${monthsArr[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
        <div className="Date">
            <h5>{today}</h5>
        </div>
    )
}

export default CurrentDate;