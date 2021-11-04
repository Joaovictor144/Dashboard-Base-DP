import Container from './style'
function NavBar(){
    return(
        <Container>
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"/>
            </div>
        </Container>
    )
}

export default NavBar;