import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
