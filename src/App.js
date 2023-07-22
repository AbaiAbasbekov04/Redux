import './App.css';
import Calculator from './dz_2/calculate/Calculate';
import { Calculates } from './dz_2/calculate2/Calculates';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/mainPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className='App'>
      {/* <MainPage/>
      <AboutPage/>
      <UsersPage/> */}
      <Calculates/>
      <Calculator/>
    </div>
  );
}
export default App;
