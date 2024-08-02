import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader({mode}: BuildOptions) {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      // TODO: Объект options при необходимости можно перенести в корневой файл babel.config.json, например для jest
      options: {
        presets: [
          "@babel/preset-env", 
          "@babel/preset-typescript",
          [
            "@babel/preset-react", 
            {
              runtime: isDev  ? 'automatic' : 'classic',
            }
          ]
        ],
        // TODO: Добавляя или удаляя plugins мы можем добавлять или удалять тесты(data-testid) в сборке
        plugins: [
          [
            removeDataTestIdBabelPlugin,
            {
              props: ['data-testid']
            }
          ]
        ]
      }
    }
  }
}