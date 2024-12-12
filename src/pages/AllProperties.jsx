import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "../components/Loader";
import Advertisement from "../components/home/Advertisement";

const AllProperties = () => {
  const axiosPublic = useAxiosPublic();
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/properties`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {properties.map((property) => (
          <Advertisement key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
