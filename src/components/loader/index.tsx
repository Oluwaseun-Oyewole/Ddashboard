import classNames from "classnames";
import { FiLoader } from "react-icons/fi";

const Loader = (props: { screen?: boolean }) => {
  return (
    <div
      className={classNames(
        props?.screen ? "h-screen w-screen" : "min-h-[200px] h-full w-full",
        "grid place-content-center place-items-center bg-transparent"
      )}
    >
      <FiLoader size={25} className="text-bluePrimary" />
    </div>
  );
};

export default Loader;
