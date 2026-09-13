
function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-8 md:py-16">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:grid md:grid-cols-5 md:gap-10">

          {/* Brand & Description */}
          <div className="flex flex-col items-center gap-4 md:col-span-2 md:items-start">
            
            {/* Brand */}
            <div className="flex items-center gap-2">
              {/* DS Badge */}
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-violet-600">
                <span className="text-xs font-extrabold text-white">
                  DS
                </span>
              </div>

              {/* Brand Name */}
              <div className="text-lg font-bold text-slate-900">
                Dev{" "}
                <span className="font-extrabold text-pink-600">
                  Stack
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md text-center text-sm leading-5 text-gray-500 md:text-left">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-1 md:pt-2">
              <a
                href="#"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                GitHub
              </a>

              <span className="text-gray-300">•</span>

              <a
                href="#"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                Twitter
              </a>

              <span className="text-gray-300">•</span>

              <a
                href="#"
                className="text-sm text-gray-600 transition hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className=" hidden md:flex flex-col  gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Home
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="hidden md:flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                About
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="hidden md:flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex w-full items-center justify-between border-t border-gray-100 pt-6 md:mt-14 md:pt-8">
          
          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-gray-400 transition hover:text-gray-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-gray-400 transition hover:text-gray-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;