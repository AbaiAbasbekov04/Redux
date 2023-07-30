import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import UserRegister from './pages/usersPage/UsersRegister';
import Menu from './components/Menu';
import UsersListPage from './pages/usersListPage/UsersListPage';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
        <Route index element={<UserRegister/>}></Route>
        <Route path={'/users'} element={<UsersListPage/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}
export default App;
