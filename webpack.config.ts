import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {WebpackManifestPlugin} from 'webpack-manifest-plugin';
import options  from './public/manifest.json';

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'singletonStyleTag' },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                use: ['json-loader'],
                type: 'javascript/auto',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|jpg|png|svg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            '@': path.resolve(__dirname, ''),
            '*': path.resolve(__dirname, 'src/*'),
        },
        extensions: ['', '.tsx', '.ts', '.js', '.json', '.scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './public/index.html',
            favicon: './public/favicon.ico',
            manifest: './public/manifest.json',
        }),
        new WebpackManifestPlugin(options),
    ],
    devServer: {
        historyApiFallback: true,
        static: './build',
        compress: true,
        allowedHosts: ['http://3.27.130.204/'],
        port: 2000,
    },
}