---
layout: post
title:  "Case Study: Building a useful photo app for Mint Creative Co."
date:   2019-12-14 00:26:01 -0500
description: "Solutions Architecture for an Atlanta pet photography/design company."
background: "/assets/images/headers/sankhadeep-barman-Yy_fp2GzPco-unsplash.jpg"
thumbnail: "/assets/images/headers/sankhadeep-barman-Yy_fp2GzPco-unsplash.jpg"
photo_atty: "Photo by Sankhadeep Barman on Unsplash"
tags: [research, prototypes]
category: [Case Study]
---
MINT Creative Co is an Atlanta pet photography/portrait studio that also creates content for pet-friendly brands. We are building an app that will empower clients to take professional photos. Keep reading to understand the user-centered process.

## Overview
**Built a clickable mobile app prototype called PawfectPic&trade; for [MINT Creative Co](mintcreativeco.com), a pet photography/design studio with over 1200 Instagram followers. Prioritized providing an easy and informative interface for social media influencers.**

#Pawfect and #pawfectpic are popular hashtags on social media. They describe that one adorable photo of your favorite pet. But how do you get Fido to sit still and take a selfie? **MINT PawfectPic&trade; catches your pet's attention using your phone.** No expensive attachments. The app has three preset sounds: bark, squeaky toy, and kisses. It also has a flicker function using the phone’s native flash.

## Problem Statement
**Need to take professional quality photos of pets for social media, without a professional photographer.**

The stakeholder receives tons of images from clients and brand ambassadors to join her Pet Model Network on Instagram. She wants to eventually build a database of models for pet-friendly brands. At first, I thought the app could be a core method of uploading images to this database.

However, as the project progressed, the stakeholder ramped down her involvement in her company to pursue other business ventures. Then came the iPhone 11 Pro. Foreseeing the increase of iPhoneography as opposed to professional photography, she needed a way to share tips and tricks with her clients. This would free up her time and energy. PawfectPic&trade; lets her clients take professional quality photos _on their phone_.

## Users & Audience
1. MINT Creative customers
1. MINT Creative Instagram followers
1. Pet brand ambassadors on social media
1. Dog lovers

## Roles & Responsibilities
**UX Researcher and Experience Designer**. I worked by myself to write user personas, perform user interviews, build wireframes and prototypes. I also attended MINT Creative Co. events to conduct usability testing on MINT customers, pet-social media influencers and dog lovers.

## Scope & Constraints
This was a pro bono project, over 3 months. No budget.

## Process
<div class="toolbox">Tools: Balsamiq, MarvelApp, Draw.io, Sketch</div>

### Problem Definition
The first step was to **identify the primary app functions** (in order of importance):
1. Get your dog's attention to take a photo using sound or flickering lights.
1. Show tips and tricks to getting the perfect picture.
1. Post your picture to social media with default credit to MINT.
1. Allow users to send their pictures to MINT’s database of brand ambassadors.

The stakeholder provided sketches of her vision for the app:
![Initial sketch of photo app](/assets/images/projects/mint/IMG_0004.jpg)

### Research

Conducted **competitor research** to develop **business requirements** and **user personas**.
![Initial client paper with summary of competitor research](/assets/images/projects/mint/client_paper.png)

Links to competitor apps:
[DogCam](https://apps.apple.com/us/app/dogcam-dog-selfie-camera/id1441245944),
[PetSelfie](https://play.google.com/store/apps/developer?id=Pet+Selfie),
and [Look Here](https://play.google.com/store/apps/details?id=camera1.themaestrochef.com.cameraappfordogs&showAllReviews=true).

Conducted several rounds of **usability tests with clients and social media users**.
Although the app design was relatively simple, I had specific questions in mind during testing.
1. Will the user know they can record a video by holding the shutter button?
1. Does the user know how to post their photo to social media from the app?
1. Does the user recognize the icons, such as the camera roll?
1. Would the user prefer to see tips as popups or as links?
1. Would a “tour” animation be useful in helping users understand the meaning of certain icons?

Observing user behavior helped me make changes to the interface.

### Experience Design
I used **draw.io** to create a content **sitemap** and user flows.
![PawfectPic Sitemap](/assets/images/projects/mint/PawfectPic Sitemap_post_MINT.png)

Then **Balsamiq** to create low fidelity **wireframes**.
![PawfectPic Sitemap](/assets/images/projects/mint/PawfectPic_Wireframe_map_2.png)

Built a **low-fi prototype with MarvelApp**. Exported Balsamiq screens as individual images and uploaded them to MarvelApp
[![MarvelApp Prototype](/assets/images/projects/mint/marvelapp.png)](https://marvelapp.com/5gjd48h)

Link to prototype: <https://marvelapp.com/5gjd48h>


### Content Strategy
Based on my conversations with stakeholder on the new direction of her company and initial usability tests, I made the following changes to the **information architecture** and **navigation**:
* Remove detailed screens for social media
* Remove export/post to MINT functionality for MVP release
* Add screen for tips
* Show push notifications for tips
* Move/change the "light flicker"  icon
* Change camera roll “film” icon to a thumbnail of the latest photo
* Use the industry-standard icon for swapping between front and back camera

## Lessons Learned & Results
From the initial round of testing, I came to the following conclusions regarding PawfectPic&trade;:
1. **The camera roll should navigate to the user's actual camera roll and not just photos captured with the app.** This was different from the competitor apps, which all showed photos taken from the app instead of the native camera roll.
1. **It was unclear how to export images to MINT, IG, etc from the app.** Most users are used to selecting images from their native camera roll and then sharing them on their social media platform of choice. Giving credit (using @mention) to MINT was not a priority.

I plan to conduct another round of usability testing at the next MINT portrait event. It is the ideal place to reach members of the four key user groups.

I learned a great deal from the stakeholder about 1) crafting a niche for yourself in a flooded market and 2) moving with the ebbs and flows of your market. Millennials are keenly aware of new opportunities presented by social media, the need to connect with their audience, and being a serial entrepreneur.
