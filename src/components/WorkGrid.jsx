import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    id: 1,
    src: "/work1.JPG",
    text: "Some text",
  },
  {
    id: 2,
    src: "/work2.JPG",
    text: null,
  },
  {
    id: 3,
    src: "/work3.JPG",
    text: null,
  },
  {
    id: 4,
    src: "/work4.JPG",
    text: null,
  },
  {
    id: 5,
    src: "/work5.PNG",
    text: null,
  },
  {
    id: 6,
    src: "/work6.JPG",
    text: null,
  },
];

const item1 = [
  {

    src: "/hero2.png",
    text: "kakku",

  }
]

export default function WorkGrid() {
  const containersRef = useRef([]);

  useEffect(() => {
    containersRef.current.forEach((container) => {
      const image = container.querySelector("img");

      gsap.fromTo(
        image,
        { y: "-35%" },
        {
          y: "35%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div className="bg-[#4f4f4f]">
        <div
          ref={(el) => (containersRef.current[100] = el)}
          className="relative overflow-hidden h-[120vh] w-full  mx-auto rounded-xl shadow-lg"
        >
          {item1[0].text && (
            <p className="absolute top-4 left-4 z-10 text-white text-lg font-bold drop-shadow">
              {item1[0].text}
            </p>
          )}
          <img
            src={item1[0].src}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-contain will-change-transform opacity-70 "
          />
          <div className=" flex justify-center md:justify-end">
            <img src="/smallhero.png" className="absolute max-w-50 md:top-130 top-98 md:mr-25  rounded-2xl " />
          </div>
        </div>
        
      </div>
      <div className="space-y-[30vh] py-[50vh]">
        {images.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => (containersRef.current[idx] = el)}
            className="relative overflow-hidden h-[80vh] w-full  mx-auto rounded-xl shadow-lg"
          >
            {item.text && (
              <p className="absolute top-4 left-4 z-10 text-white text-lg font-bold drop-shadow">
                {item.text}
              </p>
            )}
            <img
              src={item.src}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}