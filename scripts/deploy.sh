#!/bin/env sh

echo "> Building application..."
npm run --silent build

echo "> Copying files..."
cp robots.txt dist/robots.txt
cp CNAME dist/CNAME

cd dist || exit

echo "> Deploying to GitHub Pages..."
git add -A
git commit -m 'deploy'

git push -f git@github.com:AndrewCrossan1/andrewcrossan1.github.io master:gh-pages

echo "> Deployment complete."
cd - || exit
