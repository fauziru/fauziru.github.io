#!/bin/bash
# abort on errors
set -e
# build
# navigate into the build output directory
npm run build

# npx workbox injectManifest workbox-config.js

cd dist
#if you are deploying to a custom domain
#echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy v0.1'
git push -f git@github.com:fauziru/fauziru.github.io.git master:main
cd -
