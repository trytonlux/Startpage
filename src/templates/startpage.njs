{% import "components.njs" as components %}

{% extends "base.njs" %}

{% block container %}

{% call components.panel("Websites") %}
{{ components.website_link("Reddit", "https://reddit.com", "reddit-square") }}
{{ components.website_link("Github", "https://github.com", "github-square") }}
{{ components.website_link("YouTube", "https://youtube.com", "youtube-square") }}
{{ components.website_link("Steam", "https://store.steampowered.com", "steam-square") }}
{{ components.website_link("Inbox", "https://inbox.google.com", "envelope-square") }}
{% endcall %}

{% for panel, content in panels %}
{% call components.panel(panel) %}
<div class="row">
    {% for name, url in content %}
        <div class="col-md-2">
            <a href="{{ url }}">{{ name }}</a>
        </div>
    {% endfor %}
</div>
{% endcall %}
{% endfor %}

{% endblock %}
