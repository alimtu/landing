'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Comments = () => {
  const data = [
    {
      name: 'معصومه هدایی',
      type: 'دیابت نوع 2',
      description:
        'تا اینجا که دیدم درباره من خودم کارشناس ماما هستم فکر میکنم مطالب برای من بیشتر به فایده است ...',
    },
    {
      name: 'علیرضا مزرعه',
      type: 'دیابت نوع 1',
      description: 'دوره دیابت 346 سال خودم به جهت من تونم، یه کم نظر و حتی تی نظر هست ...',
    },
    {
      name: 'حمید نوروزی',
      type: 'دیابت نوع 2',
      description: 'سلام دوره خیلی خوبی بود به دیابتی‌ها امید به زندگی میده ...',
    },
  ];

  return (
    <div className="lg:w-11/12 w-full lg:mt-18  ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="testimonials-swiper"
        autoHeight={false}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.name} className="h-auto">
            <div
              className={`relative bg-grey-50 rounded-xl p-6 h-full flex flex-col ml-6 ${
                index === 0 ? 'mr-6' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/profile-01.svg"
                    alt="profile"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-lg"> {item.name} </span>
                  <span className="text-sm text-gray-500"> {item.type} </span>
                </div>
              </div>
              <p className="text-justify leading-8 text-sm font-bold text-grey-700 flex-grow">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;
