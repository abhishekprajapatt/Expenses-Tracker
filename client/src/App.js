import './App.css';
import Graph from './components/Graph';
function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <h1>Expense Tracker</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Graph/>
      </div>
    </div>
  );
}

export default App;
