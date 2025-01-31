# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite loop due to an incorrect dependency array. The component tries to update the state within the useEffect causing continuous rerenders.  The solution provides a corrected implementation.

## Bug Description:
The bug is located in `bug.js`. The `useEffect` hook updates the `count` state within its own execution, creating a never-ending loop of updates.  This leads to a crashing application or freezes the browser tab.

## Solution:
The solution, located in `bugSolution.js`, demonstrates how to correctly specify the dependency array to prevent this infinite loop. By removing `count` from the dependency array, the useEffect runs only after the initial render.