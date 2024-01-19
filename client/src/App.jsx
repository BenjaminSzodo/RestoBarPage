import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import AdminPage from './components/AdminPage/AdminPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;


