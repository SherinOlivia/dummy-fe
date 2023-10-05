import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardX, CardY } from './pages';

function App() {
  const currentHostname = window.location.hostname;

  return (
    <BrowserRouter>
      <Routes>
        {currentHostname === 'https://w15sh-fe.netlify.app' && (
          <Route path='/' element={<CardX />} />
        )}
        {currentHostname === 'https://w15fe.roozone.site' && (
          <Route path='/' element={<CardY />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
