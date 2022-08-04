

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    
    
    let date = new Date(dateString);
    let dayName = date.toLocaleString('en-us', {weekday: 'long'});
    
    return dayName;
}


