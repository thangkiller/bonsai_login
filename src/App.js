import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import LoginPage from '~/pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage className={GlobalStyles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
