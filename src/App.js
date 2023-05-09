import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component';
import Naigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Naigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
