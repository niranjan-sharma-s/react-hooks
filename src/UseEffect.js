/* useEffect() hook accepts 2 arguments:
callback is a function that contains the side-effect logic. callback is executed right after the DOM update.
dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
 */

import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}

//Componentdidmount : Use an empty dependencies array to invoke a side-effect once after component mounting:

import { useEffect } from "react";

function Greet({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    // Runs once, after mounting
    document.title = "Greetings page";
  }, []);

  return <div>{message}</div>;
}

//Component did update Each time the side-effect uses props or state values, you must indicate these values as dependencies:

import { useEffect } from "react";

function MyComponent({ prop }) {
  useEffect(() => {
    /* .... */
  }, [prop, state]);

  return <div>/* ..... */ </div>;
}

//ComponentUnMount : using cleanup function

import { useEffect } from "react";

function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);

  return <div>I'm logging to console "{message}"</div>;
}
