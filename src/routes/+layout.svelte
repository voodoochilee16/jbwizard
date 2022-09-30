<slot></slot>

<style>


    /*
  1. Use a more-intuitive box-sizing model.
*/
:global(*, *::before, *::after) {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
:global(*) {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
:global(html), :global(body) {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
:global(body) {
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
:global(img, picture, video, canvas, svg) {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
:global(input, button, textarea, select) {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
:global(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
:global(#root, #__next) {
  isolation: isolate;
}
</style>