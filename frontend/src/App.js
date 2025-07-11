
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import UrlList from './components/UrlList';
import UrlDetails from './components/UrlDetailes';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<UrlList />} />
        <Route path="/details/:urlId" element={<UrlDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
