const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // defaultCommandTimeout: 1000, // 1 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
