import path from 'path';
import webpack from 'webpack';
import { BuildPath, Mode } from './config/build/types/config';
import { buildWebpacConfig } from './config/build/buildWebpackConfig';

const mode = 'development';
const isDev = mode === 'development' ? true : false;

const buildPath: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "index.html"),
}

const config: webpack.Configuration = buildWebpacConfig({mode, buildPath, isDev} )

export default config;