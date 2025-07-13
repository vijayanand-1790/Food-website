import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { FaHelicopter, FaRegThumbsUp } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { data } from "../Data/data";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="w-full bg-black text-white fixed top-0 left-0 z-10 border-b-2 border-neutral-600 shadow-2xl">
            <div className="max-w-7xl flex justify-between items-center mx-auto lg:px-0 px-5 py-2">
                <div className="flex md:gap-5 gap-2">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        <AiOutlineMenu size={23} />
                    </div>
                    <h1 className="md:text-3xl text-xl font-bold">Foodie</h1>
                </div>

                {/* <div className="flex items-center bg-slate-200 lg:w-[500px] md:w-[400px] w-[160px] pl-4 rounded-full py-2">
                    <FiSearch size={23}/>
                    <input
                        type="text"
                        placeholder="Search food"
                        className="bg-slate-200 px-2 focus:outline-none w-full"
                    />
                </div> */}
                {/* <div className="md:flex hidden gap-2 bg-black text-white px-3 rounded-xl py-1">
                    <h2 className="font-bold">Cart</h2>
                    <IoCartOutline size={28} />
                </div> */}
            </div>

            {/* Overlay */}
            <div className={menuOpen ? "w-full h-screen fixed z-10 bg-black/70 top-0 left-0" : "hidden"}></div>

            {/* side drawer menu */}
            <div className={menuOpen ? "bg-white text-black fixed h-screen md:w-[300px] w-[260px] top-0 left-0 z-10 duration-300 pl-5 pt-5" : "bg-white fixed h-screen w-[300px] top-0 -left-[100%] z-10 duration-300 "}>
                <AiOutlineClose size={28} className="absolute top-7 right-7 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                <h2 className="text-2xl pl-2 pt-3 font-bold">Foodie</h2>
                <ul className="pt-5 pl-4 space-y-5">
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <TbTruckDelivery size={35} />
                        Orders
                    </li>
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <MdFavorite size={35} />
                        Favorites
                    </li>
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <IoWalletSharp size={35} />
                        Wallet
                    </li>
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <IoMdHelpCircleOutline size={35} />
                        Help
                    </li>
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <IoIosPricetags size={35} />
                        Promotions
                    </li>
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <FaRegThumbsUp size={35} />
                        Best Ones
                    </li>
                    <li className="flex gap-3 md:text-xl text-lg font-semibold items-center">
                        <FaUserFriends size={35} />
                        Invite Friends
                    </li>
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;
