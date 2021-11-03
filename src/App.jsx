import {GlobalStyle} from './styles/global';
import {Container} from './styles/main';
import {useState} from 'react';
import SideBar from './components/SideBar'
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSideBar = () =>{
    setSidebarOpen(true)
  }
  const closeSideBar = () =>{
    setSidebarOpen(false)
  }
  return (
    <Container>
        <GlobalStyle/>
        <SideBar openSideBar={openSideBar} closeSideBar={closeSideBar}/>
    </Container>
  );
}

export default App;
