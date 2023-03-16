import './App.css';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/*'  element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
