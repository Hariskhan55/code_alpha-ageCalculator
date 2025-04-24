function age() {
    var d1 = parseInt(document.getElementById('date').value);
    var m1 = parseInt(document.getElementById('month').value);
    var y1 = parseInt(document.getElementById('year').value);

    // Check if input fields are empty
    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        document.getElementById('age').innerHTML = "Please enter a valid date.";
        return;
    }

    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1; // Months are 0-based in JS
    var y2 = date.getFullYear();

    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year and update February days
    if ((y1 % 4 === 0 && y1 % 100 !== 0) || (y1 % 400 === 0)) {
        monthDays[1] = 29;
    }

    // Adjust days and months if needed
    if (d1 > d2) {
        d2 = d2 + monthDays[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('age').innerHTML = `Your age is ${y} Years, ${m} Months, ${d} Days.`;
}
