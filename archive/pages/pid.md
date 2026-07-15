---
url: https://drew.polstra.com/pid
title: PID Motor Conversion — Drew Polstra
http_status: 200
---

> I’ve been wanting someone to do this [as their final project] for years now, but nobody has taken me up on it.- Dr. Presti

CS3651 at Georgia Tech is a course called “Prototyping Intelligent Appliances”, which sounds like it would be about building smart refrigerators. To my great relief, it was actually more of a course in hands-on electronics and microcontrollers. A major portion of the class’s time and final grade were dedicated to a large final project. The subject of the project was chosen by the student, and we could choose to work individually or in teams. When introducing the project, Professor Presti mentioned a subject that he very much wanted a student to attempt: designing a kit to upgrade the lab’s basic Dagu dg01d DC motors to be PID controlled smart motors. The gist of this is that he wanted a cheap motor that could be set to a given RPM and would maintain that speed regardless of the load applied to it; it would apply more power if it detected that its rpm was slowing down. PID stands for proportional - integral - derivative, three separate adjusting factors that combine to make the motor output respond appropriately.

I accepted Professor Presti’s challenge as a solo project, and spent a couple of very intense weeks working on this (during finals season). It required some fiddly device programming, a lot of soldering, plenty of messing with annoying microcontrollers, and some complex 3d modeling/printing. To make things more complicated, by the time I finished the design, all of campus’s 3d printers were booked solid through the end of the year, so I had to spend a few hundred dollars of my own money to have a shop in midtown print my parts. I only got two copies of the parts, so I could only afford to break one of each.

After a few days of very little sleep, during which my roommate expressed concern about my mental health, I managed to get the contraption to work. It was the day before the deadline. I delivered the final project, Professor Presti was thrilled, and I got an A for both the project and the class. Unfortunately, the experiment was a null result: The total cost of the printed casing and microcontrollers, not to mention the manual effort required to solder everything together, exceeded the cost of just buying a PID controlled motor. In retrospect, this makes tons of sense.

Lessons learned: when designing a housing for something, you have to consider not only how the components will fit into the casing, but also how you’ll get the parts into the casing in the first place - my plan nearly didn’t work because it was almost impossible to get certain wires into their proper places!

## Images on this page

- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1595295870435-CTJPJHT9IQXLFNKQJBS5/motorModel.jpg
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1569463728928-890W9DN43VQFOYL28NVO/motorModel_crop.png
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1569463749335-AVTKMLUDDFXXATE19IOW/IMG_20181204_102532.jpg
