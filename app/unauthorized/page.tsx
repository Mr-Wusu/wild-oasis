import Link from "next/link";

export default function Unauthorized() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-950 px-4 font-josefineSans text-primary-10">
      <div
        className="w-full max-w-100 rounded-sm border border-primary-800 bg-primary-950 p-6 text-center shadow-lg transition-all duration-300 hover:border-primary-700
                      sm:max-w-115 sm:p-8
                      md:max-w-lg md:p-10
                      lg:w-116 lg:p-12
                      min-:max-w-2xl min-:p-14"
      >
        {/* Icon */}
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10
                        sm:h-20 sm:w-20 md:h-24 md:w-24"
        >
          <svg
            className="h-8 w-8 text-accent-400 sm:h-10 sm:w-10 md:h-12 md:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75v1.5m0 3h.008v.008H12v-.008zM16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="mb-3 text-xl font-semibold text-accent-500 tracking-wide
                       sm:text-2xl md:text-3xl lg:text-3xl min-:text-4xl"
        >
          Access Restricted
        </h1>

        {/* Description */}
        <p
          className="mb-8 text-base text-primary-200 leading-relaxed
                      sm:text-lg min-:text-lg"
        >
          You do not have permission to view this page. Please log in with an
          authorized account or return to safety.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:gap-4">
          <Link
            href="/login"
            className="rounded-sm bg-accent-500 px-4 py-2.5 text-sm font-medium text-primary-950 transition hover:bg-accent-400
                       sm:px-5 sm:py-3 sm:text-base md:px-6"
          >
            Log in
          </Link>

          <Link
            href="/"
            className="rounded-sm border border-primary-700 px-4 py-2.5 text-sm font-medium bg-transparent text-primary-10 transition hover:bg-primary-8 hover:text-primary-1 
                       sm:px-5 sm:py-3 sm:text-base md:px-6"
          >
            Back home
          </Link>
        </div>

        <p className="mt-6 text-xs text-primary-600 md:mt-8">
          Error code: 403_FORBIDDEN
        </p>
      </div>
    </main>
  );
}
