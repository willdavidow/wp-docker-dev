# WP Docker Dev

## Overview

This is project is a simple and configurable (but slightliy opinionated) local
dev setup for WordPress theme development. I've been using this mysql and
decided to make configurable and release into the wild.

### Getting Started

The base requirements to run development out of this project are:

- NodeJS
- Docker
- Docker Compose

### Project Structure

The structure of this project is important to understanding how theme development takes place.

**Important Note**: All development should take place within the `src` directory. Never work in the Wordpress instance, as files there will be overwritten if you stop and restart the `npm run dev` command, or if you make changes to the same file(s) within the `src` directory. TL;DR the `src` directory is where you should work. Never `wp/wp-content/themes/{your-theme}`.

```
- wp-docker-dev
| /scripts
| /src
|  /js
|  /scss
```

#### scripts

You won't need to make any changes in this directory, but the scripts in here are used to move files around, compile things and export databases.

#### src

This is the directory where all your theme development should take place. Its contents will be copied into your Wordpress themes folder, and with the `dev` **npm** script running it will monitor all files for changes and move them over as-needed.

**Important Note**: I can't stress enough that all theme development should take place within the `src` directory. Never work in the Wordpress (`/wp-content/themes/{your-theme}`) instance. Files in the Wordpress instance will be overwritten if you stop and restart the `dev` **npm** command, or when you make changes to the same file(s) within the `src` directory.

*TL;DR* The `src` directory is where you should work. Always. Never `/wp-content/themes/{your-theme}`.

#### src/js

This is where your Javascript should be developed. It will get compiled with **babel** and **webpack**. You can install packages and include them just how you would with any modern JS project.

#### src/scss

This is where you styles should be developed. It will get compiled and moved to the project theme directory every time you save changes.

#### General /src directory information

The `dev` and `build` npm scripts are set up to look for changes in in any directories within the `/src` directory. The current list of file extensions it will listen for and copy-over includes: `php`, `inc`, `png`, `jpg`, `gif`, and `svg`. If you need other file types copied over, you'll need to add them to the `dev` and `build` scripts in the `/scripts` folder. **Note** `css` and `js` are intentionally excluded, as those are copied over during compilation from webpack and node-sass.

### Homebrew, Docker and docker-compose

You'll need a functioning Docker environment (docker service running). As well
as docker-compose in order to bootstrap using `docker-compose.yml` files.

These instructions are (to me) the simplest way to do that on a Mac. If you're
a Docker expert (I'm not... yet), I'm sure there are more efficient ways to avoid
using the Docker desktop app.

1. If you don't have [homebrew](https://brew.sh/) installed, install it:
[Homebrew](https://brew.sh/). If you already have homebrew installed,
skip to step 2.
2. In a terminal window, run `brew cask install docker` and
`brew install docker-compose`. You need both. The Docker cask installs the Docker
app that runs Docker and its associated services. Docker Compose is our command
line utility.
3. Open the Docker desktop app, create a Docker account if you don't have on
and/or login. Once that's complete, you'll have the Docker service ready for
action.

### Setting Up Your Project

Open a terminal window and `cd` to the location where you've checked out this
repository, then run `npm i` to install all project dependencies.

Next, type `npm run setup`. This command will gather some important information
from you via command line promps:

1. **Package Name**: This is a lowercase, hy-phen-ated (or_underscored) title to be used
in the base Wordpress theme files header comments.
2. **Theme Name**: This can be anything you want. Suggestion: use the non-hyphenated
or underscored version of your theme name, template file.
(ex. `back-to-the-future` would become `Back to the Future`)
3. **Author Name**: Here you'd want to enter the name you'd like to appear in the
Author Name portion of the Wordpress theme header comments.
4. **Author URI**: A URL you'd like tied to your name/theme - shameless self-promotion
from within your theme is a good thing, right?

Now you're ready to kick things off. Open up a split terminal window (or two separate terminal windows), and run the following commands.

In the first terminal window, run `npm run docker:wp`. This command runs `docker-compose up` (in attached mode - keeping the server output running). On first-run, it will pull down any necessary packages and set up your containers. Once docker-compose is done doing it's thing, you'll be able to hit [http://localhost:3000](http://localhost:3000) and you'll be prompted with the standard Wordpress first-run installation page and process. You're done setting up your Wordpress server now.

In the second terminal window (after you've verified that the Wordpress instance is live in-browser), run `npm run dev`. This command does runs a few things:

- A process to copy all files, and listen to changes, in the `src` directory into a theme within the Wordpress folder. The theme folder will be the `Package Name` you specified when running `setup`.
- SCSS compilation (copied directly to theme folder after compilation)
- JS compilation (copied directly to theme folder after compilation)
- BrowserSync so you don't have to hit refresh all the time.

### Other Stuff

For convenience, `npm run docker:export-db` will generate a sql file for use when deploying your site to a live URL. This will help in moving your data more easily than dealing with SQL clients or phpMyAdmin. **Note**: Your server (`npm run docker:wp`) must be running (or if you're fancy, you'll need to mount the database container specifically) to export the database.

Suggestions in the form of issues and/or pull requests are absolutely welcome.