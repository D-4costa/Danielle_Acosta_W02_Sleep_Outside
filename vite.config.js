import { resolve } from "path";

export default {
  root: "src",
  preview: {
    allowedHosts: [
      "danielle-acosta-w02-sleep-outside.onrender.com"
    ]
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html")
      }
    }
  }
};
