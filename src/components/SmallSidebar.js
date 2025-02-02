import React, { useEffect } from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import Navlinks from './Navlinks';

const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleSidebar());
    };


    return (
        <Wrapper>
            <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                    <button className='close-btn' onClick={toggle}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                   <Navlinks toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar