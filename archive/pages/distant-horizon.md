---
url: https://drew.polstra.com/distant-horizon
title: Distant Horizon — Drew Polstra
http_status: 200
---

Distant Horizon is a web game that I’ve been writing for fun during the pandemic. I don’t know what its fate will be after things return to normal, but for now it’s released in a beta state.

I believe it is fairly innovative. There have been many previous entries in the genre of “.io” web-based multiplayer games, and there have been many space peddler games with at least this much depth. The combination of the two is novel. The graphics are 2d and very minimal to make it easy to run in almost any browser.

The AI system is also particularly novel. I struggled for months while developing the AI - turns out space physics is hard and the three-body problem is really hard. I had decent solutions but they required far, far too much computation to work in practice - my hardware costs would’ve been unbelievable. So I gave up on the entire project for several months, until one day I thought of a new idea! I adjusted the orbits of everything in the universe so that the universe loops perfectly once every 21 minutes or so (83160 ticks - this is a very highly divisible number). Then, I set up infrastructure to record the routes that actual players follow when navigating between stations. Finally, I made an AI that simply follows the routes laid down by the human players. When a station wants to dispatch an AI ship to another station, it searches the routes database to find a suitably fast route to the target, and then it sends the AI along that path. The AI is incredibly humanlike, because it is truly human.urls: http://distant-horizon.io or http://distanthorizon.iorepositories: Game Server, Client, Session Server

The below pictures are from early in development and I should really update them. Things got much sleeker over time.

## Images on this page

- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593895075381-M8TW5IOYWI3ADH5PJQFH/Capture6.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1611260018581-LPLZ47LJ2YXQX0BNAK2O/distanthorizon_ingame.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1611260043028-I9SR6UTH40LSNAWDR0B5/dhlogo.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1611260086413-1B4V4WXQ20UZCL4B55OS/distanthorizon_market.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593894540105-COWGVBB22QH7NPEFGGPH/Capture3.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593894469758-5LSI0HQOQGU9F8DE5ALH/Capture2.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593894582895-OD8UJBRSUV87P2ZCQS2W/catalog_phe.png
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593894582897-4S8V8G0X69IXWM3PN1TS/catalog_rijay.png
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593894583248-RJ55G6DSF2JNLOM3YPKK/SlimAndPointy.png
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593894654963-5E2OPI5TJQUIK7G3KV1D/Capture4.PNG
- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1593895240598-T6GTI49C1MWVILW7A258/Capture7.png
