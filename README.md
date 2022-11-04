# Pet Style App

[Link to Back-End Repo](https://github.com/Brandon-Alvarez-03/pet-lyfe-backend)

## Placeholders

---

1. Overview
2. Link to API/Backend Repo
3. Meet the Team
4. Wireframing
5. Whimsical tools
6. Schemas
7. Link to PM Board
8. Explanation of App
9. Screenshots of App
10. CRUD breakdown
11. Tools, tech, and skills used
12. Add profile view counter

**Github Repo:**

**Railway:**

**Netlify:**

## Overview 

## Team Members

-
-
-
-
-

## Data Schema

Products:

```JSON
const Product = new Schema
(
  {
    name: {
      type: String,
      required: true
      },
    imgURL: {
      type: String,
      required: true
      },
    description: {
      type: String,
      required: true
      },
    type: {
      type: String,
      required: false
      },
    price: {
      type: String,
      required: true
      },
    featured: {
      type: Boolean,
      default: false
      }
  },
  { timestamps: true }
)
```

Users:

```JSON
 const User = new Schema  ({
   username: {
     type: String,
     required: true,
   },
   email: {
     type: String,
     required: true,
   },
   password_digest: {
     type: String,
     required: true,
     select: false
   },
   { timestamps: true }
 })

```

## Component Hierarchy
[Flow Chart](https://www.figma.com/file/YJa4nQJAdoLtJ89YgJ5VX4/Data-Flow?node-id=0%3A1)

![Flow Chart](./img/flowchart.png)

## Wireframes & Branding
[Wireframe](https://www.figma.com/file/AqD4o1McErCQNpwiEtu1LG/Untitled?node-id=0%3A1)
![Home and Item pages](./img/homeAndItems.png)
![Empty and Full Cart pages](./img/cart.png)


## Team Expectations 

[Team Expectations](https://docs.google.com/document/d/1cJsnRTeMD8zwStb7M6jFdcLx1ro5UoGyzrmQ1iOCzB0/edit?usp=sharing)

[Project Management](https://app.asana.com/0/1201354529674099/timeline)

![tasks](https://user-images.githubusercontent.com/90531123/142075504-b77ae438-4cd6-4c40-a0d0-ef6a8c1d6867.jpg)

## MVP GOALS 

- Use MongoDB and Express to create the back-end
- Use React to create the front-end
  - Use multiple functional components
- Give user capability for full CRUD (products for MVP, see post-MVP... preferred CRUD demonstration)
- Deploy to Heroku and Netlify
- Authorization and Authentication (user sign in and sign up)
- CSS styling to match wireframe and branding
  - Include media queries

## POST MVP GOALS 

- Add user capability to review products (with full CRUD capability)
- Loading animation on home page
- Ability to edit a user profile

## Project Schedule 

| Date   | Deliverable                                                                         |   Status   |
| :----- | :---------------------------------------------------------------------------------- | :--------: |
| Nov 3  | Project Team Building                                                               |  Complete  |
| Nov 4  | Wireframes + Final Project Approval                                                 |  Complete  |
| Nov 5  | Create Back-End (group code)                                                        |  Complete  |
| Nov 6  | Continue Back-End (group code) + Testing + Deploy Back-End                          |  Complete  |
| Nov 7  | Create React App + Test Components to Render / Assign Individual Tasks in Front-End | Incomplete |
| Nov 8  | Continue Working on React Front-End                                                 | Incomplete |
| Nov 9  | Working Prototype + Start CSS Styling                                               | Incomplete |
| Nov 10 | CSS Styling                                                                         | Incomplete |
