# My NBA Teams Web App
This project is a sample application that utilizes **Next.js**, **TypeScript**, and **TailwindCSS** to build a web app that allows a user to view NBA teams, players, and game stats from a centralized dashboard type experience. 

###### WIP
- This project is a work in progress so all features haven't been implemented yet

# Demo
View a live version of this site [here](https://my-nba-web-app.vercel.app/)

# Motivation
The motivation behind this project was to implement Next.js and TypeScript without using a guided tutorial. By doing so, I've been able to figure out the different caveats and gotchas of Next.js and TypeScript while developing the project.

# Styling
For styling, I opted for [TailwindCSS](https://tailwindcss.com/). Because of this, there are currently no global css files or modules in the project

# SSG vs SSR
Currently, the home page that displays all NBA teams utilizes Next's Static Site Generation feature via the `getStaticProps()` function. This is because NBA teams are pretty consistent, so this data won't be changing much - thus allowing for data fetching at build time. For other data such as player information and game stats, this will probably be rendered on the server since this data will probably update more frequently

# API
This project utilizes an open source REST API called [BallDontLie](https://www.balldontlie.io/#introduction) to access NBA data

# Built With
- Next.js
- TypeScript
- TailwindCSS
- Axios

# To-do
() Implement Route for Individual Teams
(X) Implement Navbar
() Implement Game Stats Dashboard
() Implement Route for Players
() Add Top Games section to home page hero
