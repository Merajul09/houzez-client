import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;