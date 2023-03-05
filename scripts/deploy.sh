#!/bin/env sh
# This script is used to deploy the application to the server
# It is called by the CI/CD pipeline
# It is assumed that the server is already configured with the correct environment variables

# Build the application
npm run build

# Add robots.txt to the dist folder
cp robots.txt dist/robots.txt

cd dist || exit

git add -A
git commit -m 'deploy'

git push -f git@github.com:AndrewCrossan1/andrewcrossan1.github.io master:gh-pages

cd - || exit
