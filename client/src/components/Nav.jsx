import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import './styles/NavBar.css'



const Nav = ({ onSearch, logOut }) =>{

    // const handleLogOut = () => {
    //     setAccess(false)
    // }

    return(
        <nav id="navBar">
            <NavLink to={'/About'} className={'logOut'}>
                
                <button className='buttonNav'><span className="btn-text">About <i class="ph-bold ph-smiley-wink"></i></span></button>
            </NavLink>
            <NavLink to={'/home'} className={'logOut'}>
                <button className='buttonNav'><span className="btn-text">Home <i class="ph-bold ph-house-line"></i></span></button>
            </NavLink>
            <SearchBar className='navOnSearch' onSearch={onSearch}/>
            <NavLink to={'/favorites'} className={'logOut'}>
                <button className='buttonNav'><span className="btn-text">Favorites <i class="ph-bold ph-heart"></i></span></button>
            </NavLink>
            <NavLink to='/' className={'logOut'}>
            <button className='buttonNav' onClick={logOut}><span className="btn-text">Log Out <i class="ph-bold ph-sign-out"></i></span></button>
            </NavLink>
        </nav>
    )
}

export default Nav