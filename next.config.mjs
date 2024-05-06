/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "y.qq.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "qpic.y.qq.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
