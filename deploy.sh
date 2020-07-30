#!/bin/sh

if [ "$(git status -s)" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Pushing to GitHub (master)"
git push origin master

echo "Checking out gh-pages branch"
git checkout gh-pages

echo "Updating gh-pages branch"
git rebase master

echo "Pushing to GitHub (gh-pages)"
git push origin gh-pages

echo "Checking out master branch"
git checkout master