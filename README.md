# Fresh Emotion

A plugin for [Fresh](https://github.com/denoland/fresh) that allows you to use
[Emotion](https://github.com/emotion-js/emotion) for styling.

# Usage

- Add this to your `import_map.json`:

  ```json
  "@emotion/css/create-instance": "https://esm.sh/@emotion/css/create-instance",
  ```

- Create a file in your project e.g. `emotion.ts`. This file will create the
  emotion instance and you can use it throughout your project.

  ```typescript
  import createEmotion from "@emotion/css/create-instance";

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
  ```

- In your `main.ts`, import the plugin:

  ```typescript
  import { cache } from "./emotion.ts";
  import { emotionPlugin } from "./lib/fresh/emotion.ts";
  ```

- Then use it with Fresh.

  ```typescript
  await start(manifest, {
    plugins: [
      emotionPlugin({
        cache,
      }),
    ],
  });
  ```

- In a Component, e.g. `components/MyComponent.tsx`:

  ```typescript
  import { css, cx } from "../emotion.ts";

  export function MyComponent() {
    return (
      <div
        className={cx(
          css({
            color: "yellow",
            backgroundColor: "hotpink",
          }),
        )}
      >
        <p>CSS-in-Fresh!</p>
      </div>
    );
  }
  ```
