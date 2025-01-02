import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import UserForm from './Components/UserForm';
import TableData from './Components/TableData';
import APIData from './Components/APIData';

function App() {
  return (
    // <div className="App">
    // <Home name={"ABC"} age={20} />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<UserForm />} />
        <Route path={"/edit/:id"} element={<UserForm />} />
        <Route path={"/table"} element={<TableData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
