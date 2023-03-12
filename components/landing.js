import Image from "next/image";
import React, { useEffect, useState } from "react";
// import img from '../images/pp.JPG'
// import img1 from '../images/cover1.jpeg'
// import img2 from '../images/pp2.jpeg'
import img from "../images/lp3.jpeg";
import img1 from "../images/lp2.jpeg";
// import img2 from '../images/lp1.jpeg'
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaGithub,
  FaMailBulk,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Landing = () => {
  const ImageData = [img, img1];
  const length = ImageData?.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageData) || ImageData.length <= 0) {
    return null;
  }
  useEffect(() => {
    slideMove();
  }, [current]);

  const slideMove = () => {
    setTimeout(() => {
      nextSlide();
    }, 6000);
  };
  return (
    <div
      className={`flex flex-wrap items-center justify-center bg-fixed w-full bg-center lg:h-screen bg-cover bg-[url('../images/whiteBg.jpg')] id=Landing`}
    >
      <div className="max-w-[800px] px-2 flex justify-center items-center my-20">
        <div className={`grid md:grid-cols-2 lg:gap-20 `}>
          <div className="relative flex justify-center p-4 ">
            {ImageData?.map((v, i) => {
              return (
                <div
                  className={
                    i === current
                      ? "opacity-[1} ease-in duration-1000"
                      : "opacity-0"
                  }
                  key={i}
                >
                  {/* <FaArrowCircleLeft
                                onClick={prevSlide}
                                size={25}
                                className={`absolute top-[50%] text-white/100 cursor-pointer select-none z-[2] left-[30px]`}
                                /> */}
                  {i === current && (
                    <Image
                      className="shadow-lg"
                      src={v.src}
                      alt="/"
                      width="320"
                      height="220"

                      // objectFit='cover'
                    />
                  )}
                  {/* <FaArrowCircleRight 
                                onClick={nextSlide}
                                size={25}
                                className={`absolute top-[50%] right-[30px] text-white/100 cursor-pointer select-none z-[2]`}
                                /> */}
                </div>
              );
            })}
          </div>
          <div className="mt-20">
            <header className=" group">
              <h1 className="mb-1 text-xl font-semibold text-blue-700 md:text:xl">
                Hello, I&apos;m <br className="block md:hidden" />
                <span className="inline-flex pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                  Pyae Phyo Mon
                </span>
                <span className="box-border inline-block w-1 h-7 ml-2  bg-white md:-mb-4 md:h-10 animate-cursor will-change-transform"></span>
              </h1>
            </header>
            <br />
            <p className="flex text-gray-500">
              I am Web Developer.
              <br /> I&apos;ve a degree from Technological University
              (Mandalay).
              <br />
              Experienced with development cycle for dynamic web projects and
              IOT solutions.
            </p>
            <br />
            {/* <div className='uppercase tracking-widest text-[#5651e5] mb-2'>
                        Let&#39;s Connect
                    </div> */}
            <div className="flex text-center">
              <div className="mr-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="mailto: pyaephyomon114@gmail.com">
                  <FaMailBulk size={20} color="#3b82f6" />
                </Link>
              </div>
              <div className="mr-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://github.com/pyaemon">
                  <FaGithub size={20} color="#3b82f6" />
                </Link>
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-2
                         cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <Link href="https://www.linkedin.com/in/pyae-phyo-mon-95019a1b5/">
                  <FaLinkedin size={20} color="#3b82f6" />
                </Link>
              </div>
            </div>
            <div>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-3xl mt-5">
                <a href="/Pyae_Phyo_Mon.pdf" download>
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
