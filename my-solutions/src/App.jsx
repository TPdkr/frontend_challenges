import Mainpage from './mainpages/MainPage.jsx'
import FaqAccordion from './faq-accordion/faqaccordion.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './mainpages/errorpage.jsx';
import InputForm from './signup-form/inputform.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav><Link to="/frontend_challenges/">Home</Link></nav>
        <Routes>
          <Route path="/frontend_challenges/" element={<Mainpage/>}></Route>
          <Route path="/frontend_challenges/faq-accordion/" element={<FaqAccordion/>}></Route>
          <Route path="/frontend_challenges/input-form/" element={<InputForm/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
