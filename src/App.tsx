import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardX, CardY, ClickJacking } from './pages';

function App() {
  const currentHostname = window.location.hostname;

  return (
    <BrowserRouter>
      <Routes>
        {currentHostname === 'w15sh-fe.netlify.app' && (
          <Route path='/' element={<CardX />} />
        )}
         {currentHostname === 'w15fe.roozone.site' && (
          <Route path='/' element={<CardY />} />
         )}
          <Route path='/clickjacking' element={<ClickJacking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
