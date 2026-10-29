export default function About() {
  return (
    <div className="bg-black text-white px-6 py-24 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-red-600 uppercase tracking-[0.35em] text-sm font-semibold mb-6">
          About Our Brand
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          More Than Furniture.
          <span className="block text-red-600 mt-2">
            A Statement of Living.
          </span>
        </h2>

        <p className="mt-8 text-neutral-400 text-base md:text-lg leading-8 max-w-2xl mx-auto">
          We believe great furniture doesn't simply fill a room. It defines its
          character, creates comfort, and transforms everyday spaces into
          extraordinary experiences.
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3
              gap-10 mt-24 border-t border-neutral-800 pt-12"
      >
        <div className="text-center group">
          <div
            className="w-12 h-1 bg-red-600 mx-auto mb-6
                  transition-all duration-300 group-hover:w-20"
          ></div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Timeless Design
          </h3>

          <p className="text-neutral-500 leading-7">Style beyond trends.</p>
        </div>

        <div className="text-center group">
          <div
            className="w-12 h-1 bg-red-600 mx-auto mb-6
                  transition-all duration-300 group-hover:w-20"
          ></div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Everyday Comfort
          </h3>

          <p className="text-neutral-500 leading-7">Beauty meets function.</p>
        </div>

        <div className="text-center group">
          <div
            className="w-12 h-1 bg-red-600 mx-auto mb-6
                  transition-all duration-300 group-hover:w-20"
          ></div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Considered Detail
          </h3>

          <p className="text-neutral-500 leading-7">Thought in every choice.</p>
        </div>
      </div>
    </div>
  );
}
