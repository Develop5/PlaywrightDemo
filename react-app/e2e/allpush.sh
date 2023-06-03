#!/bin/bash
echo "Pushing to main..."
git checkout main
git merge framework
git push
git checkout framework
echo "... finished"

