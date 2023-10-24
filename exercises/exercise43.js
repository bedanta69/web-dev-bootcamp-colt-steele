// DEFINE YOUR FUNCTION BELOW:
function returnDay(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day < 1 || day > 7) {
        return null;
    }
    return days[day - 1];

}