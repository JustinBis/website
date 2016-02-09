#!/usr/bin/env bash
#
# This script will run the jade and sass compilers in listener mode
# with both outputting to stdout

sass --watch src/stylesheets:build/css &
jade --watch src/jade/index.jade -o build &