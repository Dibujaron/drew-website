---
url: https://drew.polstra.com/sqblog/starquest-9-really-mojang
title: StarQuest #9: Really, Mojang? — Drew Polstra
http_status: 200
---

# StarQuest #9: Really, Mojang?

### Originally posted on Dec 14, 2014

Hey there. It has been quite awhile since the last blog post, and a good bit of history has been made since then. Time to update this documentation. If you're new to this blog, I suggest you go back to the first post and read up through this one. The server's story is an interesting one and I think you might enjoy it.

After the problems that caused the creation of this page, the development staff continued to work our butts off fixing bungeecord's problems. It took a long time. The months of July and August were spent fixing bugs, and we were still working on them well into September and October. We only truly felt like BungeeCord was behind us in October, four months behind schedule.

Part of the reason for the long delay was the problems that Mojang kept throwing at us. They seemed determined to knock us back down whenever we got on our feet. Just as things were beginning to seem stable, we always seemed to run into another major challenge. The first was minecraft's UUID update. This change probably went mostly unnoticed for players, but to server administrators it was a massive problem. Previosly, the game's code had relied on a player's username being unique - no other player would ever have your name. Mojang wanted players to be able to change their usernames, so they created UUIDs, randomly generated strings of characters that uniquely represent a player. Unfortunately, the change required us to redo a ton of our code that relied on usernames, and that took a long time, and it caused many bugs. The worst of them was the need to change our permissions system to a different plugin, which was an enormous transfer and a huge pain.

However, those problems passed as well, and within a few weeks we had resolved the bugs and recovered from that. We went back to fixing up the last few bungeecord bugs. Then, Mojang decided to punch us in the stomach again by announcing their new EULA. The new EULA policy required servers to not sell things ingame to make money, which effectively removed our entire income stream. The developers had to scramble to come up with a system that would provide enough funds to support the server and still be fair to those who couldn't pay. The result was SQPriority. Because we were still working on fixing Bungee bugs at the same time, the development of SQPriority was stalled, and we ended up having several weeks in which the server had no income at all. When we did get Priority running, it had many database problems that resulted in many headaches for the staff.

Around the same time as we were getting Priority up and running, another disaster occured. The development team of the server software Bukkit decided to quit in protest of the EULA. Though StarQuest does not run on Bukkit directly, the software that we use, Spigot, uses components of Bukkit and could not be updated while Bukkit was discontinued. As a result, we had to worry about the chance of Spigot never being updated and having to move to another system - a transfer on the same scale as BungeeCord. Spigot did find a way to update, so this never happened, but it was very worrisome for a very long time.

Eventually, we got past it all. Priority was up and running and stable and creating income, the bungee bugs were resolved, and the spigot crisis was averted. The development staff, feeling some breathing room, began to take a closer look at the game balance, which had been largely neglected through the period of the bungeecord dark ages.

Next time: Game Balance Struggles.

## Images on this page

- https://images.squarespace-cdn.com/content/v1/5d3c7cb83781cd0001256ce2/1577922644781-L42OBN8E52229Y96VHMP/dibujaron.png
