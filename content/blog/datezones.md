+++
title = "Datezones"
description = "Timezones ensure that noon is roughly at 12 o'clock local time on every place on earth. Why not do the same for dates?"
date = 2024-01-28
+++

# Timezones

Timezones are a construct so that noon, i.e. the [culmination](https://en.wikipedia.org/wiki/Culmination) of the sun, is roughly at 12 o'clock local time on every place on earth[^1], i.e. on every longitude. This is achieved by dividing the earth into 24 timezones[^2], each 15° or 1h wide. The timezones have values from -12 to +12[^3], with 0 being UTC. While the earth rotates, the sun rises in eastern timezones before it does in western timezones. Thus, the timezones are numbered from east (+12 in New Zealand) to west (-12 on some uninhabited islands of the USA).


# UTC everywhere?

This is all fun and games, but makes working with dates and times a pain. Alternatively, we could use UTC everywhere. This would mean that people in New York would have noon at 7 o'clock (7 a.m.), while people in Singapore would have noon at 20 o'clock (8 p.m.). Strange? No!


# Seasons and Hemispheres

It's the same for seasons in the northern and southern hemisphere. While Christmas in Berlin means ~snowy~ winter, it means summer in Sydney. In line with time zones, one could say: Let's make **date zones**. Only two are needed here: the northern hemisphere would use the current date while the southern hemisphere would use the same date shifted by half a year. So everyone has winter in December and summer in July :)

Hmm, too complicated? Yes, but so are time zones.


---

[^1]: There are exceptions to avoid having multiple timezones in one country. For example, China has only one timezone ([BJT/CST](https://en.wikipedia.org/wiki/Time_in_China)), even though it spans 5 geographical timezones. And while Spain and Poland both use CET aka UTC+1, Spain is on the same longitudes as the UK, which uses UTC.

[^2]: There are also timezones 15, 30 and 45 min apart from a full hour, as shown by the [Wikipedia article about timezones](https://en.wikipedia.org/wiki/Time_zone).

[^3]: Only considering the standard time of each timezone. For example, New Zealand uses [NZDT](https://simple.wikipedia.org/wiki/Time_in_New_Zealand) aka UTC+13 in summer.