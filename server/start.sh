#!/bin/bash

# Start TypeScript watch mode in the background
yarn tsc -w &

# Start nodemon
yarn nodemon
