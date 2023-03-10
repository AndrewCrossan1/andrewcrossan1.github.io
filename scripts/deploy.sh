#!/bin/env sh

GREEN='\033[0;32m'
NC='\033[0m'

echo "> Building application..."
npm run build > /dev/null || exit
# shellcheck disable=SC2059
printf "> ${GREEN}Build complete${NC}\n"

echo "> Copying files..."
cp robots.txt dist/robots.txt
cp CNAME dist/CNAME

# shellcheck disable=SC2059
printf "> ${GREEN}Copy complete${NC}\n"

cd dist || exit

echo "> Uploading files to CDN..."
s3cmd rm s3://portfolio-cdn/css --recursive --force # Purge old files
s3cmd rm s3://portfolio-cdn/js --recursive --force # Purge old files
s3cmd sync . s3://portfolio-cdn # Upload new files

echo "> Deleting irrelevant files..."
# Delete CNAME, robots, pages
s3cmd del s3://portfolio-cdn/CNAME
s3cmd del s3://portfolio-cdn/robots.txt
s3cmd del s3://portfolio-cdn/index.html
s3cmd del s3://portfolio-cdn/about.html
s3cmd del s3://portfolio-cdn/sitemap.xml
s3cmd del s3://portfolio-cdn/favicon.ico

# Set the correct content type for the files
s3cmd modify --add-header="Content-Type: text/css" s3://portfolio-cdn/css/*.css
s3cmd modify --add-header="Content-Type: text/javascript" s3://portfolio-cdn/js/*.js
s3cmd modify --add-header="Content-Type: font/ttf" s3://portfolio-cdn/fonts/*.ttf

# Make absolutely everything public (Permission wise not header)
s3cmd setacl s3://portfolio-cdn --acl-public --recursive

# shellcheck disable=SC2059
printf "> ${GREEN}Upload complete${NC}\n"

echo "> Deploying to production..."
git init
git add -A
git commit -m "Deploy to production"

git push -f git@github.com:AndrewCrossan1/andrewcrossan1.github.io master:gh-pages

# shellcheck disable=SC2059
printf "> ${GREEN}Deployment complete.${NC}\n"
exit
