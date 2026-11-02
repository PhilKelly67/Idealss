export default function About() {
  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* About Header */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-red-600 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm font-semibold mb-5 sm:mb-6">
          About Our Brand
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          More Than Furniture.
          <span className="block text-red-600 mt-2">
            A Statement of Living.
          </span>
        </h2>

        <p className="mt-6 sm:mt-8 text-neutral-400 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto px-2">
          We believe great furniture doesn't simply fill a room. It defines its
          character, creates comfort, and transforms everyday spaces into
          extraordinary experiences.
        </p>
      </div>

      {/* Brand Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-10 mt-16 sm:mt-20 md:mt-24 border-t border-neutral-800 pt-10 sm:pt-12">
        {/* Feature 1 */}
        <div className="text-center group">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6 transition-all duration-300 group-hover:w-20"></div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Timeless Design
          </h3>

          <p className="text-neutral-500 leading-7">Style beyond trends.</p>
        </div>

        {/* Feature 2 */}
        <div className="text-center group">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6 transition-all duration-300 group-hover:w-20"></div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Everyday Comfort
          </h3>

          <p className="text-neutral-500 leading-7">Beauty meets function.</p>
        </div>

        {/* Feature 3 */}
        <div className="text-center group sm:col-span-2 md:col-span-1">
          <div className="w-12 h-1 bg-red-600 mx-auto mb-6 transition-all duration-300 group-hover:w-20"></div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Considered Detail
          </h3>

          <p className="text-neutral-500 leading-7">Thought in every choice.</p>
        </div>
      </div>
    </div>
  );
}
