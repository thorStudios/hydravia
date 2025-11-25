import { Link } from "react-router";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoWater } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-dark border-t text-white/80 pt-7.25 lg:pt-11">
      <div className="container">
        <div className="flex flex-wrap items-start justify-between -mx-3.75">
          <div className="px-3.75 mt-9 w-full lg:w-3/12">
            <Link to="/" className="flex gap-2 items-center z-50">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-linear-to-r from-primary to-secondary text-3xl text-white">
                <IoWater />
              </div>
              <h1 className="text-2xl font-bold text-white">Hydravia</h1>
            </Link>
            <p className="mt-4">Enjoy cleaner, fresher water with Hydravia’s advanced filtration technology, designed to remove harmful impurities while preserving the minerals your family needs.</p>
          </div>
          <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
            <h2 className="text-white font-semibold text-xl">Quick Links</h2>
            <ul className="space-y-4 mt-4">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="#" className="hover:text-white">About Us</Link></li>
              <li><Link to="#" className="hover:text-white">Accessories</Link></li>
              <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
            <h2 className="text-white font-semibold text-xl">Our Products</h2>
            <ul className="space-y-4 mt-4">
              <li><Link to="#" className="hover:text-white">Whole-House Water Filters</Link></li>
              <li><Link to="#" className="hover:text-white">Kitchen Water Purifiers</Link></li>
              <li><Link to="#" className="hover:text-white">Under-Sink Filters</Link></li>
              <li><Link to="#" className="hover:text-white">Replacement Cartridges</Link></li>
            </ul>
          </div>
          <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
            <h2 className="text-white font-semibold text-xl">Information</h2>
            <ul className="space-y-4 mt-4">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>
          <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
            <h2 className="text-white font-semibold text-xl">Follow Us</h2>
            <ul className="space-y-3.5 mt-4 min-w-40">
              <li>
                <a href="#" className="hover:text-white flex transition-all duration-300 items-center gap-2 hover:tracking-widest">
                  <TiSocialFacebookCircular className="text-2xl text-white" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex transition-all duration-300 items-center gap-2 hover:tracking-widest">
                  <TiSocialLinkedinCircular className="text-2xl text-white" />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex transition-all duration-300 items-center gap-2 hover:tracking-widest">
                  <TiSocialInstagramCircular className="text-2xl text-white" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white flex transition-all duration-300 items-center gap-2 hover:tracking-widest">
                  <TiSocialTwitterCircular className="text-2xl text-white" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 lg:mt-20 py-7.5 border-t border-white/20">
          <p className="text-accent">© 2025 Hydravia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
