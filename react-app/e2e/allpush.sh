#!/bin/bash
echo "Pushing to main..."
git checkout main
echo "...merging..."
git merge playground
git push
git checkout playground
echo "... finished. Going back to the original branch"



