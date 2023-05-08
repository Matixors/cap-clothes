import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component';
import Naigation from './components/routes/navigation/navigation.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Naigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
