import logo from './logo.svg';
import Header from './components/Header';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          <Header />
          <div className="container">
              <Dashboard />
          </div>
          <hr />
      </div>
    </div>
  );
}

export default App;
