// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  staticAssets: {
    paths: ["assets/"], // This copies the entire assets folder to the build
  }
});
