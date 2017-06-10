{% macro panel(title, body='') %}
<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">{{ title }}</h3>
    </div>
    <div class="panel-body">
        {{ body | safe }}
    </div>
</div>
{% endmacro %}

{% macro fa(name) %}
<i class="fa fa-{{ name }}" aria-hidden="true"></i>
{% endmacro %}

{% macro fa_5x(name) %}
<i class="fa fa-{{ name }} fa-5x" aria-hidden="true"></i>
{% endmacro %}

{% macro website_link(name, url, icon) %}
<a href="{{ url }}" title="{{ name }}">{{ fa_5x(icon) }}</a>
{% endmacro %}
