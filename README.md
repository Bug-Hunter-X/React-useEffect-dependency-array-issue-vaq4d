# React useEffect Dependency Array Issue

This repository demonstrates a common error in React's `useEffect` hook: omitting necessary state variables from the dependency array.  This can lead to unexpected behavior, including the effect not running when expected or running unnecessarily.

## The Bug

The `bug.js` file contains a component with a `useEffect` hook that has an incorrect dependency array.  The effect is intended to log a message when the `count` state variable is greater than 0. However, due to the incorrect dependency array, the effect doesn't always run as expected.

## The Solution

The `bugSolution.js` file shows the corrected code. The dependency array now correctly includes `count`, ensuring that the effect runs whenever `count` changes.

## How to reproduce
1. Clone the repository
2. Navigate to the root folder of the repository
3. Install packages:
   ```bash
   npm install
   ```
4. Run:
   ```bash
   npm start
   ```