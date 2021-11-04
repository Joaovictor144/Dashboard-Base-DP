import SidebarStyle from './style';
import logo from '../../assets/logo.png'

const SideBar = ({openSideBar,closeSideBar }) =>{
    return(
        <SidebarStyle >
            <div className={openSideBar ? "sideBar-responsive" : ""} id="sidebar">
                <div className="sidebar_title">
                    <div className="sidebar_img">
                        <img src={logo} alt="logo"/>
                        <h1>Dashboard</h1>
                    </div>

                    <i 
                    onClick={()=> closeSideBar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                    ></i>
                </div>
                <div className="sidebar_menu">
                        <div className="sidebar_link active_menu_link">
                            <i className="fa fa-minus-square"></i>
                            <a href="#">Home</a>
                        </div>
                        <h2>ADMIN</h2>
                        <div className="sidebar_link">
                            <i className="fa fa-tachometer-alt"></i>
                            <a href="#">Área Administrativa</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-building"></i>
                            <a href="#">Lojas</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-archive"></i>
                            <a href="#">Produtos</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-bars"></i>
                            <a href="#">Categorias</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-utensils"></i>
                            <a href="#">Pedidos</a>
                        </div>
                        <h2>PESSOAS</h2>
                        <div className="sidebar_link">
                            <i className="fa fa-male"></i>
                            <a href="#">Administradores</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-user-circle"></i>
                            <a href="#">Usuarios</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-money-check-alt"></i>
                            <a href="#">Pagamentos</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-tasks"></i>
                            <a href="#">A plataforma</a>
                        </div>
                        <div className="sidebar_link">
                            <i className="fa fa-file-alt"></i>
                            <a href="#">Politica de privacidade</a>
                        </div>
                        <div className="sidebar_logout">
                            <i className="fa fa-power-off"></i>
                            <a href="#">Log out</a>
                        </div>
                </div>
            </div>
        </SidebarStyle>
        
    )
}

export default SideBar;