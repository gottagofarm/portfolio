import React, { useState } from 'react'

function NavItem(props){
    const [open,setOpen] = useState(false);
    const ref = (props.href || "#")

    return(
        <li className='nav-item'>
            <a href={ref} className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

export default NavItem