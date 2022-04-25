import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {DialogsProps} from '../../App';
//присваиваем 2 класса 1 дивке <div className={`${c.item} ${c.active}`}>


type NavbarPropsType= {
    dialogs: DialogsProps[]
}

const Navbar = (props: NavbarPropsType ) => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/dialogs' activeClassName={c.activeLink}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/music' activeClassName={c.activeLink}>Music</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to='/settings' activeClassName={c.activeLink}>Settings</NavLink>
        </div>
        <div className={c.friends}>
          <div>
              <NavLink to='/friends' activeClassName={c.activeLink}><b>Friends:</b></NavLink>
          </div>
            <div >
                <span><img className={c.img} src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"/></span ><span>{props.dialogs[0].name}</span><br/>
                <span><img className={c.img} src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"/></span><span>{props.dialogs[1].name}</span><br/>
                <span><img className={c.img} src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"/></span><span>{props.dialogs[2].name}</span><br/>
          </div>
        </div>
    </nav>
}

export default Navbar;