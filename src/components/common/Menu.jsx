import React from "react";

const Menu = ({ children, open, setOpen }) => {
  return (
    <>
      <img
        src="menu.svg"
        alt="Menu"
        className={`${open ? "hidden" : "block"} z-50 md:hidden cursor-pointer`}
        onClick={() => setOpen(true)}
      />
      <img
        src="close.svg"
        alt="Close"
        className={`${
          open ? "block" : "hidden"
        } z-50  md:hidden cursor-pointer`}
        onClick={() => setOpen(false)}
      />
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-[5] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`

          fixed top-0 h-screen md:flex-1 lg:flex-none lg:min-w-[70%] z-10
          flex flex-col gap-8 p-8 pt-24     bg-white/5 backdrop-blur-2xl 
          transition-all duration-300 ease-in-out
          ${open ? "right-0" : "-right-[70%]"}
       
          md:static md:w-auto md:h-auto md:translate-x-0 md:flex-row
          md:justify-end md:items-center md:p-0 md:pt-0
          md:basis-2/3 md:transition-none
          
          `}
      >
        {children}
      </nav>
    </>
  );
};
export default Menu;
