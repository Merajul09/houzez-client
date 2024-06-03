import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='fixed w-full z-10 bg-white shadow-sm'>
            <div className='py-4 border-b-[1px] container mx-auto'>
                <div>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <Link to='/'>
                            <p>Houzez</p>
                        </Link>
                        <div className='hidden md:block navbar-center'>
                            <Link to='/'
                                className='cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition'
                            >
                                Home
                            </Link>
                            <Link to='/'
                                className='cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition'
                            >
                                All properties
                            </Link>
                            {!user ? (
                                <Link
                                    to='/dashboard'
                                    className='cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition'
                                >
                                    Dashboard
                                </Link>
                            )
                                : ''
                            }
                        </div>
                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition z-20'
                                >
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            src={user && user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />
                                    </div>
                                </div>
                            </div>
                            {isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>

                                        {user ? (
                                            <>
                                                <Link
                                                    to='/dashboard'
                                                    className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Dashboard
                                                </Link>
                                                <div
                                                    onClick={logOut}
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                                >
                                                    Logout
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Link
                                                    to='/login'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    to='/register'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Sign Up
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar