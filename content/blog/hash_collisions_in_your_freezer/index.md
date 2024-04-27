+++
title = "Hash Collisions in Your Freezer"
date = 2024-01-27
description = "How non-unique pre-printed codes on freezer bags can lead to confusion"
+++

I recently came across the [Toppits freezer bags](https://www.toppits.de/en/freezer-bags-419.html) with their 4-digit "pre-printed freshness codes". 
Together with the [Foodsaver App](https://www.toppits.de/en/no-more-forgetting-no-more-throwing-away-293,228.html), the idea is that you can organize your freezer and keep track of its and their expiration dates.

{% figure(alt="Photo of Toppits freezer bags with preprinted 4-digit freshness codes", url="https://www.toppits.de/portal/pics/Produktdatenbank/Gefrierbeutel/Mood-01_Freezer-Bags_Toppits-Albal_DE_20220408_V1_560px.jpg") %}
Toppits freezer bags with freshness codes. Image taken from [toppits.de](https://www.toppits.de/portal/pics/Produktdatenbank/Gefrierbeutel/Mood-01_Freezer-Bags_Toppits-Albal_DE_20220408_V1_560px.jpg).
{% end %}

The 4-digit freshness code used to identify a bag results in 10,000 possible freshness codes. Naively, one could say: "Nobody is likely to have 10,000 freezer bags in their freezer."
But wait: The freshness codes are randomly distributed, so two random bags *can* have the same code!
Furthermore, it's not the case that we have a *specific* bag with a freshness code and fear about another bag having the same freshness code.
Any two bags (a pair) with the same freshness code in our freezer is a problem, no matter which.
Or, to put it in computer science terms: How likely is a hash collision?


## The birthday problem

Ever heard of the [birthday problem](https://en.wikipedia.org/wiki/Birthday_problem)? For a group of 23 people, the probability that two people have the same birthday date (day and month) is already over 50%. It's the same here.
In general, the problem deals with distributing items (persons) to buckets (birthdays). In our case, we distribute bags (items) to 10,000 freshness codes (buckets).



## Analyzing the problem with code

I grabbed the [formula from Wikipedia](https://en.wikipedia.org/wiki/Birthday_problem#Calculating_the_probability) and plotted the probability of a collision for the freshness codes:

```python
from math import factorial
import matplotlib.pyplot as plt

buckets = 10_000
xs = range(1, 250) # Range of items

ys = [1 - ( factorial(buckets) / (buckets**items * factorial(buckets - items)) ) for items in xs]

plt.plot(xs, ys)
plt.title("Freshness code collision probability")
plt.xlabel("Items in freezer")
plt.ylabel("Collision probability")
plt.grid()
```

This results in the following graph:

{% figure(alt="Figure of freshness code collision probability with 0% for 0 items, 50% for ~125 items and 95% for ~250 items", url="collsion-probability.svg") %}
Freshness code collision probability being 0% for 0 items, 50% for ~125 items and 95% for ~250 items.
{% end %}


Ok, so for 250 bags, the probability of a collision is nearly 100%. And for around 125 bags, the probability is around 50%. Can we get that more accurately? Sure!

```python
next(xy for xy in zip(xs, ys) if xy[1] > 0.5)
# (119, 0.5058369938385008)
```

For 119 bags in your freezer, the probability of a collision is over 50%. Better have less than 119 bags in your freezer then!



## Making the problem worse

Now let's say you aren't such a power user and only have 30 bags in your freezer.

```python
ys[30]
# 0.04548063432605254
```

4.5% collision probability. Ok.

But imagine you're a truly loyal user of this freshness code system and use it for 10 years. Therefore, we assume that the whole content of your freezer is replaced every year (or throughout the year). Then, we're searching for the probability of *not* having a collision with 30 bags 10 times in a row.

```python
collision_probability = 0.04548063432605254
no_collision_probability = 1 - collision_probability
years = 10
no_collision_n_times_probability = no_collision_probability**years
# no_collision_n_times_probability = 0.6278377711556372
```

So, no collision with 62.8% probability, and a collision with 37.2% probability.

Well, what do we learn from that investigation? Maybe just buy normal freezer bags, grab a marker pen, write a [UUID](https://www.uuidgenerator.net) onto them and store the information in a blockchain, so that no one can change the expiration date of your food [/s](https://arxiv.org/pdf/1704.05579.pdf).
