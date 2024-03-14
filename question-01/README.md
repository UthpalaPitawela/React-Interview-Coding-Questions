# Question 01:  Pagination

## Overall Implementation Summary
- The following React concepts were used
    1. Props and States
    2. React Fragments
    3. Callback Props or Function Props: Passing a function as a callback from parent to child
    4. Add a key for each iteration when using map function: To avoid unnecessary re-renders in react
    5. Write the onClick function as onClick={()=> chanegCurrentPage(pageNumber)} instead of onClick={chanegCurrentPage(pageNumber)} to trigger the event only in a button click and avoid unnecessary rendering.
    6. Implemented async functions inside useEffect hook.
- Used react-bootatrap pagination to implement pagination UI components
- Used the [{JSON} Placeholder free API endpoint](https://jsonplaceholder.typicode.com/) to retrieve user details.

## How to run 

1. ``` npm install ```
2. ``` npm start ```
   
