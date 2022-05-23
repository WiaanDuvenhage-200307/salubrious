import Nav from "./components/UI Components/Nav";
import {Routes, Route} from 'react-router-dom';
import Appointments from "./components/pages/Appointments";
import Patients from "./components/pages/Patients";
import Doctors from "./components/pages/Doctors";
import RegisterAndSignUp from "./components/pages/RegisterAndSignUp";


function App() {
  return (
    <div className="App">
    <RegisterAndSignUp/>
    <Nav />
    <Routes>
        <Route path='/Appointments' element = {<Appointments/>}></Route>
        <Route path='/Patients' element = {<Patients/>}></Route>
        <Route path='/Doctors' element = {<Doctors/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
