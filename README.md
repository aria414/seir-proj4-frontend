# Project4 - LOTR POETRY

## Project Links

- [Frontend Repo Link](https://github.com/aria414/seir-proj4-frontend)
- [Backend Repo Link](https://github.com/aria414/seir-proj4-backend)
- [Netlify Link](https://seir04-lotrpoems.netlify.app/)
- [Heroku Link](https://lotrpoem-api.herokuapp.com/api/poem)

## Project Description

This website is for anyone who enjoys the poetry of the Lord of the Rings (as well as the series itself). I personally really appreciate the time and devotion Tolkien had in building this universe. Its elements and artistry is timeless. Since this website is heavily text based, I try to design it with more icons to accomodate the text. The poems will be accomodated with a background image from unsplash to illustrate the poems' contents.

The poems are found on [Tolkien Gateway's website](http://tolkiengateway.net/wiki/Poems_in_The_Lord_of_the_Rings)

## BACKEND TECH

The backend will be deployed on Heroku using php and laravel. It will be a simple API holding data for each poem.

**Poem Schema**

- Contains user info - first and last name, email, password
- User will reference the Budget model which contains their income and how much they are willing to spend.
- User will also reference a Transaction Model which contains details of what they spend money on.

```
Poem: {
    title: String,
    content: String,
    citation: String,
    comment: String, //Some comments left by the authors
    intextref: String, //Text from book that references the poem
    recitedby: String //Character whom recited the poem/song
    image: String // a background image to accompany the poem.
}
```

## User Stories

- Be able to see a list of all the poems in the main page
- Have a side menu that allows user to see the poems from each book
- Be able to add a poem to faves or add it to a collection ?

## Wireframes

- [WireFrame - All](https://drive.google.com/drive/folders/1wACumFdsFefyu15nwQ9fH9LVvlCAWUI3?usp=sharing)
- [React Architecture](https://docs.google.com/drawings/d/1w6gFNLqSF1zRtB3H0xO_nhYB9-gGHkPiYVYqv1_nVWQ/edit?usp=sharing)

## MVP

### Backend

- Backend Repo wth readme that describes backend.
- Planning Directory that has full backend/frontend planning.
  - Contains user stories, backend architecture, frontend architecture, and wireframes
- Use Laravel, PHP and MYSQL database.
- Create logically named routes/urls.
- Deployed via Heroku

### Frontend

- Frontend Repo with readme that describes frontend.
- Uses React App.
- React app leverages backend API information.
- Uses React Router to handle multiple views
- Communicate with backend DB using Fetch or Axios.
  - Communicate with fetch.
  - Render data to frontend.
- Contains project team page
- Be responsive (Mobile, Tablet, and Desktop).
- Deployed via Netlify

#### Post-MVP

- Collection page for organizing poems into collections. Can name the collections.
- Fave section to hold your fave poems.

## Front-End Pages and Components

Initial components decided for Project.

| Pages          |                                        Description                                         |
| -------------- | :----------------------------------------------------------------------------------------: |
| App.js         |                        Main page to store and render all components                        |
| AllPoems.js    |                                  Renders all of the poems                                  |
| PoemsByBook.js |                Render the poems by the book. This component will be reused.                |
| Poem.js        |                                   Shows the single poem                                    |
| Fave.js        |                       Section with all your favorite - Post MVPpoems                       |
| Collection.js  | Section with the poems organized in collections. Can give collection a name - for post MVP |
| About.js       |                                     About the app page                                     |
| Contact.js     |                                        Contact Page                                        |

| Components |                Description                 |
| ---------- | :----------------------------------------: |
| SideNav    |        Navigation Bar for the app.         |
| Footer     | Has footer icons and copyright disclaimers |
| Landing    |    Component rendered on landing page.     |

## MVP Time-Frames

| Task                                     | Priority | Estimated Time | Time Invested |
| ---------------------------------------- | :------: | :------------: | :-----------: |
| Create database/seed data                |    H     |     5 hrs      |      hrs      |
| Find images for each poem...             |    H     |     4 hrs      |      hrs      |
| Create routes/test                       |    H     |     2 hrs      |      hrs      |
| Create React Skeleton React Components   |    M     |     4 hrs      |      hrs      |
| React Routes/Paths linking to components |    H     |      2 hr      |      hr       |
| API fetch to grab data in React          |    L     |     0.5 hr     |      hrs      |
| Mobile Layouts                           |    H     |     6 hrs      |      hrs      |
| Tablet Layouts                           |    H     |     6 hrs      |      hrs      |
| Desktop Layouts                          |    H     |     8 hrs      |      hrs      |
| Total Time                               |    H     |    37.5 hrs    |      hrs      |

## Post MVP Time-Frames

| Task        | Priority | Estimated Time | Time Invested |
| ----------- | :------: | :------------: | :-----------: |
| Faves       |    H     |     4 hrs      |     0 hrs     |
| Collections |    H     |     6 hrs      |     0 hrs     |
| Total Time  |    H     |     10 hrs     |     0 hrs     |

## Additional Libraries

- React.js
- React-Router
- Laravel
- Bootstrap
