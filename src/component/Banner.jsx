// import BannerVideo from "../assets/banner-bg.mp4";
import BannerVideo from "../assets/banner-bg-2.mp4";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Banner() {
    return (
        <section>
            <div className="relative overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={BannerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-black/70 z-1"></div>

                <div className="relative z-2 py-20 container h-160 flex items-center">
                    <div className="max-w-2xl text-white space-y-5">
                        <h1 className="text-7xl font-bold mb-4">Smart Water <br/> <span className="text-secondary">Smart Living</span></h1>
                        {/* <h2 className="text-3xl font-semibold mb-4">Purity You Can See. Safety You Can Feel.</h2> */}
                        <p className="mb-12 text-lg">Hydravia supplies powerful and reliable purification systems suited for homes, offices, and commercial environments. Clean water, consistent performance, low maintenance.</p>

                        <Link to="/login" className="bg-secondary text-white px-5 py-3 rounded-md">View All <FaArrowRightLong size={16} className="inline-block ml-2" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
