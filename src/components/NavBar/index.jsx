import {Container} from './style';
import avatar from '../../assets/logo.png';
import CenterNavBar from './CenterNavBar';
export default function NavBar({sidebarOpen,openSideBar}){
    return(
        <Container>
            <div className="navbar_icon" onClick={() => openSideBar()}>
                <i className="fas fa-bars" aria-hidden="true"/>
            </div>

            <div className="navbar_left">
                <a href="/#">Produtos</a>
                <a href="/#">Usuários</a>
                <a href="/#" className="active_link">Admin</a>
            </div>
            
            <div className="navbar_center">
                    <CenterNavBar/>
            </div>
            
            <div className="navbar_right">
                <a href="/#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="/#">
                    <i className="fa fa-clock"></i>
                </a>

                <a href="/#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </Container>
    )
};

