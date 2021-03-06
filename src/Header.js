import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import {BusinessCenter, Chat, Notifications, SupervisorAccountTwoTone } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function Header(){
    const dispatch = useDispatch();
    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="home"/>
                <HeaderOption Icon={SupervisorAccountTwoTone} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Chat} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar={true} title="me" onClick={logoutOfApp}/>
            </div>
        </div> 
    )
}

export default Header;