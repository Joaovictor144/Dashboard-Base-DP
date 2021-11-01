import {GlobalStyle} from './styles/global';
import {Container} from './styles/main';
import {useState} from 'react';
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
        <h1>hello</h1>
    </Container>
  );
}

export default App;
