---
url: https://drew.polstra.com/autonomous-navigation
title: Autonomous Navigation — Drew Polstra
http_status: 200
---

> No, run it again, we’re intrigued!

- Professor Collins

In Fall of 2017, the ECE 2031 end-of-semester challenge was particularly difficult. The final challenge usually involved programming an FPGA, which was attached to a small mobile robot. The robot’s only inputs were a few ultrasonic distance sensors around the front-side. In my year, we were asked to program this robot to repeatedly patrol around a central baffle, without running into it or leaving the area. This was particularly difficult because the FPGA was programmed in a simple assembly language, much lower level than even C.

Most competitors attempted a dead-reckoning approach based on timings. These tended to work well for the first lap, but ultimately would drift off-course after a lap or two. My team’s approach, which I designed, was to use the ultrasonic sensors to maintain a constant distance away from the central baffle. When the robot sensed it was too close, it would angle its path further away from the baffle. When it sensed it was too far away, it would angle closer. The result was a slow, wiggling path that followed the baffle edge at a constant distance. This was all inspired by a line-following algorithm that I learned in my middle school lego robotics club.

Our team’s design was by far the most successful of the year. As a result of our success, I got a 99 in the course and was asked to return the next semester as a TA. Being a TA turned out to be pretty fun as well; it was like a greatest-hits version of the course, as I had to deal with all of the students’ most confusing bugs. I think I learned just as much the second semester as I did the first.

This is the best picture I could find of one of the agigo-bots. The FPGA is what you see attached to the top; barely visible on the front are four of the ultrasonic sensors.

## Images on this page

- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1574996987175-MU6S3M1VC6I92AB8TJRD/amigobot.jpg
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1611260142006-LPGXW74TW1RFRQGEGQWW/amigobot.jpg
