import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Notes from './screens/notes/Notes';
import NotFound from './screens/404/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Navigate to="/notes" />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
