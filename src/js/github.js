function getGithubNotificationCount()
{
    var baseUrl = "https://api.github.com/notifications";
    var token = "";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            setGithubStatusIcon(JSON.parse(xmlHttp.responseText).length);
        }
    };
    xmlHttp.open("GET", baseUrl + "?access_token=" + token, true);
    xmlHttp.setRequestHeader
    xmlHttp.send(null);
}

function setGithubStatusIcon(notificationCount)
{
    var githubStatusIcon = document.getElementById("status-icons-github");

    if (notificationCount != 0)
    {
        var span = document.createElement("SPAN");
        span.className = "status-icon-text";
        span.textContent = "\u00A0" + notificationCount;

        githubStatusIcon.style.display = "block";
        githubStatusIcon.appendChild(span);
    }
}

var github = getGithubNotificationCount;
