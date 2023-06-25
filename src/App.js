import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddContact from './componants/AddContact';
import Contact from './componants/Contact';
import ContactList from './componants/ContactList';
import Home from './componants/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}>
      <Route index element={<ContactList/>}/>
        <Route path="/add" element={<AddContact/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
      {/* <Contact/>
      <AddContact/>
      <ContactList/> */}
    </div>
  );
}

export default App;
