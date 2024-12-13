import React, { useState, useEffect } from "react";
import { NAVBAR_LIST } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { SEARCH_ICON } from "../../utils/icons";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggleNavigate = (path) => {
    navigate(path)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="flex lg:flex-col bg-blue w-full max-lg:pt-[11px] justify-between items-center px-4 max-sm:px-[18px] relative z-50">
      <div className="flex justify-between lg:pb-[13px] items- w-full max-w-[1180px]">
        <div className="hidden pt-[42px] lg:flex justify-between gap-[35px] items-center">
          {NAVBAR_LIST.map((obj, i) => (
            <Link className="text-white opacity-[90%] hover:text-orange hover:underline decoration-[1.5px] underline-offset-2 duration-300 ease-linear text-[13px] font-normal"
              onClick={() => toggleNavigate(obj.path)} to={obj.path} key={i}> {obj.tittle}
            </Link>
          ))}
        </div>
        <div className="border max-lg:hidden max-h-[31px] max-w-[257px] w-full mt-[27px] border-white rounded-[5px] flex justify-between">
          <input className="bg-transparent outline-none w-full ps-2 placeholder:text-white placeholder:text-[13px] text-[13px] text-white pe-3" type="" placeholder="Search by Keyword" />
          <div className="py-2 pe-[14px] "> <span className="cursor-pointer"><SEARCH_ICON /></span></div>
        </div>
        <div className="lg:hidden block md:max-w-24 max-w-[73px] md:max-h-5 max-h-[15px]"> <a href="/"><img src="./assets/image/png/page-logo.png" alt="page-logo" /></a></div>
      </div>
      <button
        className="lg:hidden flex items-center justify-center mb-1 -translate-y-1 w-10 h-10 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="block relative w-5 h-5">
            <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 rotate-45"></span>
            <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></span>
          </span>
        ) : (
          <span className="block relative w-5 h-5">
            <span className="block bg-white w-full h-[2px] mb-[5px]"></span>
            <span className="block bg-white w-full h-[2px] mb-[5px]"></span>
            <span className="block bg-white w-full h-[2px]"></span>
            <span className="uppercase text-sm mx-auto text-center absolute left-1 -translate-x-3">menu</span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-full bg-blue text-white p-6 flex flex-col items-center justify-center shadow-lg transition-transform ease-linear duration-300 transform z-50">
          <button
            className="self-end absolute top-4 -translate-y-[2px] -translate-x-1 text-xl"
            onClick={() => setIsOpen(false)}>
            <span className="block relative w-5 h-5">
            <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 rotate-45"></span>
            <span className="absolute block bg-white w-full h-[2px] top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></span>
          </span>
          </button>
          {NAVBAR_LIST.map((obj, i) => (
            <Link className="text-white hover:underline underline-offset-2 hover:text-orange hover:scale-[1.04] duration-300 ease-linear opacity-[90%] md:text-xl text-base font-normal mb-4" to={obj.path}
              key={i} onClick={() => setIsOpen(false)}>
              {obj.tittle}
              
            </Link>
          ))}
           <div className="border lg:hidden max-h-[31px] max-w-[257px] w-full border-white rounded-[5px] flex justify-between">
            <input className="bg-transparent outline-none w-full ps-2 placeholder:text-white placeholder:text-[13px] text-[13px] text-white pe-3" type="" placeholder="Search by Keyword" />
            <div className="py-2 pe-[14px]"> <SEARCH_ICON /></div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
