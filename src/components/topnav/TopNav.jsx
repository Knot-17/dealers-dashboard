import React,{useEffect,useState} from 'react'
import DropDown from '../dropdown/DropDown'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/tuat.png'
import user_menu from '../../assets/JsonData/user_menus.json'

import axios from 'axios';

import './topnav.css'

import {Link} from 'react-router-dom'


const curr_user ={
    image:user_image
}

// const ref = firestore.collection("notificaation");
// console.log(ref);

const renderNotificationItem =(item,index) =>(
    <div className='notification-item' key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle =(user) =>
    (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user_image} alt=""/>
        </div>
        <div className="topnav__right-user__name">
            {user.username}
        </div>
    </div>
    )
const handleLogout = () => {
    // delete table api
    axios.delete(`http://localhost:5000/api/v1/deleteAllrows`)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    

    localStorage.clear();
    window.location.href = "http://localhost:3000/signin";
}

const renderUserMenu=(item,index) =>(
        <Link to={item.route} key={index}>
            { item.content !== 'Logout' ? <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div> : <div className="notification-item" onClick={handleLogout}>
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>}
            
            
        </Link>
    )


const TopNav = () => {

  
    const [dealer, setDealer] = useState('');
    
    useEffect(() =>{
        axios.get(`http://localhost:5000/api/v1/getDealer/${localStorage.getItem('id')}`)
            .then((res) => {
              setDealer(res.data[0]);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
                });},[]);

    localStorage.setItem('dealersID',dealer.id);
    localStorage.setItem('services',dealer.services);
    localStorage.setItem('username',dealer.username);
    return (
        <div className='topnav'>
             <div className="topnav__search">
                 <input type="text" placeholder="Search here..."/>
                 <i className='bx bx-search'></i>
             </div>
             <div className="topnav__right">
                 <div className="topnav__right-item">
                     {}
                     <DropDown
                        customToggle={() => renderUserToggle(dealer) }
                        contentData={user_menu}
                        renderItems={(item,index) => renderUserMenu(item,index)}
                     />
                 </div>
                 <div className="topnav__right-item">
                     {}
                     <DropDown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item,index) => renderNotificationItem(item,index)}
                        renderFooter={()=><Link to='/'>View All</Link>}
                     />

                 </div>
                 
             </div>
        </div>
    )
}

export default TopNav
