import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/NavBar';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;