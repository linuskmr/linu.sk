+++
title = "Cosinus in Your Car"
date = 2024-03-26
description = "How to optimize seating comfort using trigonometry"
+++

The backrest of front seats in cars can usually be tilted to the back to adjust the seating comfort in terms of a flatter seat angle.
For the rear seats, however, this isn't possible since the trunk cover blocks the backrest of tilting. Instead, rear seats can sometimes be slid a bit to the front to allow their backrests to be tilted while sacrificing legroom. This caused me to wonder how the relationship between less legroom and flatter seat angle is, in order to determine the sweet spot for seating comfort.

# Terms

To analyze this, we first need to introduce some terms:

- **Headrest**: The top end of the backrest
- **Backrest**: The vertical part of the seat with length 1 (with the unit being meters for example)
- **Seat Surface**: The horizontal part of the seat. Its length is half of the backrest length (0.5)
- **Seat Angle α**: Measurement of the seating comfort, with 90° being completely upright (the most uncomfortable position) and 180° meaning lying (most comfortable)
- **Legroom**: Distance between seat end and the back of the front seat, with more being better

This leads to the model shown in the following interactive GeoGebra Calculator Suite. Play with it by opening it in full-screen mode using the ⛶ button, and adjust the angle `a` (in rad) or click play.

<figure>
    <iframe src="https://www.geogebra.org/calculator/rjz6fkdw?embed" width="100%" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>
</figure>


# Unit Circle

Now we need to think of the mathematics involved. Well, you can already see the equations in the GeoGebra Calculator Suite above, but we want to derive these from scratch.
Tilting the backrest is essentially the same as the headrest moving on the [unit circle](https://en.wikipedia.org/wiki/Unit_circle), meaning it's position can be specified using `x = cos(α), y = sin(α)`. As already mentioned in the [terms section](#terms), we only consider seat angles where `90° ≤ α ≤ 180° = π/2 ≤ α ≤ π`.

{% figure(alt="Headrest on the unit circle", url="headrest_unit_circle.svg") %}
Headrest on the unit circle for `α = 2 (rad) ≈ 115°`.
{% end %}


# Legroom, Legroom Loss, Legroom Change

In order to tilt the seat, it has to be moved the exact same amout foreward as the backrest leans backwards (because of the trunk cover behind the backrest). As the x component of the backrest on the unit circle is `x = cos(α) ≤ 0`, the seat has to be moved by `x = -cos(α) ≥ 0` to the front (**legroom loss**). This means for the absolute **legroom** space to be `1-(-cos(α)) = cos(α)+1`. We can also differentiate this function to get the **legroom change**: `-sin(α)`. These 3 functions are shown in the following figure.

{% figure(alt="Legroom", url="legroom.svg") %}
Legroom, legroom loss and legroom change relative to the seat angle `α` between `π/2 (90°)` and `π (180°)`
{% end %}

This figure shows that the greater the seat angle (x component as angle `α`) is, the less legroom space is needed for an additional degree of seat angle.


# Inverse Functions

However, even more interesting would be the other way: How much angle change do I get for abandoning a certain amount of legroom? For the seat angle, the inverse function of the legroom loss `-cos(α)` is `α = arccos(-x)`, with x being the legroom loss. The seat angle change is the derivation of that function: `α = 1/sqrt(1-x^2)`. Both functions are shown in the following figure.

{% figure(alt="Seat angle", url="angle.svg") %}
The seat angle (y coordinate in rad) relative to the legroom loss (x coordinate), and its derivative, the seat angle change.
{% end %}
 
This figure shows that the more legroom you sacrifice, the exponentially more seat angle you gain.
