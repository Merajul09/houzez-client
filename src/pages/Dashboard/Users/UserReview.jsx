import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loader from "../../../components/Loader";
import useAuth from "../../../hooks/useAuth";

const UserReview = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['review', user.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/review/${user.email}`)
            return data
        },
    })
    if (isLoading) return <Loader />
    return (
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
                            Property Title
                        </th>
                        <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                            Reviewer Name
                        </th>
                        <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                            Reviewer Image
                        </th>
                        <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                        >
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <tr key={review._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-3">
                                <p>{review.title}</p>
                            </td>
                            <td className="p-3">
                                <p>{review.reviewerName}</p>
                            </td>
                            <td className="p-3">
                                <p>{review.reviewerImage}</p>
                            </td>
                            <td className="p-3">
                                <p>{review.description}</p>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserReview;