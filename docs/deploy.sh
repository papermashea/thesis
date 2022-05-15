set -e
cd dist
npm run build
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/visualizedata/thesis.git master:gh-pages
rm -rf .git
cd -
