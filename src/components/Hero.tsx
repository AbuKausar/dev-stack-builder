import { brandGradient, brandGradientText } from "../constants/gradient";
import bannerImage from "../assets/banner-stack.png";

function Hero() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left Side - Hero Content */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl text-center sm:text-start md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Build Your Ideal
                            <br />
                            <span className={brandGradientText}>
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-gray-500 text-base text-center sm:text-start md:text-lg leading-relaxed">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits
                            your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-row gap-4">
                            <button className={`btn ${brandGradient} border-none text-white flex-1 sm:flex-none`}>
                                Explore Technologies
                            </button>

                            <button className="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 flex-1 sm:flex-none">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Hero Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={bannerImage}
                            alt="Development technology illustration"
                            className="w-full md:w-80 lg:w-96"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;