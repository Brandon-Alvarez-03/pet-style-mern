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

## Overview (Erin)

## Team Members (Sandy)

-
-
-
-
-

## Data Schema (Sandy and Gary)

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

## Component Hierarchy (Caprice)

https://whimsical.com/everfree-P4dkTQB4sykQrTkRmoBqX9

![Screen Shot 2021-11-12 at 1 50 41 PM](https://user-images.githubusercontent.com/90531123/141532906-6f8046d3-b26d-4457-921f-234126942273.png)

## Wireframes & Branding (Caprice)

https://www.figma.com/file/cMLvn51ilzBYvskQ4NLJSR/EverFree-Outdoors?node-id=0%3A1

![Screen Shot 2021-11-12 at 1 17 04 PM](https://user-images.githubusercontent.com/90531123/141529286-a175ae3c-1e1a-469b-8158-86de37ed976b.png)

![Screen Shot 2021-11-12 at 2 30 20 PM](https://user-images.githubusercontent.com/90531123/141536904-64191867-03b6-4d4b-a387-c8ba05fbf0a3.png)

## Team Expectations (Erin)

[Team Expectations](https://docs.google.com/document/d/1cJsnRTeMD8zwStb7M6jFdcLx1ro5UoGyzrmQ1iOCzB0/edit?usp=sharing)

[Project Management](https://app.asana.com/0/1201354529674099/timeline)

![tasks](https://user-images.githubusercontent.com/90531123/142075504-b77ae438-4cd6-4c40-a0d0-ef6a8c1d6867.jpg)

## MVP GOALS (Brandon)

- Use MongoDB and Express to create the back-end
- Use React to create the front-end
  - Use multiple functional components
- Give user capability for full CRUD (products for MVP, see post-MVP... preferred CRUD demonstration)
- Deploy to Heroku and Netlify
- Authorization and Authentication (user sign in and sign up)
- CSS styling to match wireframe and branding
  - Include media queries

## POST MVP GOALS (Brandon)

- Add user capability to review products (with full CRUD capability)
- Loading animation on home page
- Ability to edit a user profile

## Project Schedule (Brandon)

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
