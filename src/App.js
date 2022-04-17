import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './ComponentsFile/HeaderFile/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './ComponentsFile/AllPagesFile/HomeFile/Home';
import AboutMe from './ComponentsFile/AllPagesFile/AboutMeFile/AboutMe';
import Login from './ComponentsFile/AllPagesFile/LoginFIle/Login';
import Register from './ComponentsFile/AllPagesFile/RegisterFile/Register';
import NotFound from './ComponentsFile/NotFoundFIle/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
