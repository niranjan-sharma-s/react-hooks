//Class components are ES6 classes that extend the built-in Component class and can have state and lifecycle methods

import { Component } from "react";

class message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello world",
    };
  }

  componentDidMount() {
    /* ... */
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}


//Functional components are functions that accept arguments as the properties of the component and return valid JSX

const message = (props) => {
    return (
        <div>{props.message}</div>
    )
}


//useState

class App extends component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };s
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button type="button" onClick={this.incrementCount}>
                    Increment Count
                </button>
            </div>
        );
    }
}

const incrementFunc = () => {
    const [count , setCount ] = useState(0)

    return (
        <>
        {count}
        <button onClick={setCount(count+1)}>Increment</button>
        </>
    )
}

//useState() VS useReducer

/*When you have multiple hooks, which are interwoven, it is best to use the useReducer() hook. Its syntax is very similar to useState(), but you should only use the useState() hook when individual States do not affect each other.

With useState(), you use the state update function, which is the second value to update your state; with useReducer, you use the dispatch function and pass it an action (an object with at least a type property).*/

const [count , setCount] = useState(0)
const [increaseCount , dispatch] = React.useReducer(reducerFunc , initialValue, intiFunc)

dispatch({type:"increase"})