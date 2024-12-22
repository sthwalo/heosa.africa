const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    // ... your existing configuration
    plugins: [
        new BundleAnalyzerPlugin({
            // Optional: You can configure the analyzer to open in a new tab, etc.
            openAnalyzer: true,
        }),
    ],
};