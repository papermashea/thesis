set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/papermashea/thesis.git gh-pages
rm -rf .git
cd -
