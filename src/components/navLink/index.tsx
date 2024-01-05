import classNames from "classnames";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/svg/logo.svg";
import { handleLogout } from "../../helper";
import { AppRoutesType } from "../../routes/app.routes";
import Typography from "../typography";

type MenuProps = {
  routesArray: Array<AppRoutesType>;
  className?: string;
  showLinkName?: boolean;
};

export const NavLinkComponent = ({ routesArray, className }: MenuProps) => {
  const variant = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const navItemClasses = classNames(
    "links flex flex-col lg:flex-row gap-2 transition duration-200ms ease-in-out items-center py-2",
    "space-x-[10px] font-normal text-sm"
  );

  return (
    <div className="max-w-[70%] mx-auto h-screen sticky left-0 top-0">
      <div className="flex gap-5 items-center py-8">
        <img src={Logo} alt="logo image" className="hidden md:block w-10" />
        <Typography
          type="p"
          children="Dabang"
          variant="textSm"
          className="hidden lg:block text-sm"
        />
      </div>
      <div>
        <ul className={className ? className : `space-y-2`}>
          {routesArray?.map(({ path, id, name, icon }: AppRoutesType) => {
            return (
              <motion.li
                key={`navLink${id}`}
                variants={variant}
                animate="visible"
                initial="hidden"
              >
                {path === "/app/signOut" ? (
                  <div
                    className={classNames(
                      navItemClasses,
                      `transition-all ease-in-out duration-200 text-[#737791] font-medium hover:text-black pt-6 cursor-pointer`
                    )}
                    onClick={handleLogout}
                  >
                    <img src={`${icon}`} className="w-[15px] md:w-[20px]" />
                    <span className="hidden lg:block">{name}</span>
                  </div>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      [
                        classNames(navItemClasses),
                        "transition-all ease-in-out duration-200 text-[#737791] font-medium hover:text-black pt-6",
                        isActive && "text-[#5D5FEF]",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    <img src={`${icon}`} className="w-[15px] md:w-[20px]" />
                    <span className="hidden lg:block">{name}</span>
                  </NavLink>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
