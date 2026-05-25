/** Fix broken Node localStorage polyfill (--localstorage-file without path) */
if (
  typeof globalThis.localStorage !== "undefined" &&
  typeof globalThis.localStorage?.getItem !== "function"
) {
  const noopStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    get length() {
      return 0;
    },
  };
  globalThis.localStorage = noopStorage;
  globalThis.sessionStorage = noopStorage;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
