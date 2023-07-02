#!/bin/bash
echo "Pushing to main..."
git checkout main
echo "...merging..."
git merge framework
git push
git checkout framework
echo "... finished. Going back to the original branch"



