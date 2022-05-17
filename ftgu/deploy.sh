set -e
cd dist
npm run build
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/papermashea/thesis.git gh-pages
rm -rf .git
cd -
