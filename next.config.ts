const withTM = require("next-transpile-modules")([
    "antd",
    "rc-util",
    "rc-pagination",
    "rc-picker", // <-- new
    "rc-select", // Antd Select depends on this
    "rc-dialog", // Modal/Dialog support
    "rc-field-form", // Form support
    "rc-input-number", // InputNumber support
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
        "antd",
        "rc-util",
        "rc-pagination",
        "rc-picker",
        "rc-select",
        "rc-dialog",
        "rc-field-form",
        "rc-input-number",
    ],
     eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withTM(nextConfig);
