import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import Loader from '../../components/Loader'

const CardDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const { data: property = {}, isLoading, } = useQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/property/${id}`)
            return data
        },
    })
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
                        </div>

                        <div className='md:col-span-3 order-first md:order-last mb-10'>
                            {/* RoomReservation */}
                            {/* <RoomReservation refetch={refetch} room={room} /> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardDetails