import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

function DropDownMenu(){

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState();
  
    function calcHeight (el) {
      const height = el.offsetHeight;
      setMenuHeight(height+30)
    }
  
    function DropDownItem(props) {
      return(
        <a href='#' className='menu-item' onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className='icon-button'>{props.leftIcon}</span>
          {props.children}
          <span className='icon-right'>{props.rightIcon}</span>
        </a>
      );
    }
  
    return(
      <div className='dropdown' style={{height:menuHeight}}>
        <CSSTransition 
          in={activeMenu==='main'} 
          unmountOnExit 
          timeout={500}
          classNames='menu-primary'
          onEnter={calcHeight}
          >
            <div className='menu'>
              <DropDownItem
                leftIcon='😃'
                >
                  My Profile
              </DropDownItem>
              <DropDownItem
                leftIcon='📃'
                rightIcon='▶️'
                goToMenu='settings'
                >
                  Settings
              </DropDownItem>
            </div>
        </CSSTransition>
  
        <CSSTransition 
          in={activeMenu==='settings'} 
          unmountOnExit 
          timeout={500}
          classNames='menu-secondary'
          onEnter={calcHeight}
          >
            <div className='menu'>
              <DropDownItem
                leftIcon='◀️'
                goToMenu='main'
                >
                  Settings
              </DropDownItem>
              <DropDownItem
                leftIcon='🌍'>
                Wait...
              </DropDownItem>
              <DropDownItem
                leftIcon='👩‍🚀'>
                  They're all phony?
              </DropDownItem>
              <DropDownItem 
                leftIcon='💀'
                rightIcon = '🔫👨‍🚀'
                goToMenu = 'main'
                >
                  ...Always have been...
              </DropDownItem>
            </div>
        </CSSTransition>
      </div>
    );
  }

export default DropDownMenu