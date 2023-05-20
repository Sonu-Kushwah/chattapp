import { BrowserRouter, Routes,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './component/LoginPage';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} ></Route>
      <Route path='/SignUp' element={<SignUp/>} ></Route>
      <Route path='/Dashboard' element={<Dashboard/>} ></Route>
    </Routes>
    </BrowserRouter>   
    </>
  );
}

export default App;
