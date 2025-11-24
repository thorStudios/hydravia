import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import { FaRegEye, FaRegHeart, FaRegCommentDots } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
const Blog = () => {
    return (
        <div className="py-12 sm:py-20">
            <div className="container">
                <div className="mx-auto py-4">
                    <h2 className="font-bold text-center text-5xl">Latest Insights</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={blog1} className="object-cover h-52 w-full" alt="" />
                            <div className="p-5">
                                <span className="block text-dark/60 font-medium text-sm">24 Nov 2025</span>
                                <h3 className="mt-3 font-bold text-lg line-clamp-2">
                                    <a href="#">How Clean Drinking Water Improves Your Family’s Health</a>
                                </h3>
                                <div className="flex mt-4 pt-4 gap-4 items-center leading-none text-sm border-t border-dark/10">
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegEye className='text-base' />35
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegHeart className='text-red-600 text-base' />20
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegCommentDots className='text-base text-primary' />15
                                    </span>
                                    <a href="#" className='text-secondary font-semibold ml-auto flex items-center justify-center gap-1 hover:text-dark'>
                                        Read More
                                        <IoArrowForwardOutline />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={blog2} className="object-cover h-52 w-full" alt="" />
                            <div className="p-5">
                                <span className="block text-dark/60 font-medium text-sm">23 Nov 2025</span>
                                <h3 className="mt-3 font-bold text-lg">
                                    <a href="#">The Importance of Using a Reliable Home Water Filter</a>
                                </h3>
                                <div className="flex mt-4 pt-4 gap-4 items-center leading-none text-sm border-t border-dark/10">
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegEye className='text-base' />35
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegHeart className='text-red-600 text-base' />20
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegCommentDots className='text-base text-primary' />15
                                    </span>
                                    <a href="#" className='text-secondary font-semibold ml-auto flex items-center justify-center gap-1 hover:text-dark'>
                                        Read More
                                        <IoArrowForwardOutline />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={blog3} className="object-cover h-52 w-full" alt="" />
                            <div className="p-5">
                                <span className="block text-dark/60 font-medium text-sm">22 Nov 2025</span>
                                <h3 className="mt-3 font-bold text-lg line-clamp-2">
                                    <a href="#">Everything You Should Know Before Buying a Water Purifier</a>
                                </h3>
                                <div className="flex mt-4 pt-4 gap-4 items-center leading-none text-sm border-t border-dark/10">
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegEye className='text-base' />35
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegHeart className='text-red-600 text-base' />20
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegCommentDots className='text-base text-primary' />15
                                    </span>
                                    <a href="#" className='text-secondary font-semibold ml-auto flex items-center justify-center gap-1 hover:text-dark'>
                                        Read More
                                        <IoArrowForwardOutline />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={blog4} className="object-cover h-52 w-full" alt="" />
                            <div className="p-5">
                                <span className="block text-dark/60 font-medium text-sm">21 Nov 2025</span>
                                <h3 className="mt-3 font-bold text-lg line-clamp-2">
                                    <a href="#">How Hydravia Ensures Pure Water Through Advanced Technology</a>
                                </h3>
                                <div className="flex mt-4 pt-4 gap-4 items-center leading-none text-sm border-t border-dark/10">
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegEye className='text-base' />35
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegHeart className='text-red-600 text-base' />20
                                    </span>
                                    <span className="flex gap-1.5 items-center">
                                        <FaRegCommentDots className='text-base text-primary' />15
                                    </span>
                                    <a href="#" className='text-secondary font-semibold ml-auto flex items-center justify-center gap-1 hover:text-dark'>
                                        Read More
                                        <IoArrowForwardOutline />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;