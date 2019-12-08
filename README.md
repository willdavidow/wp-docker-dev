# WP Docker Dev

## Overview

This is project is a simple and configurable (but slightliy opinionated) local
dev setup for WordPress theme development that I've been using and decided to
make configurable and release into the wild.

### Getting Started

The base requirements to run development out of this project are:

- NodeJS
- Docker
- Docker Compose

As for Docker and Docker Compose, those should be relatively simple to get going.
Here are some basic steps for  Mac users:

1. If you don't already have [homebrew](https://brew.sh/) installed, please
install it: [Homebrew](https://brew.sh/). If you already have homebrew installed,
skip to step 2.
2. In a terminal window, run `brew cask install docker` and
`brew install docker-compose`. You need both. The Docker cask installs the Docker
app that runs Docker and its associated services. Docker Compose is our command
line utility.
3. Open the Docker desktop app, create a Docker account if you don't have on
and/or login.
4. Once that's up and running, you're good to move forward with setting up the project.

### Setting Up Your Project

Open a terminal window and `cd` to the location where you've checked out this
repository, then run `npm i` to install all project dependencies.

Next, type `npm run setup`. This command will gather some important information
from you via command line promps:

1. Package Name
This is a lowercase, hy-phen-ated (or_underscored) title to be used
in the base Wordpress theme files header comments.
2. Theme Name
This can be anything you want. Suggestion: use the non-hyphenated
or underscored version of your theme name, template file.
(ex. `back-to-the-future` would become `Back to the Future`)
3. Author Namej
Here you'd want to enter the name you'd like to appear in the
Author Name portion of the Wordpress theme header comments.
4. Author URI
A URL you'd like tied to your name/theme - shameless self-promotion
from within your theme is a good thing, right?

Now you're ready to kick things off. You're going to want to run a split terminal window (or two separate terminal windows), and run the following commands.

In the first terminal window, run `npm run docker:wp`. Once the server is up and running, you'll be able to hit [http://localhost:3000](http://localhost:3000) and you'll be prompted with the standard Wordpress first-run installation page and process.

In the second terminal window (after you've verified that the Wordpress instance is live in-browser), run `npm run dev`. This command does several things: it runs a process to copy all files from the `src` directory into a theme within the Wordpress folder, compiling the theme SCSS files into CSS and running Babel + Webpack on the theme JS file(s).

**Important Note**: All development should take place within the `src` directory. Never work in the Wordpress instance, as files there will be overwritten if you stop and restart the `npm run dev` command, or if you make changes to the same file(s) within the `src` directory. TL;DR the `src` directory is where you should work. Never `wp/wp-content/themes/{your-theme}`.

### Other Fun Stuff

For convenience, `npm run export-db` will generate a sql file for use when deploying your site to a live URL. This will help in moving your data more easily than dealing with SQL clients or phpMyAdmin.