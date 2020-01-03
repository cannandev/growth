---
layout: post
title:  "Why Content Management Matters"
background: "https://picsum.photos/id/237/1600/700"
thumbnail: "https://picsum.photos/id/237/350/250"
tags: [ux, ui, cms]
category: ["Fireside Chats"]
---
This article is the first in a series about content management systems from a UX lens. When we talk about user-centered design, who is the user? Keep reading to discover more.

##Content is King
The first time I heard the phrase "Content is King" was when I worked for [Allconnect](https://www.allconnect.com/about-us) as Senior Web Developer/Drupal Architect. I was in a small conference room, which looked more like a hipster lounge area with a white sofa and colorful pillows. It was during one of our team meetings reviewing SEO tactics. A recent site audit revealed that our local city pages were not getting nearly as many hits as our homepage and blog articles. Why were our numbers so low on these pages? According to the audit, the H1 titles on those pages were empty. How was that possible? I can see "Best Internet Service providers in Atlanta, GA" right in front of me!

The developer in me hand a hunch. Let's look under the hood. Right-click, view source...Yup, hunch confirmed. The previous developer used JavaScript to automatically generate the titles. But JS is a client-side language. When rendered, all the powerful GoogleBots read was `<h1>Best Internet Service providers in  .</h1>`

Even more horrifying, as the audit revealed, was that each page had the same block of text. Duplicate content, otherwise known as [article marketing](https://smartblogger.com/seo-mistakes/), makes the bots angry. Very angry. It can get your site blacklisted! No wonder when a user searched for "Best internet Atlanta," our page did not come up in Google's results.

"Well...Content is King," my boss then stated. My team mates all nodded their heads and shrugged their shoulders as if she'd said "Bread has slices." I suddenly felt as if I'd just missed a punchline. Wait, what does that mean "Content is King." And how does everyone know what that means? Like it was Monday morning and everyone in the breakroom was quoting the latest sketch from SNL that I missed that weekend.

I imagined the original developer for this page. Did he know that Content is King? Poor sap. He had no clue. It was probably a late Friday afternoon in India when an urgent JIRA ticket was assigned to him. "Need 20 city pages" was the title. A block of text crudely pasted in the description box from the project manager. What did he know about SEO and Google rankings. He had going home to his family on his mind. So he built that page the quickest way he knew how...

Come on, Annan. Get your head in the game. "We can resolve the content issue by creating a new template in Drupal for City landing pages." I suggested. "The template will include a field for the h1 title and body. Since the templates are in PHP, the content will be rendered server side, before the bots get to it. We just need to get the marketing team to write unique content." Crisis averted. Cheers from the conference room for the power of a content management system. Our UX Architect agreed to run tests to determine the most important cities we should cater to and work with the marketing team to craft unique content for those cities.

As we emerged victorious from the conference room back to our cubicles, that phrase still lingered in my head..."Content is king."

##Who said that anyway?
Turns out, Bill Gates coined the phrase when he wrote an essay entitled [*Content is king*](https://medium.com/@HeathEvans/content-is-king-essay-by-bill-gates-1996-df74552f80d9) in 1996. It's often quoted in search engine marketing and content marketing. Behind this is the idea that the content is what drives a product's success, be it a website or app.

##So if content is king, content managers are...
I don't know. I tried to thing of a swanky analogy, but came up empty. What I *do* know is that how content is managed and rendered is more and more important.

In this blog, I hope to explore the state of content management systems today, their future with the advent of serverless technology and the best ways to to build user-centered systems. After all, the point of UX is to build easy, efficient, relevant and pleasant experiences for the user. Let's tread our content administrators as kings

- statistics on CMS
- statistics on reacts and vue
- statistics on serverless (what's the other word?)



Is your content management system user-centered? Let's chat! Contact me for a free consultation.


As a developer for the past twenty years, I've crossed paths with every possible sector of Information Technology you can imagine. From data entry interns to DevOps engineers, they're are all concerned with one thing - data. Manipulation of data, data storage, data security. Since [content is contextualized data](https://thecontentwrangler.com/2016/01/25/the-difference-between-data-and-content-and-why-it-matters/),
