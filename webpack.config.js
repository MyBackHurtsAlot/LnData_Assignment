// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/Index.js",
    output: {
        filename: "Bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // plugins: [new HtmlWebpackPlugin()],
    // devServer
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },

    module: {
        rules: [
            // CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // SCSS SASS
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
};
