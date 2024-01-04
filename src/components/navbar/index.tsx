import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoLogOutOutline, IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import Notification from "../../assets/svg/Notifications.svg";
import Image from "../../assets/svg/image.svg";
import CountryImage from "../../assets/svg/usa.svg";
import { handleLogout } from "../../helper";
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
    <header className="sticky left-0 top-0 z-10 bg-white">
      <nav className="grid pr-10 grid-flow-col items-center grid-cols-[20%_auto] pt-5">
        <div>
          <div>
            <Typography
              type="h1"
              className="text-xl"
              weight="medium"
              variant="textXl"
            >
              {PageTitle[getTitleEnum as keyof typeof PageTitle]}
            </Typography>
          </div>
        </div>

        <div>
          <div className="grid grid-flow-col justify-between items-center grid-cols-[50%_auto_auto]">
            <div className="hidden md:block">
              <Search onSearch={onSearch} />
            </div>
            <div className="md:hidden">
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

            <div className="flex items-center gap-5">
              <img src={CountryImage} alt="country" />
              <div>
                <Typography type="p" children="Eng (US)" weight="medium" />
              </div>
              <MdOutlineKeyboardArrowDown />
            </div>

            <div className="hidden md:flex items-center gap-5 ">
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
              className="w-full block md:hidden absolute right-0 top-16 h-screen bg-gray-50 overflow-y-scroll"
              variants={variant}
              animate="visible"
              initial="hidden"
              exit="exit"
            >
              <div className="max-w-[90%] md:max-w-[95%] mx-auto">
                <div className="my-7">
                  <Search onSearch={onSearch} />
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="bg-orange-200 rounded-full flex items-center justify-center w-8 h-8">
                    Logo
                  </div>
                  <div className="flex items-center gap-2">
                    <Typography type="p" children="Delicious Burger" />
                    <MdOutlineKeyboardArrowDown />
                  </div>

                  <div>
                    <IoNotifications />
                  </div>
                  <div>
                    <IoLogOutOutline onClick={handleLogout} />
                  </div>
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
