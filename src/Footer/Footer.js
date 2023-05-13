import React from 'react';


function Footer () {
    const handleClick =  () => {
        window.scrollTo({
            top:'0',
            behavior:'smooth',
        });
    };
    return(
    <nav className='navbar'>
        <ul className='navbar-left'>
            <a href="javascript:void(0);" className='icon-button' onClick={handleClick}>🔼</a>
            <a href="javascript:void(0);" onClick={handleClick} style={{color:'white'}}>Return to top of page</a>
        </ul>
    </nav>
    );
}

export default Footer