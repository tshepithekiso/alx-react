const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Load CSS files
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Handle image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Preserve original path and name
                            outputPath: 'assets/', // Output images to assets folder
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        // Optimize images
        minimize: true,
    },
};
