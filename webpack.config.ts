import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPath, Mode } from './config/build/types/config';
import { buildWebpacConfig } from './config/build/buildWebpackConfig';


export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    
    const buildPath: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "index.html"),
    }
    
    const config: webpack.Configuration = buildWebpacConfig({mode, buildPath, isDev, port: PORT} )

    return config;
};