import styled from 'styled-components';

const SidebarStyle = styled.div`
    #sidebar{
        background: #020509;
        grid-area: sidebar;
        overflow-y:auto;
        padding:20px;
        -webkit-transition:all 0.5s;
        transition:alt 0.5s;
    }
    .sidebar_title{
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#f3f4f6;
        margin-bottom: 30px;
    }
    .sidebar_img{
        display:flex;
        align-items: center;
    }
    .sidebar_img >div>img{
        width: 55px;
        object-fit:contain ;
        border-radius:50%;
    }
    .sidebar_title > div >h1{
        font-size:18px;
        display:inline;
        margin-left:15px;

    }
    .sidebar_title> i{
        font-size:18px;
        display:none;
    }
    .sidebar_menu > h2{
        color:#3ea175;
        font-size:16px;
        margin-top:15px;
        margin-bottom:5px;
        padding:0 10px;
        font-weight: 700;
    }
    .sidebar_link{
        color:#f3f4f6;
        padding:10px;
        border-radius: 3px;
        margin-bottom: 5px;
    }
    .active_menu_link{
        background: rgba(62,161,117,0.3);
        color:#3ea175;
    }
    .active_menu_link a {
        color:#3ea175 !important;

    }
    .sidebar_link > a{
        text-decoration:none;
        color: #a5aaad;
        font-weight: 700;
    }
    .sidebar_link a:focus{
        padding: 7px;
        background:rgba(62,161,117,0.3) ;
        border-radius:3px;
    }
    .sidebar_link i{
        margin-right: 10px;
        font-size:18px;

    }
    .sidebar_logout{
        margin-top:20px;
        padding:10px;
        color:#e65061;

    }
    .sidebar_logout >a{
        text-decoration:none;
        color:#e65061;
        font-weight: 700;
        text-transform: uppercase;
    }
    .sidebar_responsive{
        
    }
`;

export default SidebarStyle;