---
layout: post
title:  "Case Study: Building a Drupal UI for Third & Grove Decoupled Gatsby Site"
background: "/assets/images/headers/michael-emono-oGPOVUbrW8Y-unsplash.jpg"
thumbnail: "/assets/images/headers/michael-emono-oGPOVUbrW8Y-unsplas-thumb.jpg"
photo_atty: "Photo by Michael Emono on Unsplash"
tags: [ui, ia]
category: [Case Study]
---
Third and Grove is a 100% distributed digital agency with employees across the United States.  Keep reading to understand how we accomplished a complete rebrand with their favorite backend and a modern frontend.

## Overview
_Third and Grove chose to build their rebranded site on a [headless](https://dri.es/how-to-decouple-drupal-in-2019) Drupal 8 platform, using the static site generator Gatsby behind the scenes, combining the best of both familiar and the latest technology._

Third and Grove's mission is to be "the most innovative agency in the world through modern digital design, awesome engineering, and building solutions for our clients as if we were building them for ourselves."

> "Slaying the mundane one pixel at a time." -- Third and Grove motto.

So when they decided to rebrand in the summer of 2019, they had no doubt they would use the technologies they were already good at. But they also wanted showcase their ability to master cutting-edge tech. Being a Drupal shop, they would use Drupal to manage their rebranded content. But instead of Drupal's traditional templating layer system, they decided to use Gatsby - the free and open-source ReactJS framework for generating lightning-fast, progressive web apps.

## Problem Statement

_Internal stakeholders needed an easy and quick user interface to add and edit site content. Developers needed to route the content to Gatsby for rendering._

![Thirdandgrove.com homepage](/assets/images/projects/tag-header-home.png)

Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast. In our case, those resources mostly came from Drupal content. But what would the user interface look like to capture content? How do you build an interface that works for everyone? Here come UX principles to the rescue.

## Users & Audience
_Only internal stakeholders would see the content management UI. After reviewing user needs, two main personas became clear._

##### Andrew #####
![Thirdandgrove.com User Personas](/assets/images/projects/tag-persona-andrew.png)

##### Maxine #####
![Thirdandgrove.com User Personas](/assets/images/projects/tag-persona-maxine.png)


## Roles & Responsibilities
_Remote Frontend developer and usability tester on TAG's engineering team. New to React and Gatsby._

I was the Senior Frontend Developer at TAG. I was asked to jump onto this project in early July 2019. I joined after most of the architecture had already been built. The previous frontend developer did great job using [Emotion](https://emotion.sh/docs/introduction) to create a basic design system.

![Screenshot of 170 commits]

I focused on building the remaining React components and styling them according to the latest designs. I worked in tandem with our React Developer, a Drupal Architect and a Drupal developer.

## Scope & Constraints
_The rebranded site had to launch within 6 weeks. Since our name was on the line, it had to look flawless. It had to look great on mobile, IE11, Edge and every modern browser. Proper user experience research methods, wireframes and prototypes were not scoped into the project. I did them on my own._

[This project worked backward from a normal UX project.]

I was handed final desktop and mobile designs in Invision, which had changed considerably since the site architecture began. I had to work quickly to understand the new designs, build the new components and style them to pixel perfection.

Meanwhile, I had limited knowledge of React, Gatsby and [Netlify](https://www.netlify.com/). Fortunately, I was eager to learn and had a great React mentor already on the team.

## Process

Tools <i class="far fa-tools"></i> Invision, Sketch, ReactJS, Gatsby, CSS, Emotion, GraphQL, CBT.

### 1. Research

_**Interviews** with internal stakeholders revealed that we needed to 1) create two new components and 2) enhance existing components with new fields to increase content flexibility. We fine-tuned the fields after running local **usability tests.**_

These interviews were conducted mostly over **slack** conversations, since we were a distributed company across the United States. I also studied their reactions during Zoom meetings as they walked through the process of adding/editing/deleting content. I learned frustrations and goals. Eight (8) stakeholders participated in adding/editing/deleting content to test the admin UI's usability. The team learned the results of **unmoderated usability tests** during daily scrum sessions. This helped with iterative changes to the initial build.

The goal was to understand:
* Is this component usable?
* How easy/difficult is it to add or change content?
* Do we need to add another field to this component?
* Are we getting the right data from this component to React?

### 2. Empathize

_Listening to content managers during standups and reading their feedback in slack discussions, I understood the need for flexibility in every component we would build for the two personas._

Only internal stakeholders (TAG employees) would see the content management user interface via a separate URL. But their roles and needs varied. To understand and empathize with each user, I created a matrix of users based on their login permissions.

|Role|Needs|
|----|----|
|Project manager|Add new case studies, manage home page|
|SEO/SEM strategists|Add accurate titles and meta-data for each page|
|Blog contributors|Write Blog content|
|CEO|Edit pretty much anything he wants|
|Visual designer|curate all images and background colors|
|Hiring managers|Update available roles and their descriptions|
|Frontend developer|Render dynamic content exactly as the designs|
|Backend developer|Connect Drupal fields to React components|

Once I learned the behavior of each user in the matrix and listened to their goals and frustrations with the user interface, it was easier to create accurate **user personas**. I narrowed them down to two: Andrew (Project Manager) and Maxine (Developer).

> "I love that you added the color picker to the header component. It'll be easy to choose a background color that goes with the artwork." -- Andrew

> "He wants to change just this page's title width? Are you kidding me? Does the designer even know this is used sitewide?" -- Maxine

### 3. Design

_Because of project constraints, I had to work backward from the typical UX process. I identified reusable components from the Invision designs, worked with the visual designer to resolve discrepancies, and created wireframes for future improvements._

The point of user experience is to identify user needs, user flow and interactions LONG BEFORE the project reaches a visual designer or developer. Unfortunately, this project did not start with user experience in mind. However, it's never too late to apply UX methods for future improvements.

Visual designers often create their designs as entire pages. Developers, in turn, break up those designs into modular puzzle pieces that can be reused throughout an application, perhaps in a different order or a different layout. We call these modules or components.

What I encourage designers to do is design components. Since most of the architecture had already been built, I studied the new designs to see which components we already had and which ones we still needed to match the design. I answered the following questions reviewing the designs:

* Who were the users?
* What were their frustrations and goals using the current content management interface?
* How could we improve the interface to meet user needs?
* How do we reflect these new components in the interface?

After studying the new designs, I came up with 1) two new components we should build and 2) new fields to add flexibility to existing components. One of those components was the Header.
[slider of different header images]
[caption: One header component used across different page templates.]

