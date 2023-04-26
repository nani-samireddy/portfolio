const Navbar = () => {
  return (
    <div className="w-full flex justify-center ">
      <nav className="w-80vw flex md:flex-row flex-col md:justify-between py-8 ">
        <div className="text-black text-xl">
          <span>
            I&apos;m <span className="font-bold">nani</span>
          </span>
        </div>
        <div className="flex gap-16 font-light invisible md:visible ">
          <a className=" nav-element" href="/">
            Home
          </a>
          <a className="nav-element" href="#Work">
            Work
          </a>
          <a className="nav-element" href="/about">
            About
          </a>
          <a className="nav-element" href="/contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
