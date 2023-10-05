import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardX, CardY } from './pages';

function App() {
  const currentHostname = window.location.hostname;
  console.log(currentHostname)

  return (
    <BrowserRouter>
      <Routes>
        {currentHostname === 'w15sh-fe.netlify.app' && (
          <Route path='/' element={<CardX />} />
        )}
        {currentHostname === 'w15fe.roozone.site' && (
          <Route path='/' element={<CardY />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
