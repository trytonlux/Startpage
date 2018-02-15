window.onload = function()
{
    clock();
    github();

    document.getElementById("terminal-close-button").onclick = function()
    {
        // Set display of divs
        document.getElementById("fortune").style.display = "none";

        // Reset prompt
        document.getElementById("prompt-input").setAttribute("contenteditable", true);
        document.getElementById("prompt-input").textContent = "";
        document.getElementById("prompt-input").className = "";
    };

    document.getElementById("prompt-input").onkeypress = function(e)
    {
        if (e.which === 13)
        {
            var input = document.getElementById("prompt-input").textContent;

            if (input === "fortune")
            {
                fortune();
            }
            else
            {
                document.getElementById("prompt-input").textContent = "";
            }

            return false;
        }
    };
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
};
