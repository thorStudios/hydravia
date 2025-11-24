import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Ray Robertson",
    position: "CEO Company",
    date: "10th Feb, 2023",
    image: "https://i.ibb.co/5xP0q1b/user1.png",
    rating: 5,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
  },
  {
    id: 2,
    name: "Sherl",
    position: "CEO Company",
    date: "10th Feb, 2023",
    image: "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    rating: 5,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
  },
  {
    id: 3,
    name: "Jhon Doe",
    position: "Marketing Lead",
    date: "22nd Jan, 2023",
    image: "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    rating: 4,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
  },
  {
    id: 4,
    name: "Emily Rose",
    position: "CTO Company",
    date: "5th Feb, 2023",
    image: "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    rating: 5,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.",
  },
];

const Reviews = () => {
  return (
    <div className="container py-10 relative">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-10 relative
        after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
        What people <span className="text-primary">Think About Us</span>
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white p-5 rounded-xl border border-gray-100 relative min-h-[230px] flex flex-col justify-between">

              
              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 text-xl">
                {"★".repeat(review.rating)}
              </div>

              {/* Date */}
              <p className="absolute right-8 top-8 text-gray-500 text-sm">{review.date}</p>

              {/* Text */}
              <h3 className="mt-5 text-gray-600 font-medium text-lg capitalize">{review.text}</h3>

              {/* User */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.position}</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Button */}
      <div className="text-center mt-5">
        <button className=" btn-primary text-lg font-medium cursor-pointer">
          View All
        </button>
      </div>
    </div>
  );
};

export default Reviews;
