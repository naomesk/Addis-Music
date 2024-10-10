# Addis-Music
Full stack application for viewing, creating, updating, and deleting songs. 

# Software Setup

## Next.js (React-based framework)
* To create a new project: `npx create-next-app@latest`
* After running the line above, you will be asked multiple questions about the project you are creating. One of the questions will be the type of routing you choose. There are two types of routers: App Router and Pages Router. Both use file-system based routing. 
* App Router: creates an app folder that contains two files.
    * `layout.tsx`: for global layout. 
    * `page.tsx`: will be rendered whenever the user visits the root of your app.
* Pages Router: creates a pages folder that contains two files:
    * `index.tsx`: for the homepage.
    * `_app.tsx`: for the global layout.
* You may create a `public` folder to store assets like images and fonts. 
* To start the developer server: `npm run dev`
* Your website will be hosted live on `https://localhost:3000`

 ```
  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.
```

## Redux (State management)
### Installations
* To install react binded redux: `npm install react-redux`
* To install redux toolkit: `npm install @redux/toolkit`
* To install redux saga: `npm install redux-saga`
### Redux Terminologies
* **Actions**: functions that create and return an action object(event).
    * `const actionCreatorName = () => ({type:"domain/eventName", payload:"anything extra"});`
* **Reducers**: functions that receive the current state and action then decide how to update the state if necessary in an immutable way.

  ```
  const reducerName = (state, action) => {
            ... //copies state and updates it if necessary
            if action changes state:
              return updatedState
           else:
              return state
  };
  ```
* **Store**: home of the redux app state created by passing in a reducer.
   * `const store = createStore(reducer, applyMiddleware(sagaMiddleware);`
* **Dispatch**: used to update state by triggering an action.
   * `store.dispatch({type: "domainName/eventName"});` 
* **Selector**: function that extracts specific information from the state.
   * `const selectorName = (state) => state.attribute;`
* **Provider**: makes redux store available to the rest of the application.
   * ```html
     <Provider store={store}>
        <App/>
     </Provider>
     ``` 
* **Hooks**: there are two ready to use hooks made for react-redux.
   * `useSelector`: reads store state and subscribes to updates.
   * `useDispatch`: returns store's dispatch methods...
### How it works
* Redux store is created via the root reducer, then it renders the initial state.
* When something happens on the application, some event, an action gets dispatched and a reducer listens to that.
* The reducer then uses the current state and action to determine whether the state should be updated or not and the store handles the updating.
* Saga is a middleware that needs to be imported and applied as a middleware when store is created.
* It makes application side effects like asynchronus stuf easier to manage by creating an easily testable asynchrnus flow.

## Styled-components (component style modifier)
* Helps create custom styled components.
* To instal: `npminstal styled-components`, then import `styled` from `styled-components`.
* Syntax:
    ```
    const MyStyle = styled <componentName><$propName?:propType>`
    //preferred styling instructions
    background: ${props=>props.$propName? "val1":"val2"};
    font-color: "Red";
    ...
    `;
    ```
## Emotion JS (CSS JS integration)
* To install: `npm install @emotion/react`
* Helps making CSS easier to add to a js project to create dynamic styles.
* You can install additional plugins for testing and optimizing:
   * Babel: `npm install --save-dev @emotion/babel-plugin`
   * Jest: `npm install --save-dev @emotion/jest`   

## Vercel (Deployment)
* You need to create and account or login before first using.
* Then once you see your dashboard, install Vercel on the select repository.
* Import selected respoistory and configure certain settings before hitting the deploy button and being transfered to the deploying dashboard where you can manage the deployed application.
* Next.js and React are frameworks supported by Vercel. 
