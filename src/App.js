import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ChangeTitle from "./components/changeTitle/ChangeTitle";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutPage />
      <ChangeTitle />
      <ContactsPage />
    </div>
  );
}

export default App;
