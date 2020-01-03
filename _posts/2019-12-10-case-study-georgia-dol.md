---
layout: post
title:  "Case Study: Georgia Department of Labor UI Services"
background: "/assets/headers/ian-schneider--IIluzOp4yA-unsplash.jpg"
thumbnail: "/assets/headers/ian-schneider--IIluzOp4yA-unsplash.jpg"
photo_atty: "Photo by Ian Schneider on Unsplash"
tags: [ux, ui]
category: ["Case Study"]
---
In this article, I'll examine the UI of UI! Let's see what small UX improvements can do to make filing for Unemployment Insurance less harrowing.

You're already umemployed, which makes life difficult enough. Why should claiming your weekly Unemployment Insurance Benefits add to your pain? Part of user experience is not emoting (invoking a certain emotion) from your user. On this website, the goal is not just to have a "pleasant" experience, but a secure and easy one. Let's take a look at the Georgia Department of Labor services to 1) Claim Weekly UI Benefits Payments and 2) Submit Weekly Work Search.

##What's the Problem?
The George Department of Labor has done a nice job of redesigning their landing page to quickly inform users of what they do and what services they provide. Links to important services and notices are clearly identified as underlined/blue text. An option to view all links are displayed as a clear call to action. Body text is legible at 20px with enough vertical spacing to feel comfortable to the eyes. The page is mobile-friendly and tablet-friendly, responsive to smaller viewports. Less engaging content, such as upcoming events, statistics and Newsroom posts fall below the "fold".

[image of homepage with notes ](https://dol.georgia.gov/)

So why is it when I click on the links to either [claim weekly unemployment benefits](https://www.dol.state.ga.us/WS4-MW5/cics.jsp?TRANSID=BP14&FRMNAME=BP14A) or [inform the DOL of recent work searches](https://www.dol.state.ga.us/Access/Service/SebWorkSearch), I feel like I landed on a free mp3 download page from 2001? These two pages feel completely detached from the main Department of Labor page. My eyebrow is up and I look at the location bar to make sure I'm on the same site. My trust factor just plummeted, which is not a good feeling when you're on a government website.

###Global elements
1. Make the theme consistent.
1. Move crazy amount of text.
1. Remove text mistaken for links.
1. Remove tables.
1. Make it responsive.
###Form factors
1. The opposite of everything below.
1. Add ARIA roles and attributes.
###Functionality
1. Users cannot paste information into form fields.
1. No errors after submitting invalid data.
1. Worker can submit form without meeting 3 contact requirement.

So how can we use user experience principles to improve this page?

##What's the Solution?
Below is a proposed mockup solution. As a UX-er on this project, I would take an iterative approach to improving the screens. Why? 1) It's government, which usually involves a lot of beauracratic red tape to make any change. 2) A cursory glance at the technology tells me these are JSP servlets. I would have to interview the developers to see how much we can change for a faster, more app type browser experience. JavaScript based framework like React or Vue? Angular already in the picture? I don't know? Here are the [Interview Questions for developers](blog article) I would ask before making any more changes.

Let's start by adding the global header and footer. A consistent look and feel eases a user's transition from page to page, even if the technology behind them varies. This is a basic rule of [theme development](blog topic). Seeing the same logo and emoticon makes a user feel safe. A banner that assures me this is an official website increases my trust factor. After all, if I'm entering my social security number, I want my experirence to be as safe as possible.

###Global elements
1. Same name as link.
1. Clearly identifiable links.
1. Make it responsive.
1. No tables! Remove row numbers.
1. Add aria role attributes for screen readers. Other accessibility tools. (See blog entry)

###Form factors
To make life easier on the developers and ensure a quick win, make sure my changes have one-to-one field mappings. Values can be exported and matched to new fields.
1. Should auto populate my name and telephone number. Provide an alternate number.
1. Make year fields 4 digits. This is expected calendar behavior in 2020.
1. Add example labels to form fields. But hide them in an i. (Don't give more than they need).
1. Make employer contact one textarea.
1. Validate form entries before the user moves on to the next step.
1. Increase character limits for employer name and type of work.
1. Change manner in which applied to dropdown instead of input (since there's a char limit of 30)
1. Change type of work to position name (optional)
1. Disable auto-jump from field to field.

###Functionality
1. Allow pasting. Please.
1. You have to enter your social security several times on the same website. That information is already in the users session. Why not use it and create a personalized experience?
1. Add a dropdown for which week you're submitting. Better yet, a calendar widget.
1. If the date of contact doesn't fall within the week user is submitting, notify the user immediately instead of submitting the entire form.
1. Nothing worse than accidentally refreshing and losing all your info. Keep field entries in session until session is over.
1. Allow them to enter one at a time, above the fold. Notify that still need x number to meet weekly requirements.

##Conclusion/Lessons learned
I thought a multi-step form would be best, until I realized how long it would be...What's better, an 15-step form or a long form with three sections? Usability tests and surveys best way to find out.

User-centered design not only improves your users experience but can also increase trust in your brand or product. More changes I would love to make, but I need to understand the users better. In the next article, I put my theories to the test and conduct user research (blog-survey on type of form format  preferred) to see what type of form would be best for workers.


Do your forms need a little help to be more accessible, usable and secure? Let's chat!
