import { Helmet } from 'react-helmet-async'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import Loader from '../../components/Loader'
import { IoMdAddCircle } from "react-icons/io";
import { useState } from 'react'
import toast from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'

const CardDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const { data: property = {}, isLoading, } = useQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/property/${id}`)
            return data
        },
    })
    const { mutateAsync } = useMutation({
        mutationFn: async wishlistData => {
            const { data } = await axiosPublic.post(`/wishlist`, wishlistData)
            return data
        },
        onSuccess: () => {
            toast.success('Property Wishlist Successfully!')
            setLoading(false)
        },
    })
    const { mutateAsync: reviewAsync } = useMutation({
        mutationFn: async reviewData => {
            const { data } = await axiosPublic.post(`/review`, reviewData)
            return data
        },
        onSuccess: () => {
            toast.success('Property review Successfully!')
            setLoading(false)
        },
    })
    const handleReview = async (e) => {
        e.preventDefault();
        const title = property.title
        const reviewerName = user.displayName
        const reviewerImage = user.photoURL
        const description = e.target.message.value
        try {
            const reviewData = {
                title, reviewerName, reviewerImage, description
            }
            await reviewAsync(reviewData)
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            setLoading(false)
        }
    }
    const handleWishlist = async () => {
        const title = property.title
        const location = property.location
        const image = property.image
        const price = property.price
        const agentName = property.agent.name
        const users = user.email

        try {
            const wishlistData = {
                title,
                location,
                image,
                price,
                agentName,
                users
            }
            //   Post request to server
            await mutateAsync(wishlistData)
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }
    if (isLoading) return <Loader />
    return (
        <div className='pt-24'>
            <Helmet>
                <title>{property?.title}</title>
            </Helmet>
            {property && (
                <div className='max-w-screen-lg mx-auto'>
                    {/* Header */}
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold'>{property.title}</div>
                                <div className='font-light text-neutral-500 mt-2'>{property.location}</div>
                            </div>
                            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                                <img
                                    className='object-cover w-full'
                                    src={property.image}
                                    alt='header image'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        {/* property Info */}
                        <div className='col-span-4 flex flex-col gap-8'>
                            <div className='flex flex-col gap-2'>
                                <div
                                    className='text-xl font-semibold flex flex-row items-center gap-2'
                                >
                                    <div>Posted by {property?.agent?.name}</div>

                                    <img
                                        className='rounded-full'
                                        height='30'
                                        width='30'
                                        alt='Avatar'
                                        referrerPolicy='no-referrer'
                                        src={property?.agent?.image}
                                    />
                                </div>
                            </div>

                            <hr />
                            <div
                                className='text-lg font-light text-neutral-500'
                            >
                                ${property?.price}
                            </div>
                            <hr />
                            <div >
                                <button disabled={loading} onClick={handleWishlist} className='flex items-center gap-1 cursor-pointer'> <IoMdAddCircle /> Add to Wishlist</button>
                            </div>
                        </div>

                        <div className='md:col-span-3 order-first md:order-last mb-10'>
                            {/* property review */}
                            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                                <div className="flex flex-col items-center w-full">
                                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                    <div className="flex flex-col items-center py-6 space-y-3">
                                        <span className="text-center">How are this property?</span>
                                        <div className="flex space-x-3">
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleReview} className='w-full'>
                                        <div className="flex flex-col ">
                                            <textarea name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-200"></textarea>
                                            <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600">Leave feedback</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-center">
                                    <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-600">Maybe later</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardDetails