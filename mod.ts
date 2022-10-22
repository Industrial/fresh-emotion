import createEmotionServer from "@emotion/server/create-instance";
import { type EmotionCache } from "@emotion/cache";
import { type Plugin } from "$fresh/server.ts";

export type EmotionPluginOptions = {
  cache: EmotionCache;
};

export function emotionPlugin({ cache }: EmotionPluginOptions): Plugin {
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
