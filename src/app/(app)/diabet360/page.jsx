import { BackwardOutlined, ForwardOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import Comments from './components/Comments';
import Image from 'next/image';

export default function DashboardPage() {
  const firstItems = [
    {
      title: 'مدت زمان دوره',
      type: 'دقیقه',
      count: '544',
      image: '/images/cover-Video-1.jpg',
    },
    {
      title: 'تعداد جلسات',
      type: 'جلسه',
      count: '50',
      image: '/images/cover-Video-1.jpg',
    },
    {
      title: 'وبینار پرسش و پاسخ با پزشکان',
      type: 'وبینار',
      count: '4',
      image: '/images/cover-Video-1.jpg',
    },
    {
      title: 'تعداد اساتید و متخصصین',
      type: 'پزشک',
      count: '15',
      image: '/images/cover-Video-1.jpg',
    },
    {
      title: 'قیمت ویژه دکترنکست',
      type: 'تومان',
      description: '(با ۴۰ درصد تخفیف)',
      count: '1/500/000',
      image: '/images/cover-Video-1.jpg',
    },
  ];

  const syllabusItems = [
    {
      icon: '/images/icon sarfasl dore-02.svg',
      title: 'مقدمات و اصول دیابت',
    },
    {
      icon: '/images/icon sarfasl dore-02.svg',
      title: 'دیابت در خانواده و روانشناسی',
    },
    {
      icon: '/images/icon sarfasl dore-03.svg',
      title: 'تکنولوژی کنترل قندخون',
    },
    {
      icon: '/images/icon sarfasl dore-04.svg',
      title: 'درمان ها و داروشناسی دیابت',
    },
    {
      icon: '/images/icon sarfasl dore-05.svg',
      title: 'تغذیه دیابتی و کربوهیدرات شماری',
    },
    {
      icon: '/images/icon sarfasl dore-06.svg',
      title: 'پیشگیری از عوارض دیابت',
    },
  ];

  const sampleLessons = [
    { text: 'رژیم غذایی مناسب افراد دیابتی' },
    { text: 'ناگفته های دیابت نوع یک' },
    { text: 'سنسورهای قند خون با CGM' },
    { text: 'دیابت و فشار خون بالا' },
  ];

  const doctors = [
    { name: 'دکتر سعید کیاسی', image: 'IMG-DR-01.png', speciality: 'متخصص قلب و عروق' },
    { name: 'دکتر محمدرضا مهاجری تهران', image: 'IMG-DR-02.png', speciality: 'متخصص نوار قلب' },
    { name: 'دکتر مسعود قاسمی', image: 'IMG-DR-03.png', speciality: 'متخصص قلب و عروق' },
    { name: 'دکتر امیرحسین نیکوکار', image: 'IMG-DR-04.png', speciality: 'متخصص عفونی' },
    { name: 'دکتر مهرداد مهرازها', image: 'IMG-DR-05.png', speciality: 'متخصص گوش و حلق و بینی' },
    { name: 'دکتر رضا وفابور', image: 'IMG-DR-06.png', speciality: 'متخصص ارتوپدی' },
    { name: 'دکتر احمد نصیری', image: 'IMG-DR-07.png', speciality: 'متخصص داخلی' },
    { name: 'دکتر محمد قهرمانی خرّم', image: 'IMG-DR-08.png', speciality: 'متخصص چشم پزشکی' },
    { name: 'دکتر حسین ایمانی', image: 'IMG-DR-09.png', speciality: 'متخصص پوست و مو' },
    { name: 'دکتر سالار کمیسال', image: 'IMG-DR-10.png', speciality: 'متخصص زنان و زایمان' },
    { name: 'دکتر گلناز بهرامی', image: 'IMG-DR-11.png', speciality: 'متخصص روانشناسی' },
    { name: 'دکتر مینا برادران صادقی', image: 'IMG-DR-12.png', speciality: 'متخصص دندانپزشکی' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="w-full h-full border-b border-grey-100 lg:border-none mb-3 lg:mb-0">
        <Image
          src="/images/titr.jpg"
          alt="Logo"
          priority
          fill
          className="w-full relative object-cover"
        />
      </div>

      <div className="relative text-sm lg:text-lg lg:-top-8 rounded-2xl text-white flex justify-center items-center px-4 lg:px-12 py-2 font-bold bg-gradient-to-r from-[#1c77bd] to-[#26a9e0]">
        برای کنترل دیابت، به چیزی بیش از دارو نیاز دارید
      </div>

      <div className="rounded-2xl flex w-11/12 lg:w-8/12 relative lg:mt-6 mt-3">
        <Image
          src="/images/cover-Video-1.jpg"
          alt="cover-Video-1"
          fill
          priority
          className="rounded-2xl relative"
        />

        <div className="absolute rounded-full border border-white lg:p-9 p-6  w-6 h-6 lg:w-8 lg:h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="min-w-6 min-h-6 lg:min-w-8 lg:min-h-8 lg:p-9 p-6 bg-grey-25 opacity-25 rounded-full" />
          <ForwardOutlined className="text-white lg:text-4xl text-2xl absolute" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:w-9/12 w-full lg:items-end lg:justify-end items-center justify-center gap-8 lg:mt-12 mt-6">
        <div className="lg:w-1/2 w-full px-6 lg:px-0 flex flex-col lg:gap-8 gap-4">
          <span className="text-2xl lg:text-5xl whitespace-nowrap font-bold">
            راهکار قطعی کجاست؟
          </span>
          <span
            className="text-base lg:text-lg lg:leading-9 leading-8 font-bold"
            style={{ textAlign: 'justify' }}
          >
            درمان مؤثر دیابت زمانی نتیجه می دهد که شخصی سازی شده و متناسب با شرایط هر فرد باشد؛ از
            سبک زندگی گرفته تا نوع دیابت.
            <br />
            در
            <span className="text-primary ml-1"> دوره جامع آموزش دیابت ۳۶۵</span>
            با جدیدترین آموزشهای علمی و عملی آشنا میشوید و با یک برنامه دقیق، راهکار قطعی برای
            مدیریت دیابت خود را پیدا میکنید؛ راهکاری که برای همیشه میتواند مسیر زندگیتان را تغییر
            دهد.
          </span>

          <Divider className="flex lg:hidden py-0 my-0" />

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full justify-between items-center">
            <span className="font-bold text-base text-grey-700">نوع دیابت خود را وارد کنید.</span>

            <div className="flex gap-3">
              <div className="rounded-xl whitespace-nowrap text-white flex justify-center items-center px-10 py-2  bg-gradient-to-r from-[#1c77bd] to-[#26a9e0] shadow-lg font-bold">
                دیابت نوع یک
              </div>

              <div className="rounded-xl whitespace-nowrap text-white flex justify-center items-center px-10 py-2 bg-gradient-to-r from-[#1c77bd] to-[#26a9e0] shadow-lg font-bold">
                دیابت نوع دو
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:w-1/2 w-full px-6">
          {firstItems.map((item, index) => {
            return (
              <div
                className="flex items-center justify-between gap-3 bg-grey-50 rounded-full pr-2 pl-6 lg:py-1 xxl:py-2"
                key={index}
              >
                <div className="flex gap-1 items-center relative ">
                  <Image
                    src={`/images/icon-sarfasl-dore-01.svg`}
                    alt={item.title}
                    width={62}
                    height={62}
                  />
                  <span className="lg:text-lg xxl:text-xl font-bold">{item.title}</span>
                </div>

                <span className="lg:text-lg text-sm font-bold whitespace-nowrap">
                  <span className="text-primary text-xl">{item.count}</span> {item.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full py-6 bg-gradient-to-r from-[#1c77bd] to-[#26a9e0] mt-12 flex lg:justify-end lg:items-end lg:self-end px-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:w-10/12 w-full lg:ml-16 lg:self-end lg:gap-12 gap-4">
          <span className="text-3xl lg:text-4xl xxl:text-5xl font-bold text-white whitespace-nowrap lg:w-1/5 w-full text-center">
            سرفصل های دوره
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-6 lg:w-4/5 w-full relative">
            {syllabusItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div className="flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={112}
                    height={112}
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <div className="w-full min-w-2 min-h-2 max-w-2 max-h-2 bg-white rounded-full hidden lg:block" />

                <span className="text-white text-center lg:text-base xxl:text-lg font-bold lg:mt-6 leading-7">
                  {item.title}
                </span>
              </div>
            ))}

            <div
              className="w-full absolute justify-center items-center hidden lg:flex"
              style={{ bottom: '83px' }}
            >
              <div
                className="w-10/12 self-center flex justify-center items-center max-h-2 bg-white"
                style={{ minHeight: '1px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:w-11/12 w-full mt-12 px-6">
        <div className="lg:w-4/12 xxl:w-1/4 w-full flex flex-col gap-4">
          <span className="font-bold text-xl lg:text-2xl xxl:text-3xl text-center">
            چند درس نمونه را همین حالا ببینید!
          </span>

          <span
            className="leading-8 lg:leading-9 flex font-bold text-sm lg:text-base text-grey-800"
            style={{ textAlign: 'justify' }}
          >
            با مشاهده بخش هایی از محتوای دوره، با سبک آموزش، کیفیت مطالب و روش ارائه پزشکان متخصص
            آشنا شوید و مطمئن باشید که این دوره برای شما طراحی شده است.
          </span>

          <div className="flex flex-col gap-4 lg:mt-8 xxl:mt-16">
            {sampleLessons.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-3 rounded-lg shadow-md justify-between bg-gradient-to-r from-[#1c77bd] to-[#26a9e0]"
              >
                <span className="text-white text-base font-bold">{item.text}</span>

                <div className="w-8 h-8 rounded-full border border-white flex justify-center items-center bg-[#6FB1FC]">
                  <ForwardOutlined className="text-white text-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-8/12 xxl:w-3/4 pr-24 pt-0 flex">
          <div className="relative w-full h-full">
            <Image
              src="/images/cover-nemone-dars.jpg"
              alt="Logo"
              fill
              priority
              className="rounded-2xl object-fill h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative mt-12 h-full">
        <div>
          <Image
            src="/images/banner-middle.jpg"
            alt="Logo"
            fill
            priority
            className="h-full w-full relative"
          />
        </div>

        <div className="absolute flex flex-col items-center justify-center gap-4 top-4 lg:top-0 xxl:top-12 lg:left-12 left-6 lg:pt-12">
          <span className="font-bold text-lg lg:text-5xl text-primary">با دیابت ۳۶۵</span>
          <span className="font-bold text-lg lg:text-5xl text-primary">
            همیشه یه پشتیبان کنارته.
          </span>

          <span className="w-2/3 text-center text-grey-600 text-xs lg:text-base xxl:text-lg font-bold leading-9 lg:mt-4 hidden lg:block">
            با شرکت در این دوره می توانید از یک پشتیبان آنلاین که بصورت هفتگی به سوالات شما پاسخ می
            دهد، بهره مند شوید.
          </span>
        </div>
      </div>

      <div className="lg:w-11/12 xxl:w-10/12 w-full flex flex-col lg:gap-12 mt-12">
        <div className="flex flex-col lg:flex-row justify-between w-full items-center">
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 lg:items-end items-center">
            <div className="flex flex-col gap-6 whitespace-nowrap text-center lg:text-start items-center lg:items-start">
              <span className="lg:text-4xl text-3xl font-bold">همین حالا</span>
              <span className="lg:text-5xl text-3xl text-primary font-bold">مسیر کنترل دیابت</span>
              <span className="lg:text-4xl text-3xl font-bold lg:self-end">رو شروع کنید.</span>
            </div>
            <div className="bg-grey-50 rounded-2xl text-lg lg:text-xl lg:px-12 lg:py-4 px-6 py-2 text-black font-bold relative top-2 whitespace-nowrap">
              خرید دوره دیابت نوع یک
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative h-96">
            <Image
              src="/images/banner-type-1.jpg"
              alt="Diabetes Type 1 Banner"
              className="object-contain "
              fill
              priority
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full items-center">
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 lg:items-end items-center">
            <div className="flex flex-col gap-6 whitespace-nowrap text-center lg:text-start items-center lg:items-start">
              <span className="lg:text-4xl text-3xl font-bold">همین حالا</span>
              <span className="lg:text-5xl text-3xl text-red-500 font-bold">مسیر کنترل دیابت</span>
              <span className="lg:text-4xl text-3xl font-bold lg:self-end">رو شروع کنید.</span>
            </div>
            <div className="bg-grey-50 rounded-2xl text-lg lg:text-xl lg:px-12 lg:py-4 px-6 py-2 text-black font-bold relative top-2 whitespace-nowrap">
              خرید دوره دیابت نوع دو
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative h-96">
            <Image
              src="/images/banner-type-2.jpg"
              alt="Diabetes Type 1 Banner"
              className="object-contain "
              fill
              priority
            />
          </div>
        </div>
      </div>

      <Comments />

      <div className="bg-grey-50 w-full flex flex-col lg:gap-4 mt-12 lg:pt-12 lg:pb-24 pt-6 pb-12 items-center justify-center">
        <span className="lg:text-4xl text-3xl font-bold">
          اساتید دوره <span className="text-primary">دیابت ۳۶۰</span>
        </span>

        <div className="lg:w-11/12 w-full">
          <div className="grid lg:grid-cols-7 grid-cols-2 lg:gap-x-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="flex flex-col items-center rounded-lg">
                <Image
                  src={`/images/Dr_Images/${doctor.image}`}
                  alt={doctor.name}
                  priority
                  width={180}
                  height={180}
                  className=" object-cover rounded-full mb-4"
                />
                <h3 className="text-sm lg:text-base xxl:text-lg text-primary font-semibold text-center whitespace-nowrap">
                  {doctor.name}
                </h3>
                <div
                  className="px-3 py-1 bg-primary rounded-full flex justify-center mt-3"
                  style={{
                    background: 'linear-gradient(to right, #0575E6, #021B79)',
                  }}
                >
                  <p className="text-xxs lg:text-xs xxl:text-sm text-center text-white whitespace-nowrap">
                    {doctor.speciality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-8 px-2 md:px-8 bg-gradient-to-r from-[#1c77bd] to-[#26a9e0] ">
        <div className="flex items-center justify-center ">
          <span className="text-3xl md:text-5xl font-extrabold text-white whitespace-nowrap ">
            نقشه راه دیابت ۳۶۵
          </span>
        </div>
      </div>
    </div>
  );
}
