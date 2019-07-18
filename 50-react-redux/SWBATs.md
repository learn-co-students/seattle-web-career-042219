## SWBATs for React-Redux Lecture

***

*_By the end of this lecture, you will know the basic functionality of mapping state and functions to a component's props via Redux._* 

- You must run `npm install` && `npm start` to get this application to run locally. 

### Roadmap to implementing Redux

- [x] Know a reducer's functionality. 
    - initializes state
    - dispatches the actions
- [x] Know an action's functionality.
    - returns a type
    - returns a payload
- Import functionality from `redux` node package module.
    - [x] Create a store for state variables, `createStore()`.
    - [x] Combine reducers into one parent directory, `combineReducers()`.
- Import functionality from `react-redux` node package module.
    - [x] Share the store's state with the entire application using `Provider`.
    - [x] Connect the component's state and props to the store using `connect`.
        - Share a component's initial state variables using `mapStateToProps`.
        - Share a component's actions using `mapDispatchToProps`.
