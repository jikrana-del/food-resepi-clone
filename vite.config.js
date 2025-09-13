// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/food-resepi-clone/',
  // base: process.env.NODE_ENV === "production" ? "/food-resepi-clone/" : "/",
  //  '/food-resepi-clone/',  // repo name yahin use karein

});

