<!--
CV item consisting of a title, company, time and body.
-->

<h3 id="{{ title | slugify }}" style="margin: 0; font-size: medium;"><a class="anchor" href="#{{ title | slugify }}">{{ title }}</a></h3>
<small style="text-transform: uppercase;">{{ company }}</small><br>
<small>{{ time }}</small>

{{ body }}