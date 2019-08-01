#!/bin/bash

EXAMPLE_NAME=$1

command -v sudo &&

yarn concurrently --kill-others "yarn tsc:compile:watch" "yarn ssat 'yarn workspace $EXAMPLE_NAME develop:cypress' http://localhost:8000 cy:open"