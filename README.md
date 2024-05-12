# React Simple Task Management Project

## Overview
This project is a React application that demonstrates the use of various concepts such as State, Props, Portals, Refs, Component creation, and Props handling.

## Table of Contents
- [Installation](#installation)
- [React Components Introduction](#components)
- [Key Concepts](#keyConceipt)
  - [State](#state)
  - [Props](#props)
  - [Portals](#portals)
  - [Refs](#refs)
- [Contributing](#contributing)
- [License](#license)

## Installation
To run this project locally, follow these steps:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/akterbd/react-simple-task-management.git
2. Install npm
   ```bash
   npm install
3. npm run dev

## React Components Introduction

# What are React Components?
In React, components are the building blocks of UI. They are reusable, independent, and encapsulated pieces of code that describe a part of the user interface. React applications are typically composed of multiple components that work together to create the overall UI.

# Types of Components
1. Functional Components
Functional components are JavaScript functions that accept props (short for "properties") as input and return React elements describing what should appear on the screen. They are also known as stateless components because they don't have their own state. However, with the introduction of hooks, functional components can now have state and other features previously limited to class components.

Example:

jsx
Copy code
```
const WelcomeMessage = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```
2. Class Components
Class components are ES6 classes that extend from React.Component and have their own internal state. They have a render() method that returns a React element, describing what should be rendered on the screen. Class components are often used when the component needs to have its own state or lifecycle methods.

Example:
jsx
Copy code
```
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
3. Pure Components
Pure components are similar to functional components but have built-in optimizations. They perform a shallow comparison of props and state to determine if the component needs to re-render. If the props and state haven't changed, the component won't re-render, improving performance.

Example:

jsx
Copy code
```
class PureCounter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
## Key Concepts
# Props
Props are read-only inputs to a component that are passed from its parent. They allow data to be passed down the component tree.

# State
State represents the internal state of a component and can be changed over time. State allows components to manage their data and re-render when necessary.

# Lifecycle Methods
Lifecycle methods are special methods that are automatically invoked at specific points in a component's lifecycle, such as when it is mounted, updated, or unmounted.

# Key
The key prop is used to uniquely identify elements in a list. It helps React identify which items have changed, are added, or are removed.

# Conclusion
Understanding React components is essential for building React applications. By mastering components, you can create reusable, modular, and efficient UIs that are easy to maintain and scale.
