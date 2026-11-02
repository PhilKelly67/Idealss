export default function Footer() {
  return (
    <div className="bg-[#111111] text-white border-t border-red-600/30 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="min-w-0">
            <h2 className="text-2xl font-bold">
              Ideal <span className="text-red-600">SOFAS</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 max-w-xs">
              Crafting spaces. Defining lifestyles. Furniture designed for
              modern living.
            </p>
          </div>

          {/* Explore */}
          <div className="min-w-0">
            <h3 className="font-semibold mb-4">Explore</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/living-room"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Living Room
                </a>
              </li>
              <li>
                <a
                  href="/bedroom"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Bedroom
                </a>
              </li>
              <li>
                <a
                  href="/dining"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Dining Room
                </a>
              </li>
              <li>
                <a
                  href="/office"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Office Furniture
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="min-w-0">
            <h3 className="font-semibold mb-4">Customer Care</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/contact"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/delivery"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Delivery & Returns
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Inspired */}
          <div className="min-w-0">
            <h3 className="font-semibold mb-4">Get Inspired</h3>

            <p className="text-sm text-gray-400 mb-4 leading-6 max-w-xs">
              Discover new collections and interior design ideas.
            </p>

            <a
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-colors duration-300 px-5 py-3 rounded-md font-medium text-sm max-w-full"
            >
              Explore Collections
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center text-sm text-gray-500">
          <p>© 2026 Ideal Sofas. All rights reserved.</p>

          <p>Designed for modern living.</p>
        </div>
      </div>
    </div>
  );
}
