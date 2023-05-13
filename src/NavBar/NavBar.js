import React from 'react';
import DropDownMenu from './DropDownMenu';
import NavItem from './NavItem';
import { useAlertContext } from '../context/alertContext';


function NavBar () {
    const { onOpen } = useAlertContext();

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
                element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    function handleBell(){
        /*onOpen('success','Your rang a bell! (It seems like it did something?)');*/
    }

    return(
    <nav className='navbar'>
        <ul className='navbar-left'>
            <NavItem icon='🔄' href='localhost:3000/'/>
        </ul>
        <ul className='navbar-right'>
            <a href="javascript:void(0);" onClick={handleClick('projects')} style={{color:'white'}}>
                Projects
            </a>
            <NavItem icon='➕'>
                <DropDownMenu></DropDownMenu>
            </NavItem>
            <NavItem icon='🔔' onClick={()=>handleBell}/>
            <NavItem icon='📱'/>
        </ul>
    </nav>
    );
}

export default NavBar