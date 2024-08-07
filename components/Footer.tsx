export function Footer() {
  return (
    <span className="flex items-center gap-4 justify-center my-16">
      <a
        href="https://www.cosmicjs.com?utm_source=cosmic-podcast-network"
        target="_blank"
        aria-label="Cosmic"
        title="Cosmic"
        rel="noreferrer"
        className="ml-2 flex gap-4"
      >
        <span className="flex items-center text-sm"> Powered by</span>
        <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-gray-700 dark:fill-gray-100"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        ></path>
      </svg>
      </a>
    </span>
  );
}
