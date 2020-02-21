---
layout: post
title:  "Baking a new frontend for King Arthur Flour"
background: "/assets/images/headers/brooke-lark-wMzx2nBdeng-unsplash.jpg"
thumbnail: "/assets/images/headers/brooke-lark-wMzx2nBdeng-unsplash.jpg"
photo_atty: "Photo by Brooke Lark on Unsplash"
tags: [ui, drupal]
category: [Development]
---

The King Arthur Flour Company supplies American-made flour, baking mixes, cookbooks and baked goods. With just the right mix of a cutting edge design and a powerful Drupal platform, they had a recipe for an amazing redesign.

![kingarthur.com homepage header-with-search component image header](/assets/images/projects/kaf/kaf-homepage-header.png)

> "At King Arthur Flour, we believe in the power of baking to make a difference — for people and the planet."<cite>[kingarthurflour.com](https://www.kingarthurflour.com)</cite>

## Key Project Goal
Build a responsive frontend for [kingarthurflour.com](https://www.kingarthurflour.com). Allow content managers to select components on a page and build their own layouts.

## Role & Responsibilities
**Senior Frontend Developer** at Third and Grove. Developed frontend for [kingarthurflour.com](https://www.kingarthurflour.com) Drupal 8 nextgen redesign.

* Built responsive components and added to living [styleguide](https://www.kingarthurflour.com/styleguide) in drupal 8.
* Wrote php templates using Twig to render content from database to (frontend) layer.
* QA using CBT for optimal mobile experience and large.
* BEM standards for naming components.
* Learn and implement CSS Grid.

## Skills
Frontend &#x00B7; Design Patterns &#x00B7; Interface design &#x00B7; Grid Systems &#x00B7; Typography &#x00B7; Style Guides &#x00B7; Components & Templates &#x00B7; Performance Optimization &#x00B7; PHP &#x00B7; Drupal 8 &#x00B7; Twig

## Challenges
Worked with designers to find solutions to challenging frontend layouts using CSS Grid. Sometimes what looks great as a static Sketch design doesn't work in the real world. Example: scrolljack. Requirements:
1. allowing users to select list of thumbnail images and main image
1. Automatically displays a fully responsive component that changes position on mobile, tablet and desktop.
1. "Snaps" to user's browser soon after user starts to vertically scroll through list.
1. "Unsnaps" once user reaches end of list.
1. Reversible (left to right)

Designer wanted something similar to jcrew.com.
![jcrew main thumbnail with sidebar](/assets/images/projects/kaf/jcrew-sticky-component-long.png)

Instead of filters, thumbnail images with text. Instead of 3-col, one large image.
![designers vision of scrolljack on an ideal 1378 x 978 viewport](/assets/images/projects/kaf/kaf-scrolljack-left.png)


Works best larger image is flush with bottom of viewport. To ensure, should be larger than list. Problem with this design is a dynamic list (of recipes or articles) would be longer than the main image. Explain to stakeholders would not work well and why [technical explanation of sticky. Explain to non-technical project managers]. Made two suggestions. 1) Change the height of the main image to the height of the viewport (100vh) or 2) Forget sticky, and make the list fixed height, overflow scroll. The project manager wanted to make the stakeholders happy. After many hours and failed attempts, went with the sticky scrolljack anyway and ignore users with larger viewports. Can't win them all.

![scrolljack implementation on larger viewports](/assets/images/projects/kaf/kaf-scrolljack-large-view.png)

## Results
[Kingarthurflour.com](https://www.kingarthurflour.com) launched their fresh new look in June 2019. It won [Drupal's Most Prestigious Award](https://www.acquia.com/about-us/newsroom/press-releases/winners-unveiled-2019-acquia-engage-awards) as _Leader of the Pack: Commerce 2019 Acquia Engage Awards_. The redesign resulted in a 48% increase in account registrations and 38% increase in month over month revenue.
