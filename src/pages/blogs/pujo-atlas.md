---
layout: ../../layouts/BlogLayout.astro
title: 'Pujo Atlas'
description: 'A guide to building resilient open-source projects, balancing scalability, community, and future-proofing.'
pubDate: '3rd Nov, 2024'
heroImage: '/atlas.png'
author: 'wriddhi'
href: 'https://atlas.ourkolkata.in'
---

# Building Resilient Open-Source Projects: Lessons from Pujo Atlas and Beyond

In the world of open-source, maintaining a project with hundreds of thousands of users can be exhilarating yet challenging. With my experience contributing to and leading the development of Pujo Atlas—a popular project designed to map the iconic Durga Puja pandals of Kolkata—I’ve learned a lot about crafting resilient code, fostering community collaboration, and future-proofing development. Creating an open-source project that attracts thousands of users is thrilling—and challenging. With Pujo Atlas, our platform for exploring the best Durga Puja pandals in Kolkata, we’ve experienced firsthand what it means to scale and manage a high-traffic application. At peak times, our platform handles numbers that remind us of the scale and impact of this project: over **862k requests**, **107k visits**, and **138k page views**, consuming **20 GB of bandwidth** over a span of **5 days**. Today, I’ll share some insights from that journey, along with a few lessons on building sustainable open-source projects.

## 1. Designing for Scalability and Performance

One of the primary considerations for an app like Pujo Atlas, which handles high traffic around peak festival times, is scalability. Here’s a quick look at the strategies we used to ensure smooth performance even when thousands of users interact with the site simultaneously:

- **Efficient Data Fetching with React-Query**  
  Our project relies heavily on fetching real-time data, so using `react-query` was essential for managing these API calls efficiently. By setting smart caching policies and invalidation strategies, we were able to optimize network requests, minimizing the load on our servers and reducing wait times for end-users.

- **Custom Hooks for Flexible Data Retrieval**  
  We implemented custom hooks, like `useSearch`, that allow us to handle complex queries and manage loading states gracefully. This hook enables users to search for specific pandals based on a variety of attributes, like location and popularity, which enhances the search experience and reduces query time significantly.

- **Geo-Optimized Features**  
  With geolocation-based data like pandal locations, accuracy and speed are crucial. Using Haversine formula calculations, we ensure the app provides precise navigation. This approach also keeps our database queries optimized, as only relevant data is fetched when a user searches or scrolls through maps.

- **Trending Pandal Algorithm**
  We implemented a custom algorithm to calculate the trending pandals based on user visits and ratings. This feature not only showcases the most popular pandals but also helps give newer pandals visibility, encouraging users to explore different areas of the city. [Find out more about the algorithm here](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web#our-trending-pandals-algorithm).

## 2. Community Engagement: The Backbone of Open-Source

Maintaining a thriving open-source project requires more than just technical expertise. It’s about building a community. During Hacktoberfest, I mentored college students and contributors, helping them understand code quality and best practices. Here’s what I’ve found to be essential:

- **Creating Clear Documentation and Contribution Guidelines**  
  Good documentation empowers developers to contribute effectively. Our docs cover everything from setting up the project locally to coding standards and design patterns, making it easier for new contributors to get started.

- **Code Reviews and Feedback Loops**  
  Thoughtful code reviews ensure consistent quality across the project. I focus on guiding contributors through cohesive design patterns and ensuring they understand the "why" behind code choices. This approach not only improves their skills but also maintains codebase coherence.

- **Incentives and Gamification**  
  We built in features like visit tracking, streak badges, and a leaderboard, gamifying the Pujo Atlas experience. Not only did these elements enhance user engagement, but they also made contributors feel more connected to the project’s impact on the community.

## 3. Evolving Your Project: Balancing Innovation and Stability

In open-source, it’s easy to get carried away with new ideas and features. But it’s crucial to balance innovation with stability, especially as your project grows. For Pujo Atlas, this means carefully planning feature releases and setting up a robust deployment workflow.

- **Feature Branching and Workflow Automation**  
  We follow a structured GitHub workflow where feature branches are merged into a development branch, which then gets tested thoroughly before deployment to production. This structure allows us to safely test new features without impacting the main app, ensuring a stable user experience.

- **Release Cycles and User Feedback**  
  By implementing regular release cycles, we can introduce features gradually and gather user feedback to guide our next steps. For example, a recent update was driven by user requests for real-time Puja updates and emergency helpline access during the festival—features we now consider essential.

## 4. Future-Proofing Through Licensing and Legal Considerations

Recently, our team decided to transition from the MIT license to a new license that better protects our work as we formalize into a non-profit organization. Here’s what to consider when selecting a license:

- **Understand Your Project’s Goals**  
  The choice of license depends on the goals of your project. If you want broad adoption, a permissive license like MIT or Apache may be suitable. But if you want more control over how the code is used or distributed, consider a stronger copyleft license.

- **Consult Legal Experts**  
  As we began our journey to become a non-profit, we consulted legal experts to navigate potential licensing changes. This step is vital, as different licenses carry different obligations and protections, and it’s crucial to understand how they align with your project's mission.

## Final Thoughts

Working on Pujo Atlas has been a rewarding journey, not just as a developer but as a member of a thriving community. It has given me the chance to apply technical skills in real-world scenarios and engage with a passionate community.
For anyone starting an open-source project, remember: it’s a marathon, not a sprint. Build for scalability, foster a welcoming community, and always keep an eye on the future. In the end, it’s not just about code; it’s about creating something that others can learn from, build on, and truly value.
