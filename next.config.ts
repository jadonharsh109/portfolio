import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // three.js / react-three-fiber ship modern ESM that benefits from
  // being transpiled by Next's compiler.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
