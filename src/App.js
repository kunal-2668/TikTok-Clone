import './App.css';
import {Home,Footer} from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './Search';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
