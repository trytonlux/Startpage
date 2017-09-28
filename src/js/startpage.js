window.onload = function()
{
    clock();

    document.getElementById("prompt-search").onkeypress = function(e)
    {
        if (e.which === 13)
        {
            var input = document.getElementById("prompt-search").textContent;

            if (input === "--help")
            {
                document.getElementById("prompt-search-help").style.display = "inherit";
            }
            else
            {
                search(input);
            }

            document.getElementById("prompt-search").textContent = "";
            return false;
        }
    };

    document.getElementById("terminal-close-button").onclick = function(e)
    {
        document.getElementById("prompt-search-help").style.display = "none";
    };
};

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
    document.getElementById("time").textContent = hour + ":" + minute + " " + period;

    setTimeout("clock()", 1000);
}
