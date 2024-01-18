import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   server: {
      // this is basicalyl a key value pair that says whenever we get a an api with that key
      // that means we are requesting from such and such urls.
      // This value from the key will get appended to that api route
      // this is called doing proxy
      // by using this method, server will think it is from the same origin.
      // during production change it to the production url
      proxy: {
         "/api": "http://localhost:3000",
      },
   },
   plugins: [react()],
});
