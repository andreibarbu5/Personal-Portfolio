import React from "react";

const Header = () => {
  return (
    <div className="fixed flex items-center justify-center w-full text-white pt-8 md:pt-10 overflow-hidden ">
      <div className="flex justify-between border border-gray-500 bg-[#22222e] flex items-center justify-center space-x-4 h-[3.5rem] w-[17rem] sm:w-[22rem] rounded-[2rem] px-2 sm:px-8 md:w-[28rem] md:h-[4rem] ">
        <div className="whitespace-nowrap">
          <p>📁 Projects</p>
        </div>
        <div className="whitespace-nowrap">
          <p>💼 CV</p>
        </div>
        <div className="whitespace-nowrap">
          <p>📞 Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
