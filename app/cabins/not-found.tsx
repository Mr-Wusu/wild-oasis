import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary-950 px-4 font-josefineSans text-primary-10">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 animate-pulse rounded-full bg-accent-500/5 blur-3xl md:h-80 md:w-80" />
        <div className="absolute right-1/4 bottom-1/3 h-72 w-72 animate-pulse rounded-full bg-primary-800/20 blur-3xl delay-1000 md:h-96 md:w-96" />

        {/* Floating "404" numbers */}
        <span className="absolute left-[10%] top-[20%] animate-float text-6xl font-bold text-primary-800/30 sm:text-7xl md:text-8xl lg:text-9xl">
          4
        </span>
        <span className="absolute right-[15%] top-[15%] animate-float-delayed text-6xl font-bold text-primary-800/30 sm:text-7xl md:text-8xl lg:text-9xl">
          0
        </span>
        <span className="absolute right-[20%] bottom-[25%] animate-float-slow text-6xl font-bold text-primary-800/30 sm:text-7xl md:text-8xl lg:text-9xl">
          4
        </span>
      </div>

      <div
        className="relative z-10 w-full max-w-100 text-center
                      sm:max-w-115 md:max-w-xl lg:w-116 min-:max-w-2xl"
      >
        <h1
          className="mb-4 text-7xl font-bold tracking-tight text-accent-500 animate-fadeIn
                       sm:text-8xl md:text-9xl lg:text-9xl min-:text-"
        >
          404
        </h1>

        <div
          className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-transparent via-accent-400 to-transparent
                        sm:mb-8 sm:w-32 md:mb-10 md:w-40"
        />

        <h2
          className="mb-4 text-2xl font-semibold text-accent-400 tracking-wide animate-fadeInSlow
                       sm:text-3xl md:text-4xl lg:text-4xl min-:text-5xl"
        >
          Cabin not found
        </h2>

        <p
          className="mx-auto mb-10 max-w-md text-base leading-relaxed text-primary-200 animate-fadeInSlower
                      sm:text-lg md:mb-12 md:max-w-lg min-:text-lg min-:max-w-xl"
        >
          This cabin doesn&apos;t exist in our records. It may have been
          removed, or you followed a broken trail.
        </p>

        <div className="flex flex-col gap-3 animate-fadeInSlower sm:flex-row sm:justify-center md:gap-4">
          <Link
            href="/cabins"
            className="group rounded-sm bg-accent-500 px-6 py-3 text-base font-medium text-primary-950 transition-all duration-300 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/20
                       sm:px-8 sm:py-3.5 md:px-10"
          >
            <span className="flex items-center justify-center gap-2">
              Browse all cabins
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-sm border border-primary-700 px-6 py-3 text-base font-medium text-primary-200 transition-all duration-300 hover:border-primary-600 hover:bg-primary-800 hover:text-primary-10
                       sm:px-8 sm:py-3.5 md:px-10"
          >
            Back home
          </Link>
        </div>

        <p className="mt-12 text-xs text-primary-600 animate-fadeInSlower sm:mt-16 md:text-sm">
          Error code: CABIN_NOT_FOUND
        </p>
      </div>
    </main>
  );
}
