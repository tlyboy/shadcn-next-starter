import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Rust port of the React Compiler — runs natively in Turbopack instead of
    // going through Babel, so babel-plugin-react-compiler is no longer needed.
    turbopackRustReactCompiler: true,
  },
}

export default nextConfig
