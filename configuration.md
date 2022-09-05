---
title : "Configuration"
level : "top"
sort  : 2
layout: default
---
# Theme Configuration

mico, while simplistic, also contains quite a bit of customization options to make the theme truly yours!

In the site's `_config.yml` file, there lies some customization options that apply to the entire site. The following options are available for you to change:

- `title`: Defines the site's title. Shows up in the header and the first part of the browser tab title.
- `description`: The site's default description, used for SEO purposes. Defaults to the post's content in blog posts.
- `timezone`: Defines the site's timezone. Must match the format of timezones in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `encoding`: The site's text encoding. Leave this on `utf-8` unless you have an edge case.
- `language`: The site's default language. If your site is multilingual, set it to the default language of your site. Must be in the [BCP47 syntax](https://datatracker.ietf.org/doc/html/rfc5646).
- `allowCodeCopy`: If set to `true`, allows people to copy the text in code blocks on your site.

Any options below the warning comment are advanced options and should only be changed **if you know what you're doing.** Changing these options to invalid settings can break your site and prevent it from being built correctly.

## Installation

To install this theme on a GitHub Pages site, you must make sure that the gem [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme) is added to your site's Gemfile and configured correctly. Next, ensure that the line `remote_theme: zfett/mico` or `remote_theme: https://github.com/zfett/mico` is added to your site's `_config.yml` file. When in doubt, just fork this repo and edit the contents yourself.
