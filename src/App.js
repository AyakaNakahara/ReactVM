import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <>
      <Sidebar />
      <div className='container'>
        <Header />
        <Routes>
          {routes.inside.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={route.component}
            />
          ))}
          {routes.outside.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={route.component}
            />
          ))}
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
