#!/bin/env sh

GREEN='\033[0;32m'
NC='\033[0m'

echo "> Building application..."
npm run build -s
# shellcheck disable=SC2059
printf "> ${GREEN}Build complete${NC}\n"

echo "> Copying files..."
cp robots.txt dist/robots.txt
cp CNAME dist/CNAME
# shellcheck disable=SC2059
printf "> ${GREEN}Copy complete${NC}\n"

cd dist || exit

# q: how do i format my echo with colour?
# a: https://stackoverflow.com/a/5947802/104380

echo "> Deploying to GitHub Pages..."
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AndrewCrossan1/andrewcrossan1.github.io master:gh-pages

# shellcheck disable=SC2059
printf "> ${GREEN}Deployment complete.${NC}\n"
exit
