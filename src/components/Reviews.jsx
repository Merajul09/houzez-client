import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./shared/SectionTitle";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await useAxiosPublic.get(`/reviews`)
            return data
        },
    })
    console.log(reviews)
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