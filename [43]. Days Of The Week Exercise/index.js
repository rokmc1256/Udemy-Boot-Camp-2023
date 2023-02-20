// DEFINE YOUR FUNCTION BELOW:

function returnDay(checkDay) {
    const Day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(checkDay < 1 || checkDay > 7) { return null; }
    else {
       return Day[checkDay-1];
    }
}