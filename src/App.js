import './App.css';
import ChangeTitle from './components/changeTitle/ChangeTitle';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import { Counter } from './pages/counter/Count';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <div className='App'>
      <MainPage/>
      <AboutPage/>
      <ChangeTitle/>
      <ContactsPage/>
      <Counter/>
    </div>
  );
}
export default App;
