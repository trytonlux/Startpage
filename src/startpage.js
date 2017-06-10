/**
    Javascript for Startpage
**/


/**
    Onload
**/
window.onload = load;
function load()
{
    //Run modules
    clock();
}

/**
    Modules
**/
function search(input)
{
    // Ignore empty input
    if (input != "")
    {
        window.open("https://duckduckgo.com/?q=" + input, '_blank');
    }
}

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
    $("#time").html(hour + ":" + minute + " " + period);

    setTimeout("clock()", 1000);
}
