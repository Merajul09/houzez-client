import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Advertisement = ({ property }) => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${property.email}`);
      return data;
    },
  });
  return (
    <div>
      <Link to={`/property/${property?._id}`} className="cursor-pointer group">
        <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img
              src={property.image}
              alt="wallpaper"
              className="object-cover h-5/6 w-full group-hover:scale-110 transition"
            />

            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-slate-700">{property.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{property.location}</p>

            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-orange-500">
                  ${property.price}
                </span>
              </p>

              <div className="group inline-flex">
                <p className="text-lg font-bold text-green-500">
                  {users.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
Advertisement.propTypes = {
  property: PropTypes.object,
};
export default Advertisement;
