<!DOCTYPE html>
<html lan="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Startpage by tryton-vanmeer">
        <meta name="author" content="tryton-vanmeer">

        <title>Startpage</title>

        <!-- Bootstrap core CSS -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css" rel="stylesheet" integrity="sha384-S7YMK1xjUjSpEnF4P8hPUcgjXYLZKK3fQW1j5ObLSl787II9p8RO9XUGehRmKsxd" crossorigin="anonymous">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <link href="style.min.css" rel="stylesheet">
    </head>

    <body>
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <span class="navbar-brand" href="#">Startpage</span>
                </div>
                <div class="nav navbar-nav navbar-right">
                    <form class="navbar-form" role="search">
                        <div class="form-group">
                            <input id="search-box" type="text"
                                   class="form-control" autocomplete="off"
                                   placeholder="🔎 Search">
                        </div>
                        <!--
                            Button exists, but is hidden. Therefore we can
                            use the onclick action upon pressing enter in the
                            above input field
                         -->
                        <button class="btn btn-default hidden"
                                onclick="search($('#search-box').val())"></button>
                    </form>
                </div>
            </div>
        </nav>

        <div class="container">
            {% block container%}
            {% endblock %}
        </div>

        <footer class="footer bg-primary">
            <div class="container">
                <span id="time" class="navbar-brand pull-right"></span>
            </div>
        </footer>

        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="script.min.js"></script>
    </body>
</html>
