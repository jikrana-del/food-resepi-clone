import { NavLink } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import logo from '../assets/logo.avif'
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Header() {
      const BagData = useSelector(store => store.adddelete.bag || []);
      const [LightDarkMode, setLightDarkMode] = useState(true);
      const HendelDarkMode = () => {
            console.log("dark Mode");
            setLightDarkMode(true)
            document.body.className = 'light'
      }
      const HendelLightMode = () => {
            console.log('Light Mode');
            setLightDarkMode(false)
            document.body.className = 'dark';
      }
      return (
            <>
                  <nav>
                        <div>
                              <NavLink className='logo'>
                                    <img src={logo} alt="" className='logo' />
                              </NavLink>
                        </div>
                        <div className='link show'>
                              <NavLink to='/'>Home</NavLink>
                              <NavLink to='/food'>Food</NavLink>
                              <NavLink to='/gallery'>Gallery</NavLink>
                              <NavLink to='/reviews'>Reviews</NavLink>

                        </div>
                        <div className='link '>
                              <div className='LightDark show'>{LightDarkMode ? <MdLightMode onClick={HendelLightMode} /> : <MdDarkMode onClick={HendelDarkMode} />} </div>
                              <button type="button" className="btn btn-primary position-relative">
                                    <NavLink className='icon bag-icon' to='/bag'><BsFillBagFill /></NavLink>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                          {BagData.length}
                                          <span class="visually-hidden">unread messages</span>
                                    </span>
                              </button>
                              <NavLink className='icon show' to='/person'><IoPersonOutline /></NavLink>
                              <NavLink className='icon' to='/sign'><button className='sign'>Log In</button></NavLink>
                        </div>
                  </nav>

            </>
      )
}

export default Header