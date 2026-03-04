---
layout: single
title: "Research Labs"
permalink: /labs/
---

The HFES Western Student Chapter is proud to partner with the following research labs across Western University.

| Principal Investigator | Department | Research Lab |
| :--- | :--- | :--- |
{% for lab in site.data.labs %}
| [{{ lab.pi_name }}]({{ lab.url }}) | {{ lab.department }} | {{ lab.lab_name }} |
{% endfor %}