#!/bin/bash
echo ">>>>>  Pushing to main..."
git checkout main
echo ">>>>>  ...Merging..."
git merge framework
git push
git checkout framework
echo ">>>>>  ... Finished. Going back to the original branch"



