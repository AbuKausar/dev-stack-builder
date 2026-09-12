import { brandGradient, brandGradientText } from "../constants/gradient";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* ===== Logo ===== */}
                <div className="order-2 md:order-1 flex items-center gap-2">
                    <div
                        className={`${brandGradient} w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm`}
                    >
                        DS
                    </div>
                    <span className={`${brandGradientText} font-semibold text-lg md:text-2xl md:font-bold`}>DevStack</span>
                </div>

                {/* ===== Desktop Nav Links ===== */}
                <div className="hidden md:flex md:order-2 items-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Technologies
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Projects
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        About
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Contact
                    </a>
                </div>

                {/* ===== Auth Buttons ===== */}
                <div className="order-3 flex items-center gap-3 md:gap-4">
                    <a href="#" className="text-gray-700 font-medium text-sm md:text-base">
                        Sign In
                    </a>
                    <button
                        className={`${brandGradient} text-white rounded-full font-medium px-4 py-1.5 text-sm md:px-5 md:py-2 md:text-base`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* ===== Mobile: Hamburger Icon ===== */}
                <button className="order-1 md:hidden text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;