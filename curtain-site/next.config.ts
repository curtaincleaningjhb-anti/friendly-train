import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/services/rug-care", destination: "/services/persian-oriental-rug-care", permanent: true },
      { source: "/curtain-cleaning", destination: "/services/curtain-blind-cleaning", permanent: true },
      { source: "/blind-cleaning", destination: "/services/curtain-blind-cleaning", permanent: true },
      { source: "/mattress-cleaning", destination: "/services/mattress-sanitisation", permanent: true },
      { source: "/upholstery-cleaning", destination: "/services/upholstery-carpet-cleaning", permanent: true },
      { source: "/carpet-cleaning", destination: "/services/upholstery-carpet-cleaning", permanent: true },
      { source: "/fabric-protection", destination: "/services/master-guarding", permanent: true },
      { source: "/persian-rugs", destination: "/services/persian-oriental-rug-care", permanent: true },
      { source: "/offices", destination: "/sectors/corporate", permanent: true },
      { source: "/restaurants", destination: "/sectors/hotels", permanent: true },
      { source: "/retail", destination: "/sectors/corporate", permanent: true },
      { source: "/blog/curtain-cleaning-frequency", destination: "/guides/how-often-clean-curtains-johannesburg", permanent: true },
      { source: "/blog/onsite-savings", destination: "/advice/how-on-site-curtain-cleaning-works", permanent: true },
    ];
  },
};

export default nextConfig;
