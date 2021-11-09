import {GlobalStyle} from './styles/global';
import {Container} from './styles/main';
import {useState} from 'react';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSideBar = () => {
    setSidebarOpen(true);
  };
  const closeSideBar = () => {
    setSidebarOpen(false);
  };
  return (
    <Container>
      <GlobalStyle />
      <SideBar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
      <NavBar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />
    </Container>
  );
};

