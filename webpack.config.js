const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    // ... your existing configuration
    module: {
        rules: [
            // Other rules...
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]', // Customize the output filename
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            // Optional: You can configure the analyzer to open in a new tab, etc.
            openAnalyzer: true,
        }),
    ],
};