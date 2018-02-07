window.onload = function()
{
    clock();
    github();
};

function clock()
{
    // Create Date object and get hour/minute
    var date = new Date,
        hour = date.getHours(),
        minute = date.getMinutes(),
        period = hour >= 12 ? "pm" : "am";

    // Do some formatting with the time
    hour = hour % 12;
    hour = hour ? hour : 12;
    10 > minute && (minute = "0" + minute);

    // Set time element
    document.getElementById("time").textContent = hour + ":" + minute + " " + period;

    setTimeout("clock()", 1000);
}
