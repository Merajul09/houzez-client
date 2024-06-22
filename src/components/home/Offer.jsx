import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Offer = () => {
    return (
        <div className="px-4 py-16 my-4 rounded-xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-100 dark:text-gray-800">
            <h2 className="mb-8 leading-none text-center text-3xl font-bold bg-gradient-to-r from-[#264653] via-[#2A9D8F] to-[#E9C46A] text-transparent bg-clip-text bg-300% animate-gradient">What do we have to offer?</h2>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-center space-x-2">
                    <IoCheckmarkCircleOutline className="w-6 h-6 fill-current dark:text-[#2A9D8F]" />
                    <span>Comprehensive Property Listings</span>
                </li>
                <li className="flex items-center space-x-2">
                    <IoCheckmarkCircleOutline className="w-6 h-6 fill-current dark:text-[#2A9D8F]" />
                    <span>Expert Real Estate Agents </span>
                </li>
                <li className="flex items-center space-x-2">
                    <IoCheckmarkCircleOutline className="w-6 h-6 fill-current dark:text-[#2A9D8F]" />
                    <span>Client Reviews and Testimonials</span>
                </li>
                <li className="flex items-center space-x-2">
                    <IoCheckmarkCircleOutline className="w-6 h-6 fill-current dark:text-[#2A9D8F]" />
                    <span>Property Management Services</span>
                </li>
                <li className="flex items-center space-x-2">
                    <IoCheckmarkCircleOutline className="w-6 h-6 fill-current dark:text-[#2A9D8F]" />
                    <span>Legal and Documentation Support </span>
                </li>
                <li className="flex items-center space-x-2">
                    <IoCheckmarkCircleOutline className="w-6 h-6 fill-current dark:text-[#2A9D8F]" />
                    <span>Cultural Immersion and Engagement </span>
                </li>
            </ul>
        </div>
    );
};

export default Offer;