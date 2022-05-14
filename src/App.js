import './App.css';
import Joke from "./Jokes";
import jokesData from "./jokesData";

function App() {
  const jokesElem = jokesData.map(m => {
    return <li key={m.id}><Joke id={m.id} setup={m.setup} punchline={m.punchline} type={m.type} /> </li>
  })

  return (

    <div className="App">
      <ol>
        {jokesElem}
      </ol>
    </div>
  );
}

export default App;
