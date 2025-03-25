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

# python
PYTHON_VERSION=3.12.9
export PYTHON_VERSION

export UV_VERSION="0.6.2"
export UV_UNMANAGED_INSTALL=$OPT_DIR/uv-$UV_VERSION
export UV_PYTHON_INSTALL_DIR=$OPT_DIR/python
export UV_LINK_MODE=copy
export UV_NO_CACHE=true
export UV_PYTHON_PREFERENCE=only-managed

PATH=$UV_UNMANAGED_INSTALL:$PATH

export VIRTUAL_ENV=$OPT_DIR/venv

# if the venv exists...
if [ -d $VIRTUAL_ENV ]; then
	PATH=$VIRTUAL_ENV/bin:$PATH
	source $VIRTUAL_ENV/bin/activate
fi

# local site-packages
LOCAL_SITE_PACKAGES=$VIRTUAL_ENV/lib/python$PY_VERSION_MAJOR.$PY_VERSION_MINOR/site-packages

PYTHONPATH=$LOCAL_SITE_PACKAGES:$PYTHONPATH

# local python source
# PYTHONPATH=$PROJECT_ROOT/something:$PYTHONPATH

export PYTHONPATH

export PYRIGHT_PYTHON_FORCE_VERSION="latest"

# check if python is in the path, and its the one in the venv
if [ "$(which python)" != "$VIRTUAL_ENV/bin/python" ]; then
	echo "WARNING: Python not in path, or not the one in the venv"
fi

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
