import { useEffect, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GenericLink } from "./GenericLink";
import classNames from "classnames";
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <nav className="sticky z-30 bg-primeryColor top-0 pt-8 pb-3 shadow-navShadow ">
      <div>
        <div className="flex justify-between lg:block">
          <div className="flex items-center justify-between mx-20">
            {/* <Logo /> */}
            <img
              src="/assets/default-monochrome-black.svg"
              className="w-52 "
              alt=""
            />
            <div className="hidden lg:flex">
              <ul className=" flex gap-10  text- font-bold  uppercase font-Anton ">
                {/* Menu items for desktop */}
                <GenericLink href={""} title="home" />
                <GenericLink href={""} title="web" />
                <GenericLink href={""} title="social media" />
                <GenericLink href={""} title="strategy" />
              </ul>
            </div>
            <div>
              <button className="bg-black font-Anton text-white font-bold px-5 py-2 rounded-md text-lg  uppercase ">
                Kontakt
              </button>
            </div>
          </div>
          <div className="flex mr-20  lg:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className={isOpen ? "hidden sr-only" : "flex items-center"}
            >
              <Bars3BottomRightIcon
                className="w-10 h-10"
                onClick={() => setIsOpen(!isOpen)}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div
          className={classNames(
            "absolute top-0 left-0  w-2/3  h-screen   overflow-hidden z-40 bg-primeryColor  p-2  md:hidden",
            {
              mobile_nav_animation: isOpen,
              mobile_nav_exit_animation: isClosing,
            }
          )}
        >
          <div className=" overflow-hidden">
            <div className="px-2  mt-10 flex items-center justify-between">
              <div className="flex flex-col uppercase">
                <p className="text-xl text-center ">
                  fight<span className="text-secondary">club</span>
                </p>
                <span className="text-xl  customInnerShadow  ">hallenberg</span>
              </div>
              <div className=" -mr-2 flex w-screen justify-end">
                <button onClick={handleCloseMenu}>
                  <XMarkIcon className="exit-animation w-10 h-10" />
                </button>
              </div>
            </div>
            <ul className=" h-screen flex flex-col mt-20 px-2 pt-2 pb-3 space-y-1 capitalize text-2xl">
              {/* Menu items for mobile */}

              <GenericLink href={""} title="home" isMobile={true} />
              <GenericLink href={""} title="web" isMobile={true} />
              <GenericLink href={""} title="social" isMobile={true} />
              <GenericLink href={""} title="strategy" isMobile={true} />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
