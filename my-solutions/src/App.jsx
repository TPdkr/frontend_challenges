import Mainpage from './MainPage.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>this is nav element</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/frontend_challenges/" element={<Mainpage/>}></Route>
          <Route path="/my-solutions/" element={<Mainpage/>}></Route>
          <Route path="*" element={
              <>
              <h1>lost bud?</h1> <Link to="/">home</Link>
              </>
            
            }></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
