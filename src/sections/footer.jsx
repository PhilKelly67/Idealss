export default function Footer() {
  return (
    <div className="bg-[#111111] text-white border-t border-red-600/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4 gap-10"
        >
          <div>
            <h2 className="text-2xl font-bold">
              Ideal <span className="text-red-600">SOFAS</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Crafting spaces. Defining lifestyles. Furniture designed for
              modern living.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/living-room"
                  className="hover:text-red-500 transition-colors"
                >
                  Living Room
                </a>
              </li>
              <li>
                <a
                  href="/bedroom"
                  className="hover:text-red-500 transition-colors"
                >
                  Bedroom
                </a>
              </li>
              <li>
                <a
                  href="/dining"
                  className="hover:text-red-500 transition-colors"
                >
                  Dining Room
                </a>
              </li>
              <li>
                <a
                  href="/office"
                  className="hover:text-red-500 transition-colors"
                >
                  Office Furniture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/delivery"
                  className="hover:text-red-500 transition-colors"
                >
                  Delivery & Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-red-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Inspired</h3>
            <p className="text-sm text-gray-400 mb-4">
              Discover new collections and interior design ideas.
            </p>
            <a
              href="/collections"
              className="inline-flex items-center gap-2 bg-red-600
                 hover:bg-red-700 transition-colors
                 px-5 py-3 rounded-md font-medium text-sm"
            >
              Explore Collections
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div
          className="mt-12 border-t border-white/10 pt-6
                flex flex-col sm:flex-row gap-3
                justify-between text-sm text-gray-500"
        >
          <p>© 2026 Ideal Sofas. All rights reserved.</p>
          <p>Designed for modern living.</p>
        </div>
      </div>
    </div>
  );
}