Based on the new designs. We needed to address the ability to:
* choose a background color
* enter header title
* upload a header image
* add a label above the title

Behind the scenes: the label would default to a date and author for blog pages, while it displayed custom text for other pages. We also needed an option to hide the label on mobile. One more caveat - the header had to be agnostic of its page content. This meant the same header interface would be used to create content at the top of the homepage, a blog page, a work page, a landing page and an informational page (about, legal, etc.)

I came up with wireframes for the interface that would address all of these user needs.

![Screenshot of header balsamiq mocks]

### 4. Implement

_We changed the site architecture to add the new fields to the Drupal user interface, load them into React components, and style them according to our designs._

Clearly-named components allows content managers to quickly add content to different pages. If we could keep the components consistent, even across different page layouts, we could achieve a seamless experience for the content managers. We wanted to create as few components as possible to avoid overwhelming the user, while still giving the content manager flexibility.

At the same time, each component had to collect the _precise_ information the developers needed. Since we wanted to limit the number of components, we could capture as much data as possible by adding more fields to a component.

We set out to work. I notified the backend developers of the component changes we needed. They matched content types in Drupal to their relative React components. I wrote code to read and style the new field values. For example, in the header component, the developers added and configured the Drupal [color field module](https://www.drupal.org/project/color_field). This new field allows a user to pick a color, which is converted to a hexadecimal value. Once saved, my code in the ReactJS component reads the new field, recognizes the user's input and sets the header element background-color to the hexadecimal code. From the user's standpoint, this simple interaction was quick, adds flexibility and requires no knowledge of code.

![gif of color picture in action]

Unfortunately, because of scope, I had to leave other component settings in code instead of adding them to the user interface.
![Screenshot of customized label text]
![Screenshot of hide on mobile]

Other components included Text, Image, Quotes, Image Slider.
![Show the actual images next to balsamiq mockups]

### 5. Test & Repeat.
_Since we had constant feedback from content managers and developers testing the admin interface, we had an iterative process for daily builds._

As content managers created new pages, mixing and matching components on each page, we received constant feedback over slack and in our daily scrum meetings. The project manager turned these into JIRA tickets assigned to myself or one of the other developers to fix.

We used GraphQL UI to validate our data from the Drupal database. This made sure that the correct values were indeed loaded into each React component.

I used CrossBrowserTesting to manually test pages in Chrome, Firefox, Safari, Edge, Android, and iPhone devices.

As we fixed issues, we sent them to the Quality Assurance team for further testing.


## Results & Lessons Learned
_The rebranded thirdandgrove.com launched on August 30, 2019 boasting lightning fast performance _

> This rebrand/replatform is a big leap forward for our brand, marking a milestone in who we want to be as a company.  -- Grant Glidewell, React Developer

As mentioned before, user experience methodology was not a priority for this website. The frontend and administrative interface could have been extensively improved _before_ the designs. How? Through user research and experience design. I would have loved to have worked with the internal stakeholders to review my wireframes and build some awesome prototypes before we ever touched code. This way, developers could have been included earlier in the life cycle. I was hoping to build a React admin theme contributed back to the Drupal-Gatsby community.

I also would have liked to see the [Drupal with Gatsby Preview](https://www.gatsbyjs.org/blog/2019-06-26-live-preview-for-drupal/) in production. However, it was turned off at the time of launch because of performance issues with Netlify.

Although my time with Third and Grove ended shortly after the launch, I was ecstatic to learn ReactJS. I also gained more experience wireframing ideas in Balsamiq. I realized that user-centered design is critical to me. Now I'm even more determined to fight for the user in future projects.
