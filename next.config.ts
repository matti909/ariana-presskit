import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    implementation: "sass-embedded",
  }
};

export default nextConfig;
