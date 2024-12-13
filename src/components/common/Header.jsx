import React, { useState, useEffect } from "react";
import { NAVBAR_LIST } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { SEARCH_ICON } from "../../utils/icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate
  const toggleNavigate = (link) => {
    navigate(link)
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
    <nav className="flex flex-col bg-blue w-full justify-between items-center px-4 relative z-50">
      <div className="flex justify-between pb-[13px] items- w-full max-w-[1180px]">
        <div className="hidden pt-[44px] lg:flex justify-between gap-6 items-center">
          {NAVBAR_LIST.map((obj, i) => (
            <a className="text-white opacity-[90%] hover:underline decoration-[1.5px] underline-offset-2 duration-300 ease-linear text-[13px] font-normal"
              onClick={() => toggleNavigate(obj.id)} href={obj.link} key={i}> {obj.tittle}
            </a>
          ))}
        </div>
        <div className="border max-h-[31px] mt-[27px] border-white rounded-[5px] flex justify-between">
          <input className="bg-transparent max-w-[257px] outline-none w-full ps-2 placeholder:text-white placeholder:text-[13px] text-[13px] text-white pe-3" type="" placeholder="Search by Keyword" />
          <div className="py-2 pe-[14px]"> <SEARCH_ICON /></div>
        </div>
      </div>
      <div className="hidden lg:block">

      </div>
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 text-4xl text-white rounded"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-full bg-blue text-white p-6 flex flex-col items-center justify-center shadow-lg transition-transform ease-linear duration-300 transform z-50">
          <button
            className="self-end absolute top-4 text-4xl"
            onClick={() => setIsOpen(false)}>
            ✖
          </button>
          {NAVBAR_LIST.map((obj, i) => (
            <a
              className="text-white hover:underline underline-offset-2 hover:scale-[1.04] duration-300 ease-linear opacity-[90%] text-base font-normal mb-4"
              href={obj.link}
              key={i}
              onClick={() => setIsOpen(false)}>
              {obj.tittle}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
