import React, { useContext } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from 'react-icons/md';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom'
// import { GlobalState } from '../../GlobalState';
import axios from 'axios';

const Header = () => {


    const logoutUser = async() => {

    }

    const adminRouter = ()=>{
        return(
            <>
            <li><Link to='/create_product'>Create Product</Link></li>
            <li><Link to='/category'>Categories </Link></li>
            </>
        )
    }

    const loggedRouter = ()=>{
        return(
            <>
            <li><Link to='/history'>History</Link></li>
            <li><Link to='/' onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }

  return (
    <div></div>
    // <header>
    //     <div className='menu'>
    //         <MdOutlineMenu size={30}/>
    //     </div>

    //     <div className='logo'>
    //         <h1>
    //             {/* <Link to="/">{isAdmin?'Admin':'30DC Shop'}</Link> */}
    //         </h1>
    //     </div>

    //     <ul>
    //         <li><Link to="/">{isAdmin?'Products':'Shop'}</Link></li>

    //         {isAdmin && adminRouter()}
    //         {
    //             isLogged ? loggedRouter() : <li><Link to="/login">Login or Register</Link></li>
    //         }
            


    //         <li>
    //             <MdClose size={30} className='menu'/>
    //         </li>
    //     </ul>

    //     {
    //         isAdmin ? '' : <div className='cart-icon'>
    //         <span>{cart.length}</span>
    //         <Link to='/cart'><MdOutlineAddShoppingCart size={30}/></Link>
    //     </div>
    //     }

        

    // </header>
  )
}

export default Header
