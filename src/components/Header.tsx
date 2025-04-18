import NavMenu from "./NavMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-sm w-full  top-0  h-20 flex sticky z-30 tracking-widest ">
      <div
        className={`flex items-center justify-between w-full md:max-w-5xl mx-3  md:mx-auto px-6`}
      >
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
