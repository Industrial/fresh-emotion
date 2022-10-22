import createEmotionServer from "@emotion/server/create-instance";
import createEmotion from "@emotion/css/create-instance";
import { type Plugin } from "$fresh/server.ts";

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
} = createEmotion({
  key: "css",
});

export function emotionPlugin(): Plugin {
  return {
    name: "emotion",
    render(context) {
      const res = context.render();
      const emotionServer = createEmotionServer(cache);
      const { css } = emotionServer.extractCritical(res.htmlText);

      return {
        scripts: [],
        styles: [
          {
            cssText: css,
          },
        ],
      };
    },
  };
}
