import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import Main from "./Main"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Weather/>} />
          <Route path="/Main/:city" element={<Main/>} />
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
