import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Create from './component/Create';
import Read from './component/Read';
import Edit from './component/Edit';
function App() {
  return (
    <div className="container">
    <Routes>
     <Route exact path='/' element={<Read/>}></Route>
     <Route exact path='/create' element={<Create/>}></Route>
     <Route exact path='/edit' element={<Edit/>}></Route>
    </Routes>
    {/* <Create/> */}

  </div>
  );
}

export default App;
