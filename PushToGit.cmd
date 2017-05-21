@echo off
title PushToGit
git add *
git pull
set /P desc=Describe your commit: 
git commit -m %desc%
echo Done!
pause