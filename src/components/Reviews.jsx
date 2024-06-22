import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./shared/SectionTitle";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/reviews`)
            return data
        },
    })
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Reviews'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            {/* <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            /> */}
                            <p className="py-8">{review.title}</p>
                            <div className="avatar">
                                <div className="w-24 rounded-full object-contain">
                                    <img src={review.reviewerImage} alt="Photo" />
                                </div>
                            </div>
                            <p className="py-8">{review.description}</p>
                            <h3 className="text-2xl text-orange-400">{review.reviewerName}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;