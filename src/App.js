import Nav from "./components/UI Components/Nav";
import {Routes, Route} from 'react-router-dom';
import Appointments from './components/Appointments';
import Patients from './components/Patients';
import Doctors from './components/Doctors';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element = {<Appointments/>}></Route>
        <Route path='/Patients' element = {<Patients/>}></Route>
        <Route path='/Doctors' element = {<Doctors/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
