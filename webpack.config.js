// TODO add eslint

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {

    mode: process.env.NODE_ENV,
    module: {

        rules: [

            {

                test: /\.vue$/,
                loader: 'vue-loader',
                options: {

                    hotReload: !isProd

                }

            },
            {

                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)

            },
            {

                test: /\.css$/,
                use: [

                    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                    {

                        loader: 'css-loader',
                        options: {

                            modules: true,

                        }

                    }

                ]

            }

        ]

    },
    plugins: [

        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: 'style.css' })

    ]

}
