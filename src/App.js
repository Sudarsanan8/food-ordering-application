

import './App.css';
import AllComponent from './AllComponent';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';



function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<AllComponent />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>

    </>
  );
}

export default App;
