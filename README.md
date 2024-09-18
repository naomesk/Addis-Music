# Addis-Music
Full stack application for viewing, creating, updating, and deleting songs. 

# Software Setup

## Next.js (React-based framework)
* To create a new project: `npx create-next-app@latest`
* After running the line above, you will be asked multiple questions about the project you are creating. One of the questions will be the type of routing you choose. There are two types of routers: App Router and Pages Router. Both use file-system based routing. 
* App Router: creates an app folder that contains two files.
    * layout.tsx: 
    * page.tsx: will be rendered whenever the user visits the root of your app.
* Pages Router: creates a pages folder that contains two files:
    * index.tsx: for the homepage.
    * _app.tsx: for the global layout.
* You may create a `public` folder to store assets like images and fonts. 
* To start the developer server: `npm run dev`
* Your website will be hosted live on `https://localhost:3000`

## Redux (State management)
* To install react binded redux: `npm install react-redux`
* To install redux toolkit: `npm install @redux/toolkit`
### Redux Terminologies
* **Actions**: functions that create and return an action object(event).
    * `const actionCreatorName = () => ({type:"domain/eventName", payload:"anything extra"});`
* **Reducers**: functions that receive the current state and action then decide how to update the state if necessary in an immutable way. 
    * `const function reducerName(state, action){    }`
* **Store**
* **Dispatch**
* **Selector**
* **Provider**
* **Hooks**
