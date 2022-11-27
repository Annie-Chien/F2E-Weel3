// Global Styles
import GlobalStyle from './shared/GlobalStyle';
// React Router
import { Routes, Route } from 'react-router-dom';
// React Components
import HomePage from './pages/HomePage/HomePage';
import Step1 from './pages/Step1/Step1';
import Step2 from './pages/Step2/Step2';
import Step3 from './pages/Step3/Step3';
import Step4 from './pages/Step4/Step4';
import Step5 from './pages/Step5/Step5';
import Footer from './components/Footer/Footer';
import FinishPage from './pages/FinishPage/FinishPage';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Layout from './components/Layout/Layout';

//================================================//

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ProgressBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/finish" element={<FinishPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
