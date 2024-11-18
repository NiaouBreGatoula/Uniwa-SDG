import { useEffect, useState } from 'react';
import { Progress } from "@nextui-org/react"; 
import PADA from "../../assets/pada.png";
import ReactLogo from "../../assets/react_logo.svg";
import TypescriptLogo from "../../assets/ts.svg";
import TailwindLogo from "../../assets/tailwind.svg";
import GsapLogo from "../../assets/gsap.svg";
import NextUiLogo from "../../assets/nextui.svg";
import LoveEmoji from "../../assets/love.svg"
import gsap from 'gsap';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => {
                gsap.to(".preloader-container", {
                    duration: 1.5,
                    opacity: 0,
                    y: 100,
                    ease: "power3.inOut",
                    onComplete: () => {
                        setIsVisible(false);
                        animateLandingContent();
                    }
                });
            }, 3000);
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);

    const animateLandingContent = () => {
        const tl = gsap.timeline();
        tl.from(".landing__top .sub", {
            duration: 1,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
        })
        .from(".landing__main .text", {
            duration: 2,
            y: 10,
            opacity: 0,
            stagger: {
                amount: 2,
            },
            ease: "power3.easeInOut",
        });
    };

    document.body.style.overflow = isVisible ? 'hidden' : 'auto';

    return isVisible ? (
        <div className="preloader-container flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 select-none pointer-events-none">
          <img src={PADA} alt="Logo" className="mb-4 w-1/5 h-auto opacity-80" />
          
          <div className="w-full max-w-md mt-4">
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="max-w-md bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
            />
          </div>
      
          <div className="mt-10 text-center text-white opacity-90">
            <p className="text-lg font-extrabold tracking-wider mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                Crafted with <img src={LoveEmoji} alt="Love Emoji" className="w-6 h-6 inline-block" /> by UniWA Students
              </span>
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-5 items-center text-sm select-none pointer-events-none">
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                <img src={ReactLogo} alt="React Logo" className="w-8 h-8" />
                <span className="font-medium opacity-90">React</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                <img src={TypescriptLogo} alt="Typescript Logo" className="w-8 h-8" />
                <span className="font-medium opacity-90">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                <img src={TailwindLogo} alt="Tailwind CSS Logo" className="w-8 h-8" />
                <span className="font-medium opacity-90">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                <img src={GsapLogo} alt="GSAP Logo" className="w-8 h-8" />
                <span className="font-medium opacity-90">GSAP</span>
              </div>
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
                <img src={NextUiLogo} alt="Next UI Logo" className="w-8 h-8" />
                <span className="font-medium opacity-90">Next UI</span>
              </div>
            </div>
          </div>
        </div>
    ) : null;
};

export default Preloader;
