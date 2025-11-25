import bg1 from '../assets/images/cta-bg.jpg'
const Cta = () => {
    return (
        <section className="bg-primary py-12 sm:py-24 relative z-10">
            <div className="container">
                <div className='max-w-2xl'>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">Enjoy Cleaner, Safer, Healthier Water Every Day</h2>
                    <p className="mt-3 text-lg text-white">Join our Hydravia community and get water‑care tips, product updates, and special discounts delivered to your inbox.</p>
                    <div className="mt-6 sm:mt-8 flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 rounded-l-md border border-slate-200 px-4 py-3 text-white placeholder-white border-r-0 focus:outline-0"
                        />

                        <button className="bg-white transition-all duration-300 text-dark font-semibold px-6 py-2 rounded-r-md cursor-pointer hover:bg-dark hover:text-white">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-full bg-cover bg-center absolute -z-10 right-0 bottom-0 w-[40%] bg-blend-multiply" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute -left-0.5 top-0 h-full w-full bg-linear-to-r from-primary"></div>
            </div>
        </section>
    );
};

export default Cta;