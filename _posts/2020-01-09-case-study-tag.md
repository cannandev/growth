---
layout: post
title:  "Case Study: Drupal User Interface for Third & Grove Decoupled Gatsby Site"
background: "/assets/images/headers/michael-emono-oGPOVUbrW8Y-unsplash.jpg"
thumbnail: "/assets/images/headers/michael-emono-oGPOVUbrW8Y-unsplas-thumb.jpg"
photo_atty: "Photo by Michael Emono on Unsplash"
tags: [ui, architecture]
category: [Case Study]
---
Provide a user interface for a Gatsby driven website [a PWA (Progressive Web App) generator].

# Overview

As a 100% distributed digital agency with employees across the United States, Third and Grove (TAG)’s mission is to be the most innovative agency in the world through modern digital design, awesome engineering, being good citizens, and building solutions for our clients as if we were building them for ourselves. Modern technology is moving toward faster apps. Static site generators such as Gatsby and Javascript based application frameworks such as ReactJS. To showcase what they could do for clients, TAG wanted to build their own website on this platform.

# Problem Statement

Provide a user interface for a Gatsby driven website [a PWA (Progressive Web App) generator]. Internal stakeholders should be able to change the frontend without requesting  a developer to change code. Use drupal fields to set values read by ReactJS and rendered as a Gatsby project. As a Drupal shop, TAG decided to use Drupal to solve this problem. What should the interface look like? It needed to be 1) simple enough for any of the users and 2) flexible enough to get all data needed by developers.
#Users & Audience
Only TAG employees (internal stakeholders) would see the user interface. But their roles and needs varied:
Project managers - Add new case studies, manage home page
SEO, SEM strategists - Add accurate titles and meta data for each page
Blog contributors - Add/Edit Insights content
CEO - Add/Edit Insights content and pretty much anything he wants
Creative director and visual designer - curate images and background images. Usability test for pixel perfect replication of their design.
Hiring managers - Update available roles and their descriptions

# Roles & Responsibilities
Frontend developer (1 of 2) joining the project after most of the architecture had already been built. and quality assurance tester. React Developer. 1 Drupal Architect and 1 Drupal developer. 1 Visual Designer.
Learned and wrote ReactJS components for thirdandgrove.com, the agency’s first lightning-fast decoupled site with Drupal and Gatsby. Used Emotion CSS-in-JavaScript to style components and built a modular user interface. Performed design critiques of Sketch files, rendering a more flexible Drupal user interface.

As frontend developer we do a lot of UX research without labeling as such...interviewing visual designers to understand what he had in mind when he created this mock, interview clients/stakeholders to understand what problem they’re trying to solve, usability test content management admins to see what they’re expecting once they click the update button. Read and understand sitemaps, user flows and wireframes. Request A/B tests and SEO results to understand which browsers versions and mobile devices we need to build for/test. Review quality assurance tests and see where we can improve accessibility and the user interface. Interview backend developers to see what data is available to frontend and how to access it. Most of these conversations on slack and emails.

# Scope & Constraints

Design handed to us as most projects in digital agencies are, without wireframes or prototypes. Requested invision with code (uploaded sketch files).
Had to look flawless on mobile, IE11, Edge and modern browsers.
Tight launch schedule. No time for user personas, user research, usability testing.
Limited knowledge of React, Gatsby or (what’s the CI we used?)
What the CEO wants goes.
Accessibility concerns addressed as an afterthought. Background colors not A11y compliant and no arrows on slideshows, confusing drag capability on desktop, designer won argument.
My time was up with company, so my proposed changes for future iterations were not implemented (see section).
Preview not working yet. Would have been great. Disabled when I left.

# Process

Tools <i class="far fa-tools"></i> Invision, Sketch, ReactJS, Gatsby, CSS, Emotion, GraphQL, CBT.

### 1. Empathize
_Looking at the designs, we needed more content components to address the needs of both developers and content managers, which the Drupal user interface did not yet show._

Our scope did not allow time to create in-depth user personas. However, I had created  a user matrix (see Users & Audience section) of internal stakeholders to know and understand the users and their needs.
As a developer, I was used to following a component driven strategy for coding standards, and encouraged this as a best practice for the team of developers[types].  It was easy to follow this methodology building React components, since existing files were already organized this way.
But there was another benefit for stakeholders. Clearly named components would allow content managers[types] to quickly add content to different pages. If we could keep the components consistent across page layouts, we could build a seamless experience for the content managers. We wanted to create as few components as possible to not overwhelm the user, while still giving the content manager flexibility.

### 2. Research
_Interviews  with internal stakeholders revealed that certain components needed to be either created or enhanced with new fields to increase content flexibility,  while still reaching the visual designer’s goals and capture enough data for the developers._

Visual designers often create designs as entire pages. Instead, I had to review each Invision mockup as a page of content components:
Header - One header component used across different page templates. Should be agnostic of which page it’s on. How account for design differences across templates? Design differences on mobile? [screenshots of frontend]
Full width 2-col text with image - Ability to swap image and text position and set background color [screenshots of frontend]
Text with Image - canned after reviewing new design and broken into two separate components. [screenshots of frontend]
Legal page - look considerably different on mobile [screenshots of frontend]
Insights carousel - add options for background color and title [screenshots of frontend]
Small Quote (partners), Big quote (work,  insights) - look considerably different on mobile

### 3. Design
_Mockups of all pages were already designed by the time the frontend team was brought onboard._
1. Homepage
1. Partner
1. Work landing page
1. Case Studies
1. Blog landing page
1. Insights (blog pages)
1. Contact
1. About Us
1. Legal

### 4. Implement
_We changed the site architecture to add the new fields and components in the Drupal user interface, connect them to React via GraphQL queries(?), and styled as Emotion thingies._

Build components
Header: Options added. [screenshot of code and UI]
Page label
Date/Author default for blog pages
Hidden on mobile
Title
Background color
Height
Hero Image
Meta data
Full width 2-col text with image - add reverse option [screenshot of UI]
Text - WYSIWYG. Mobile settings and desktop settings - padding, margins, text sizes  [screenshot of code and UI]. DropCap? Explain easier to add to insights - only place used.
Image - [screenshot of code and UI]
Legal page -  [screenshots of code]
Insights carousel - add options for background color and title [screenshots of frontend]
Small Quote (partners), Big quote (work,  insights) - look considerably different on mobile
Relate new components and fields to backend developers (both drupal and react devs) to build out user interface in drupal.
Work with react developers to connect the UI components to in React.
Style components for responsive layouts (mobile, tablet and desktop breakpoints[]). Collaborate with frontend devs. New way of styling for me. CSS-in-JS with Emotion. Use JS maps and arrays and vars as much as possible. Commit to Github.

### 5. Test & Repeat.
_headline_
Test values. Create new pages.
Use GraphQL UI to validate data.
Test layout in CBT.
Launch live.

## Proposed changes not implemented - see pdf
User personas
Header component
Quote
Images (Media module to manage media assets)
Work carousel collage picker (A, B, C)

# Results & Lessons Learned
_Launched on (date). Resulted in a 48% increase in account registrations and 38% increase in month over month revenue._

[Other stuff from website].
Done different: Utilize Drupal’s own responsive image handling instead of relying on Gatsby. Time suck for learning curve. Reinventing the wheel.
Brought more accessibility awareness to the forefront.
Need to convince project managers and designers to see project tasks as components, not pages.
AirBNB way of styling React components.
