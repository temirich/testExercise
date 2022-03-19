import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu.jsx'
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './components/mainWindow/main-container';
import NewsContainer from './components/news/news-container';
import ProfileContainer from './components/profile/profile-container';
import AuthorizationContainer from './components/authorization/authorization-container';
import MenuContainer from './components/menu/menu-container';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <div className='InformationBlock'>
          <MenuContainer />
          <Routes >
            <Route path="/Authorization" element={<AuthorizationContainer />} />
            <Route path="/Main" element={<MainContainer />} />
            <Route path="/News" element={<NewsContainer />} />
            <Route path="/Profile" element={<ProfileContainer />} />
          
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
