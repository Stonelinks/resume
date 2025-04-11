#!/bin/bash
# set -ex

if [ "$0" = "$BASH_SOURCE" ]; then
	echo "This script must be sourced, not executed."
	exit 1
fi

export PROJECT_ROOT=$(pwd)
export PROJECT_NAME=resume
export HOMEDIR_STORE=$HOME/.$PROJECT_NAME
export OPT_DIR=$HOMEDIR_STORE/opt

# Figure out what OS we're running.
case $(uname -s) in
Darwin) OS=darwin ;;
Linux) OS=linux ;;
*)
	echo "Unsupported OS $(uname -s)"
	exit 1
	;;
esac

export OS

# Figure out what Arch
ARCH=$(uname -m)
case $ARCH in
x86_64) ARCH=x64 ;;
aarch64) ARCH=arm64 ;;
esac

export ARCH

# Go
export GO_VERSION=1.24.0

# Add go to PATH and configure GOROOT and GOPATH.
export GOROOT=$OPT_DIR/goroot
PATH=$GOROOT/bin:$PATH

export GOPATH=$OPT_DIR/go
if [ ! -d $GOPATH ]; then
	mkdir -p $GOPATH
fi

PATH=$PATH:$GOPATH/bin

# Node

# bun

# https://github.com/oven-sh/bun/releases
export BUN_VERSION=1.2.4

export BUN_INSTALL="$OPT_DIR/bun"
PATH=$BUN_INSTALL/bin:$PATH

PATH=$PROJECT_ROOT/node_modules/.bin:$PATH

chmod +x $PROJECT_ROOT/bin/*
PATH=$PROJECT_ROOT/bin:$PATH
export PATH

if [ -f secrets.sh ]; then
	source secrets.sh
fi
