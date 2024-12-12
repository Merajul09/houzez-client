import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../Loader";
import Advertisement from "../home/Advertisement";
import SectionTitle from "../shared/SectionTitle";

const AdvertiseCard = () => {
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
      <SectionTitle
        subHeading="Our Products list"
        heading={"products"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {properties.slice(0, 3).map((property) => (
          <Advertisement key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AdvertiseCard;
