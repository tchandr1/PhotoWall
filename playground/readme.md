 Here's a list of some common lifecycle methods used in React. 
quick definition before we start with the methods:

side-effect: modifying the state of something else outside of its scope. We'll consider asynchronous calls a side effect, because they will change the state in some way. 

The following methods are called when a component is being added to the DOM:

constructor() : called before component is mounted. NEVER put side effect code inside of the constructor. Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods. 

componentWillMount(): invoked immediately before mounting occurs. Called before render. Once again, DO NOT put any side effect code inside of componentWillMount, and do not make API calls in this method  

render(): never fetch data inside of render. Should only be used to return elements.

componentDidMount(): Perfect place to fetch data. It gets called after render. This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render. This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
The following methods are called when a component is re-rendered to the DOM

componentDidUpdate(): called when the state of a component changes. Perfect place to update UI or make network calls based on previous state before update, and current state 