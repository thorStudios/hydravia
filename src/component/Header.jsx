import { AiFillTikTok } from "react-icons/ai";
import { FaCartArrowDown, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosMail } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import purifire1 from "../assets/images/purifire-1.jpg";
import purifire2 from "../assets/images/purifire-2.jpg";


import { Link } from "react-router";
import logo from "../assets/images/logo.jpeg";

export default function Header() {
  return (
    <>
      <header>
        <div className="bg-primary text-white py-2">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <a href="#">
                  <MdFacebook size={20} />
                </a>
                <a href="#">
                  <FaInstagramSquare size={20} />
                </a>
                <a href="#">
                  <FaXTwitter size={20} />
                </a>
                <a href="#">
                  <AiFillTikTok size={20} />
                </a>
              </div>
              <div className="flex gap-5">
                <a href="#" className="flex items-center gap-2">
                  <IoIosMail size={20} />
                  <span>example@me.com</span>
                </a>
                <a href="#" className="flex items-center gap-2">
                  <FaPhoneAlt size={16} />
                  <span>+31612345678</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between items-center relative">

            <Link to="#" className="logo">
              <img src={logo} className="w-20" alt="Logo image" />
            </Link>
            <nav>
              <ul className="flex gap-8">
                <li className="h-20 flex items-center"><Link to="#">Menu</Link></li>

                <li className="relative group flex justify-between gap-5 items-center h-20">
                  <Link to="#">Sub Menu</Link>
                  <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-400 ease-linear" size={16} />

                  <ul className="absolute top-full left-0 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 transition-all duration-400 ease-linear  min-w-40 rounded-b-md ">
                    <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                    <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                    <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                    <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                    <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                  </ul>
                </li>

                <li className="group flex justify-between gap-5 h-20 items-center">
                  <Link to="#">Mega Menu</Link>
                  <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-400 ease-linear" size={16} />

                  <div className="w-full bg-white absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 transition-all duration-400 ease-linear">
                    <div className="grid grid-cols-4 gap-5">
                      <div className="px-10 pt-8">
                        <h3 className="px-3 font-semibold text-xl mb-4">Quick Link</h3>
                        <ul className="space-y-5">
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                        </ul>
                      </div>
                      <div className="px-10 pt-8">
                        <h3 className="px-3 font-semibold text-xl mb-4">Quick Link</h3>
                        <ul className="space-y-5">
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                          <li><Link className="py-1 px-3 block hover:bg-primary hover:text-white" to="#">Submenu</Link></li>
                        </ul>
                      </div>
                      <div>
                        <img src={purifire1} alt="Purifire 1" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <img src={purifire2} alt="Purifire 1" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </li>

                <li className="h-20 flex items-center"><Link to="#">Menu</Link></li>
                <li className="h-20 flex items-center"><Link to="#">Menu</Link></li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <Link to="/login" className="bg-primary text-white px-5 py-2 rounded-md">Login <FaArrowRightLong size={16} className="inline-block ml-2" /></Link>
              <button className="relative h-10 w-10 bg-dark rounded-full flex justify-center items-center">
                <FaCartArrowDown size={20} className="text-white" />
                <span className="h-5 w-5 absolute -right-2 -top-1 bg-primary text-white flex items-center justify-center rounded-full">2</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
