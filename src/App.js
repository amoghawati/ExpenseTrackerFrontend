import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Router from './components/router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/expenses/*" element={<Router />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
