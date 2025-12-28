import Mainpage from './MainPage.jsx'
import FaqAccordion from './faq-accordion/faqaccordion.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav><Link to="/frontend_challenges/">Home</Link></nav>
        <Routes>
          <Route path="/frontend_challenges/" element={<Mainpage/>}></Route>
          <Route path="/frontend_challenges/faq-accordion/" element={<FaqAccordion/>}></Route>
          <Route path="*" element={
              <>
              <h1>lost bud?</h1> <Link to="/frontend_challenges/">home</Link>
              </>
            }></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
