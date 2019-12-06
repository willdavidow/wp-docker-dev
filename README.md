# WP Docker Dev

### Overview
This is project is a simple and configurable (but slightliy opinionated) local dev setup for WordPress theme development that I've been using and decided to make configurable and release into the wild. 

### Getting Started

The base requirements to run development out of this project are:

```bash
NodeJS
Docker
Docker Compose
```

Assumption: you either have node set up already or know how to set it up. I'm not going to provide steps on how to do this.

As for Docker and Docker Compose, those should be relatively simple to get going. Simple steps for Mac users:

1. If you don't already have [homebrew](https://brew.sh/) installed, please install it: [Homebrew](https://brew.sh/). If you already have homebrew installed, skip to step 2.
2. In a terminal window, run `brew cask install docker` and `brew install docker-compose`. You need both. The Docker cask installs the Docker app that runs Docker and its associated services. Docker Compose is our command line utility.
3. Open the Docker desktop app, create a Docker account if you don't have on and/or login.
4. Once that's up and running, you're good to move forward with setting up the project.

### Setting Up Your Project

Open a terminal window and `cd` to the location where you've checked out this repository, then run `npm i` to install all project dependencies.

Next, type `npm run setup`. In this guided process you're going to pick a package name (generally all-lowercase-and-hyphenated, no spaces allowed), a theme name (this can have spaces), and you can enter a developer name and url.

Once that step has completed succesfully you'll