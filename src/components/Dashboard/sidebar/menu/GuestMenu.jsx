import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { FaUsers } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { useState } from 'react'
import toast from 'react-hot-toast'
import useAuth from '../../../../hooks/useAuth'
import useRole from '../../../../hooks/useRole'
import MenuItem from './MenuItem'
import AgentModal from '../../../Modal/AgentRequestModal'
import useAxiosPublic from '../../../../hooks/useAxiosPublic'
const GuestMenu = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [role] = useRole()
    // for modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const modalHandler = async () => {
        try {
            const currentUser = {
                email: user?.email,
                role: 'guest',
                status: 'Requested',
            }
            const { data } = await axiosPublic.put(`/user`, currentUser)
            if (data.modifiedCount > 0) {
                toast.success('Success! Please wait for admin confirmation')
            } else {
                toast.success('Please!, Wait for admin approval👊')
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        } finally {
            closeModal()
        }
    }
    return (
        <>
            <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='my-bookings'
            />
            <MenuItem
                icon={FaUsers}
                label='My Wishlists'
                address='my-wishlists'
            />
            <MenuItem
                icon={MdReviews}
                label='My Reviews'
                address='my-reviews'
            />

            {role === 'guest' && (
                <div
                    onClick={() => setIsModalOpen(true)}
                    className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
                >
                    <GrUserAdmin className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Become An Agent</span>
                </div>
            )}
            {/* Modal */}
            <AgentModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                modalHandler={modalHandler}
            />
        </>
    )
}

export default GuestMenu