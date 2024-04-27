+++
title = "Computers vs Real Life"
date = 2024-04-27
description = "How computer terms can be explained by concepts of the real life (or vice versa)"
+++


The setting for all the following explanations is that you are at home, sitting on your desk and are working on something.

# Scheduling

First you need to figure out what to work on: homework, bureaucracy, personal projects? What is the most important? What has the earliest deadline? What makes the most fun?

**Scheduling** is the process you use to decide how to work through your to-do list. There are many different ways to do this, and you can see that different people employ different techniques. For example, there are people who postpone a task until its deadline is very close, while others may start early.

When viewed over a longer period (e.g. a year), switching between tasks (sleeping, working, cooking, learning a new [instrument](https://youtu.be/dQw4w9WgXcQ)) appears as you were doing multiple tasks simultaneously. You made progress learning your new hobby but you also made progress in your career. This is called **multitasking**.

One example of a scheduling algorithm is **Shortest Remaining Time First**. Do the tasks first that can be completed quickly. This may make you happy because you can tick a lot of items on your ToDo list. However, this can lead to you only doing short tasks, while long tasks are postponed further and further (**starvation** of long-running tasks).
For other scheduling algorithms, refer to [Wikipedia](https://en.wikipedia.org/wiki/Scheduling_(computing)#Scheduling_disciplines).



# Interrupt

Again imagine that you are at home, working on something. Suddenly someone (e.g. the parcel carrier) rings the door bell and *interrupts* you. You stop doing what you were doing (working, cooking, watching TV). Maybe you need to save the status first, for example by turning down the hob. Then, you handle the interrupt by opening the door and accept the parcel. Afterwards, you restore the old state (turn up the hob again) and continue what you were doing before the interrupt. Saving and restoring the state is called [context switch](https://en.wikipedia.org/wiki/Context_switch) in computer science.


## Asynchronous using Interrupts

Writing someone an email or message using your [favorite messenger](https://matrix.org) is an asynchronous task: When you have sent the message, you do something else until an answer arrives, which is delivered to you by an interrupt (your phone buzzing). This allows you to send multiple messages to different people and wait for their answers simultaneously.


## Synchronous, Busy Waiting and Polling

You can also actively wait for the answer, for example by refreshing your email inbox every second. This is called **busy waiting** because you are busy with waiting; you can't do anything else in the meantime, not even reply to other messages.

You can also do **polling**: Instead of refreshing your email inbox every second, you refresh it every 5 minutes and do something in between, e.g. cook something.





# Memory Management

Your and your computer both make use of the [principle of locality](https://en.wikipedia.org/wiki/Locality_of_reference): You keep things close to you that you need frequently.

## Registers

When you are working, you have a few pens and sheets of paper close to you on your desk.

## Main memory

The space on your desk is limited, so you store your folders on the shelf. In order to get a folder, you need to stop working, stand up, go the shelf, pick it, take it to your desk and continue working.

### Caching

If you notice that you use certain objects from the main memory (shelf) frequently, you may decide to store them closer to you, i.e. on a shelf next to your desk (cache).

## Secondary Storage

Things you only need very rarely are stored in the attic or cellar. This is the largest storage, but accessing it takes very long.

### Swapping

Swapping out: If you notice that you have objects you don't use that often, you might want move them to secondary storage, since the space in your shelf is limited.  
Swapping in: Conversely, frequently used objects might be better off closer to you, so you don't lose so much time getting them.




# Internet

## IP addresses

IP addresses are like postal addresses: They are used to identify a computer on the internet. The IP address is split into two parts:

- City/zip code: IP network prefix
- Street and house number: IP suffix


## DNS

If you need to look up a phone number, you refer to a phone book (or googling it). The phone book is like the DNS: You enter a name (e.g. "John Doe") and get the phone number (IP address) in return.


## Checksums, Error Correction, ACKnowledgments

In aviation, the pilot and the air traffic controller communicate using the [NATO phonetic alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet) to avoid misunderstandings.

> A spelling alphabet is used to spell parts of a message containing letters and numbers to avoid confusion, because many letters sound similar, for instance "n" and "m" or "f" and "s"; the potential for confusion increases if static or other interference is present. For instance the message "proceed to map grid DH98" could be transmitted as "proceed to map grid Delta-Hotel-Niner-Ait". Using "Delta" instead of "D" avoids confusion between "DH98" and "BH98" or "TH98". The unusual pronunciation of certain numbers was designed to reduce confusion as well.
>
> — [NATO phonetic alphabet on Wikipedia](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet)

This is similar to checksums and error correction in computer networks: If you send a message, you add a checksum to it ([CRC code](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)). The receiver then calculates the checksum and compares it to the one you sent. If they match, the message was transmitted correctly and you inform the sender about this by sending an ACKnowledgment (like a [read-back](https://en.wikipedia.org/wiki/Procedure_word#Read_back) in aviation communication). If they don't match, you can ask the receiver to repeat the message (NACK). In aviation, you would say ["say again"](https://en.wikipedia.org/wiki/Procedure_word#Say_again). And if you don't respond at all in a certain time, the receiver can assume that the message was lost and sends it again.


## Application Layer Protocol Negotiation (ALPN)

Think of being in Spain for vacation and someone starts talking to you in Spanish. Since you don't speak know Spanish, you ask "Hey, do you speak English?" and they (luckily) respond "Of course". This way, you *negotiated* what *protocol* (language) you want to communicate in.

In computers, ALPN is used when visiting a web page. Your computer opens a TCP connection to the IP address of the server and sends a TLS ClientHello including it supported application-layer protocols (HTTP/1.1 and HTTP/2), i.e. the languages. The server then checks which of these protocols it supports and decides for one of them.
