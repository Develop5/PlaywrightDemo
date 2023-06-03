#!/bin/bash
echo "Pushing to main..."
git checkout main
git checkout framework
git push
git checkout main
echo "... finished"

