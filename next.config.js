/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
  });

const nextConfig =withPWA ({
    images:{
        domains:[
            "camo.githubusercontent.com",
            "firebasestorage.googleapis.com",
            "i.pinimg.com",
            "images.pexels.com"
        ]
    }
})

module.exports = nextConfig
