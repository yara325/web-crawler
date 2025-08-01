import './App.css';
import Home from './pages/Home';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <Home />
    </div>
  )
}

export default App