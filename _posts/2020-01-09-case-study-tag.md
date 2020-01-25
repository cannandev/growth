---
layout: post
title:  "Case Study: Building a Drupal UI for Third & Grove Decoupled Gatsby Site"
background: "/assets/images/headers/michael-emono-oGPOVUbrW8Y-unsplash.jpg"
thumbnail: "/assets/images/headers/michael-emono-oGPOVUbrW8Y-unsplas-thumb.jpg"
photo_atty: "Photo by Michael Emono on Unsplash"
tags: [ui, ux, architecture]
category: [Case Study]
---
Third and Grove is a 100% distributed digital agency with employees across the United States.  Keep reading to understand how we accomplished a complete rebrand with their favorite backend and a modern frontend.

# Overview
_headline: Third and Grove chose to build their rebranded site on a [headless](https://dri.es/how-to-decouple-drupal-in-2019) Drupal 8 platform, using the static site generator Gatsby behind the scenes, combining the best of both familiar and the latest technology._

Third and Grove's mission is to be "the most innovative agency in the world through modern digital design, awesome engineering, and building solutions for our clients as if we were building them for ourselves." So when they decided to rebrand in the summer of 2019, they had no doubt they would use the technologies they were already good at. But they also wanted showcase their ability to master cutting-edge tech. Being a Drupal shop, they would use Drupal to manage their rebranded content. But instead of Drupal's traditional templating layer system, they decided to use Gatsby - the free and open-source ReactJS framework for generating lightning-fast, progressive web apps.

# Problem Statement

_headline: Internal stakeholders needed an easy and quick user interface to add and edit site content. Developers needed to route the content to Gatsby for rendering._

![Thirdandgrove.com homepage](/assets/images/projects/tag-header-home.png)

Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast. In our case, those resources mostly came from Drupal content. But what would the user interface look like to capture content? How do you build an interface that works for everyone? Here come UX principles to the rescue.

# Users & Audience
_headline: Only internal stakeholders would see the content management UI. After reviewing user needs, two main personas became clear._

##### <i class="far fa-hand-point-right"></i>Andrew #####
![Thirdandgrove.com User Personas](/assets/images/projects/tag-persona-andrew.png)

##### <i class="far fa-hand-point-right"></i> Maxine #####
![Thirdandgrove.com User Personas](/assets/images/projects/tag-persona-maxine.png)

Only internal stakeholders (TAG employees) would see the content management user interface via a separate URL. But their roles and needs varied. I created a matrix of users based on their login permissions.

##### <i class="far fa-hand-point-right"></i> User Matrix #####

|Role|Needs|
|----|----|
|Project manager|Add new case studies, manage home page|
|SEO/SEM strategists|Add accurate titles and meta-data for each page|
|Blog contributors|Write Blog content|
|CEO|Edit pretty much anything he wants|
|Visual designer|curate all images and background colors|
|Hiring managers|Update available roles and their descriptions|
|Frontend developer|Render dynamic content exactly as the designs|
|Backend develoer|Connect Drupal fields to React components|

Using this matrix, I could narrow down users to two personas: Andrew (Project Manager) and Maxine (Developer) (see above for images).

# Roles & Responsibilities
_headline:Remote Frontend developer and usability tester on TAG's engineering team. New to React and Gatsby._

I was the Senior Frontend Developer at TAG. I was asked to jump onto this project in early July 2019. I joined after most of the architecture had already been built. The previous frontend developer did great job using [Emotion](https://emotion.sh/docs/introduction) to create a basic design system.

> Frontend developers [make great uxers(blog/why-frontend-devs-make-great-uxers)]. They conduct a lot of user research without even realizing it.

I focused on building the remaining React components and styling them according to the latest designs. I worked in tandem with our React Developer, a Drupal Architect and a Drupal developer.

# Scope & Constraints
The rebranded site had to launch within 6 weeks. Since our name was on the line, it had to look flawless.

Proper user experience research methods, wireframes and prototypes were not scoped. It had to look great on mobile, IE11, Edge and every modern browser.

I was handed final desktop and mobile designs in Invision, which had changed considerably since the site architecture began. I had to work quickly to understand the new designs, build the new components and style them to pixel perfection.

Meanwhile, I had limited knowledge of React, Gatsby and [Netlify](https://www.netlify.com/). Fortunately, I was eager to learn and had a great React mentor already on the team.

# Process

Tools <i class="far fa-tools"></i> Invision, Sketch, ReactJS, Gatsby, CSS, Emotion, GraphQL, CBT.

### 1. Empathize

_Listening to content managers during standups and reading their feedback in slack discussions, I understood the need for flexibility in every component we would build for the two personas._

As a developer, I was used to following a component-driven strategy for coding standards, and encouraged this as a best practice for the developers.  It was easy to follow this methodology building React components, since existing files were already organized this way.

However, there was another benefit for stakeholders. Clearly named components would allow content managers to quickly add content to different pages. If we could keep the components consistent across page layouts, we could build a seamless experience for the content managers. We wanted to create as few components as possible to not overwhelm the user, while still giving the content manager flexibility.

### 2. Research

_**Interviews** with internal stakeholders revealed that we needed to 1) create two new components and 2) enhance existing components with new fields to increase content flexibility. We fine-tuned the fields after running local **usability tests.**_


### 3. Design

_Identified reusable components from the Invision designs and worked with the visual designer to resolve discrepancies._

Visual designers often create designs as entire pages. Developers (should) break up those designs into modular puzzle pieces that can be reused throughout an application, perhaps in a different order or a different layout.

> Related article: (Designing for Devs blog series)

After studying the new designs, I came up with the new components we should build and fields to add to make existing components more flexible. One of those components was the Header.

![Thirdandgrove.com header component on a partner page](/assets/images/projects/tag-header-partner-gatsby.png)
![Thirdandgrove.com header component on a case study page](/assets/images/projects/tag-header-work.png)
![Thirdandgrove.com header component on a blog page](/assets/images/projects/tag-header-blog.png)
![Thirdandgrove.com header component on blog landing page](/assets/images/projects/tag-header-blog-landing.png)

Header - One header component used across different page templates. Should be agnostic of which page it’s on.

There were some discrepancies which needed addressing. Ability to choose a background color, enter title, label = date and author for blogs, custom for other pages, option to hide label on mobile.

Discrepancies - For example, the title text width smaller breaking into three lines on some pages than others. Needed to add this adjustment to user interface. Not all changes were added to interface because of project scope. [See full proposed UI]

Other components: Text, Image, Quote, Insights Carousel, etc.

### 4. Implement

_We changed the site architecture to add the new fields and components in the Drupal user interface, connect them to React via GraphQL queries(?), and styled as Emotion thingies._

Because of limited scope, only the following were implemented into the drupal user interface for the site launch:
Header
Text - WYSIWYG. Mobile settings and desktop settings - padding, margins, text sizes  [screenshot of code and UI].
Image - [screenshot of code and UI]
Insights carousel - add options for background color and title [screenshots of frontend]
Work Slider -

The rest settings were left in code. I did wireframes for a future iteration of TAG. See pdf.

Use drupal fields to set content values. Gatsby ingest content.
Relate new components and fields to backend developers (both drupal and react devs) to build out user interface in drupal. This works by matching content types in Drupal to React components.
Work with react developers to connect the UI components to in React.
Style components for responsive layouts (mobile, tablet and desktop breakpoints[]). Collaborate with frontend devs. New way of styling for me. CSS-in-JS with Emotion. Use JS maps and arrays and vars as much as possible. Commit to Github.

### 5. Test & Repeat.
_headline_
Test values. Create new pages.
Use GraphQL UI to validate data.
Test layout in CBT.
Launch live.

# Results & Lessons Learned
_The rebranded thirdandgrove.com launched on August 21, 2019._
[Other stuff from website].

Done different: Utilize Drupal’s own responsive image handling instead of relying on Gatsby. Time suck for learning curve. Reinventing the wheel.
Brought more accessibility awareness to the forefront.
Need to convince project managers and designers to see project tasks as components, not pages.
AirBNB way of styling React components.
Accessibility concerns addressed as an afterthought. Background colors not A11y compliant and no arrows on slideshows, confusing drag capability on desktop, designer won argument.
My time was up with company, so my proposed changes for future iterations were not implemented (see section).
Preview not working yet. Would have been great. Disabled when I left.
Only had time to put into drupal header options.
Use Media module to manage media assets instead of image upload.
