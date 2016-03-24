#!/bin/bash

git add configuration.js
git commit -m 'update server config file'
git tag -a 'simar-config-1' -f -m 'update tag simar-config-1'
git push origin master --tags -f
