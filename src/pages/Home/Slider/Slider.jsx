import { Fade, Slide } from "react-awesome-reveal";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <section>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            className="w-screen"
            src={
              "https://img.freepik.com/free-photo/young-english-teacher-doing-her-lessons-online_23-2149019775.jpg?w=1060&t=st=1686221327~exp=1686221927~hmac=8225cd24841423b582ce244edd3db1f45d538c244a23f6306aef8c5dbe6de94c"
            }
            alt=""
          />
          <div className="hidden lg:absolute lg:flex items-center rounded-xl h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <Slide>
                <h2 className="text-6xl font-bold">
                  Take great{" "}
                  <span className="text-[#F2184F]">
                    foreign language courses
                  </span>{" "}
                  from renowned teacher.
                </h2>
              </Slide>
              <Fade delay={1e3} cascade damping={1e-1}>
                Ours courses are built in partnership with language leaders and
                relevant field specialist.
              </Fade>
              <div>
                <button className="btn btn-outline btn-lg text-white">
                  Start Learning Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-screen"
              src={
                "https://img.freepik.com/free-photo/young-woman-doing-speech-therapy-with-kids_23-2149110274.jpg?w=1060&t=st=1686220007~exp=1686220607~hmac=840902418d439a3c8bcf1ecc9b6f47f61eec4167c34c65fb3b42649f508c8c59"
              }
              alt=""
            />
            <div className="hidden lg:absolute lg:flex items-center rounded-xl h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className="text-white space-y-7 pl-20 w-1/2">
                <Slide>
                  <h2 className="text-6xl font-bold">
                    <span className="text-[#F2184F]">Education</span> center and
                    distance education.
                  </h2>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                  Online education leads the world in distance education with
                  high quality language degree and online courses.
                </Fade>
                <div>
                  <button className="btn btn-outline btn-lg text-white">
                    Start Learning Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-screen"
              src={
                "https://img.freepik.com/free-photo/kids-classroom-taking-english-class_23-2149402669.jpg?w=1060&t=st=1686222383~exp=1686222983~hmac=ffb1b584fff24a4bd540af1848a37774bb9f3b9f0c58d33b3260628d86175f88"
              }
              alt=""
            />
            <div className="hidden lg:absolute lg:flex items-center rounded-xl h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className="text-white space-y-7 pl-20 w-1/2">
                <Slide>
                  <h2 className="text-6xl font-bold">
                    Receive <span className="text-[#F2184F]">personalized</span>{" "}
                    coaching.
                  </h2>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                  Learning is a collaborative process, and we are here to
                  provide you with guidance every step of the way.
                </Fade>
                <div>
                  <button className="btn btn-outline btn-lg text-white">
                    Start Learning Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
