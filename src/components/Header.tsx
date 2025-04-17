import NavMenu from "./NavMenu";
import { Concert_One } from "next/font/google";
import Link from "next/link";
const ConcertOne = Concert_One({
  subsets: ["latin"], // required
  weight: ["400"], // optional — choose weights you need
  display: "swap", // optional, better font loading
});
import { FaPencilAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-sm w-full  top-0 shadow-sm h-20 flex sticky z-1 tracking-widest">
      <div
        className={`flex items-center justify-between w-full md:max-w-5xl mx-3  md:mx-auto px-6`}
      >
        <Link
          href="/"
          className={`text-3xl md:text-4xl font-bold underline flex items-center`}
        >
          {" "}
          <span className={` ${ConcertOne.className}`}>AbdellahDev</span>{" "}
          <FaPencilAlt />
        </Link>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
