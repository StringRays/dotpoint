import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: 'http://localhost:3000/dotpoint/#/',
    specPattern: "cypress/e2e/**/**.spec.{js,jsx,ts,tsx}"
  },
});
