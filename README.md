# Fresh Emotion

A plugin for [Fresh](https://github.com/denoland/fresh) that allows you to use
[Emotion](https://github.com/emotion-js/emotion) for styling. Doesn't use
`@emotion/react` but `@emotion/css` instead.

# Usage

1. In your `main.ts`, import the plugin:

   ```typescript
   import { emotionPlugin } from "https://deno.land/x/fresh_emotion/mod.ts";

   // Then use it with Fresh.
   await start(manifest, {
     plugins: [
       emotionPlugin(),
     ],
   });
   ```

1. In a Component, e.g. `components/MyComponent.tsx`:

   ```typescript
   import { css, cx } from "https://deno.land/x/fresh_emotion/mod.ts";

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
