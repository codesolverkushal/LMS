import { AiFillCloseCircle} from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';


function HomeLayout({ children }) { 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for checking if user is logged in or not
    const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn);

    // for displaying the options acc to role
    const role = useSelector((state)=>state?.auth?.role);

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    function handleLogout(e){
        e.preventDefault();

        // const res = await dispatch(logout());
        // if(res?.payload?.success)
        navigate("/")
    }

    return (

        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={changeWidth} size={"32px"} className='font-bold text-white m-4 hover:text-blue-500' />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className='menu p-4 h-[100%] w-48 sm:w-80 bg-base-200 text-base-content relative'>
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} className='hover:text-blue-500'/>
                            </button>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> Home </Link>
                        </li>

                        {isLoggedIn && role === "ADMIN" &&(
                            <li>
                                <Link to="/admin/dashboard">Admin DashBoard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/about" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> About us </Link>
                        </li>
                        <li>
                            <Link to="/contact" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> Contact us </Link>
                        </li>
                        <li>
                            <Link to="/courses" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> All courses </Link>
                        </li>

                        {!isLoggedIn &&(
                            <li className='absolute bottom-4 w-[90%]'>
                            <div className="w-full flex items-center justify-center">
                                  <button className="btn-primary px-4 py-1 font-semibold rounde-md w-full">
                                    <Link to="/login">Login</Link>
                                  </button>
                                  <button className="btn-secondary px-4 py-1 font-semibold rounde-md w-full">
                                    <Link to="/login">Signup</Link>
                                  </button>
                            </div>
                        </li>
                        )}
                        {isLoggedIn &&(
                            <li className='absolute bottom-4 w-[90%]'>
                            <div className="w-full flex items-center justify-center">
                                  <button className="btn-primary px-4 py-1 font-semibold rounde-md w-full">
                                    <Link to="/user/profile">Profile</Link>
                                  </button>
                                  <button className="btn-secondary px-4 py-1 font-semibold rounde-md w-full">
                                    <Link onClick={handleLogout}>Logout</Link>
                                  </button>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
             
    {children}
 
     <Footer />
   </div>




      

    );
}

export default HomeLayout;