import './App.css';
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">User List</h1> {/* Keep title here */}
        <PersonList />
      </header>
    </div>
  );
}

export default App;