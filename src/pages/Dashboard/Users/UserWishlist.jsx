import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const UserWishlist = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { data: wishlists = [], isLoading } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/wishlist/${user.email}`)
            return data
        },
    })
    const { data: properties = [] } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/properties`)
            return data
        },
    })
    if (isLoading) return <Loader />
    return (<>
        {properties.map(property => (
            <Link to={`/property/${property?._id}`} key={property._id} className='cursor-pointer'>
                <div className="overflow-x-auto mt-6">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Title
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Location
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Agent Name
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlists.map(wishlist => <tr key={wishlist._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{wishlist.title}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{wishlist.location}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{wishlist.agentName}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{wishlist.price}</p>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Link>
        ))}

    </>
    );
};

export default UserWishlist;