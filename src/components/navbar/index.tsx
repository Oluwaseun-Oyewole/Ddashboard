import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import Notification from "../../assets/svg/Notifications.svg";
import Image from "../../assets/svg/image.svg";
import CountryImage from "../../assets/svg/usa.svg";
import { PageTitle } from "../../helper/keyConstants";
import Search from "../search";
import Typography from "../typography";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleMobileOpening = () => {
    setClicked(!clicked);
  };

  const variant = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.621,
        stiffness: 150,
      },
    },
    exit: {
      opacity: 0,
      x: 500,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const onSearch = () => {
    console.log("searching for something..");
  };

  const location = useLocation();
  const match = location.pathname.match(/\/app\/([^/]+)/);

  const getTitleEnum = match
    ? match[1]
    : location.pathname.split("/").pop() || "";

  return (
    <header className="bg-white py-5 lg:py-0 pb-5 lg:pb-3">
      <nav className="grid grid-flow-col items-center justify-between lg:justify-normal grid-cols-[20%_auto] pt-7">
        <div>
          <div>
            <Typography type="h1" className="md:text-xl" weight="medium">
              {PageTitle[getTitleEnum as keyof typeof PageTitle]}
            </Typography>
          </div>
        </div>

        <div>
          <div className="grid grid-flow-col justify-between items-center grid-cols-[50%_auto_auto]">
            <div className="hidden lg:block">
              <Search onSearch={onSearch} />
            </div>
            <div className="lg:hidden">
              {!clicked ? (
                <div onClick={handleMobileOpening}>
                  <RxHamburgerMenu size={25} />
                </div>
              ) : (
                <div onClick={handleMobileOpening}>
                  <IoMdClose size={25} />
                </div>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <img src={CountryImage} alt="country" />
              <div>
                <Typography type="p" children="Eng (US)" weight="medium" />
              </div>
              <MdOutlineKeyboardArrowDown />
            </div>

            <div className="hidden lg:flex items-center gap-5 ">
              <div className="flex gap-5">
                <img src={Notification} alt="notification" />
                <img src={Image} alt="image" className="w-12" />
                <div>
                  <div>
                    <div className="flex gap-5 items-center pb-2">
                      <Typography
                        type="p"
                        children="Seun"
                        variant="textXs"
                        weight="medium"
                      />
                      <MdOutlineKeyboardArrowDown className="font-medium" />
                    </div>
                    <Typography
                      type="p"
                      children="Admin"
                      variant="textXs"
                      className="text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {clicked && (
            <motion.div
              className="w-full block lg:hidden absolute right-0 top-20 bg-white h-screen overflow-y-scroll"
              variants={variant}
              animate="visible"
              initial="hidden"
              exit="exit"
            >
              <div className="max-w-[90%] md:max-w-[95%] mx-auto">
                <div className="my-7">
                  <Search onSearch={onSearch} />
                </div>

                <div className="flex items-center gap-5 pb-4">
                  <img src={CountryImage} alt="country" />
                  <div>
                    <Typography type="p" children="Eng (US)" weight="medium" />
                  </div>
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
