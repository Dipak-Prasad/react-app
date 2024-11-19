import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
         <Route path="/terms-conditions" element={<TermsConditions/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App