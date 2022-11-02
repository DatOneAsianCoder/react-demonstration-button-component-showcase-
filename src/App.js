import logo from './logo.svg';
import './App.css';
import { Button } from './components/button.jsx' //import statement for custom button component

function App() {

  const helloWorld = () => {
    alert("Hello World from Korea!");
  }
  //One way to declare a function (what most react devs use)
  //React native also uses this exact syntax!

  function sayHelloWorld() {
    alert("Hello World From Japan!");
  }
  //Another way to declare a function
  //Because React runs off JS is the reason why this also works -Mr. Cortez

  return (
    <div className="App">
      <button onClick={() => helloWorld()} style={{flex: 1}}>Click me!</button>
      {/* Stock Button React gives you */}

      <Button onClick={() => helloWorld()} buttonStyle="btn--primary--outline" style={{flex: 2}}>No, Click Me!</Button>
      {/* Custom Button Component! */}
    </div>
  );
}

export default App;

// Happy React Dev!
