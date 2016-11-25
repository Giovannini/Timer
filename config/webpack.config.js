module.exports = {
    entry: "./client/scripts/index.ts",
    output: {
        filename: "client.js",
        path: __dirname + "/../public/javascript"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map-loader",

    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader", exclude: /node_modules/ }
        ]
    },
};
