import { BuildOptions } from './types/types';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // TODO: если раздавать статику через nginx то надо делать проксирование на Index.html
    historyApiFallback: true,
    hot: true
  }
}