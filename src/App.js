import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Data from './Data';

const data = Data.map(item =>{
          return (
          <Card 
          key = {item.id}
          item = {item}
          />
          )
})
/*export default function  App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
export default function App(){
  return (
    <div>
    <Header/>
    {data}
  
    </div>
  )
}


