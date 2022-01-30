# [Dracublog](https://earnestma.xyz/dracublog)

[![git repo](https://img.shields.io/badge/repo-git-informational.svg?logo=gitea)](https://git.earne.link/earnestma/dracublog)
[![GitHub mirror](https://img.shields.io/badge/mirror-GitHub-black.svg?logo=github)](https://github.com/earnestma/dracublog)

A simple, fully-featured Hugo blogging theme with Dracula colors.

Features:

- Basic support for [Gemini output](https://gemini.circumlunar.space/)
- Full content RSS feed by default
- Support for author/ multi-author posts
- Support for "comments" through Mastodon's API (toot)
- Optional openring styling (generates a list of recent posts from blogs you follow)
- `noindex` param to prevent certain pages from being indexed

**Demo**: -

[My personal site](https://earnestma.xyz) uses this theme.

## Install

- Git submodule

`git submodule add https://git.earne.link/earnestma/dracublog.git themes/dracublog`

The `main` branch will always point to the latest stable tag. To track the develop branch, you may instead use `git submodule add https://git.earne.link/earnestma/dracublog.git themes/dracublog -b develop`

- Release

Regular and minified release tarbells are available: **[here](https://git.earne.link/earnestma/dracublog/releases)** and [on GitHub releases](https://github.com/earnestma/dracublog/releases). Simply uncompress to the themes directory.

## Configuration

## Gemini Output

Improvements welcome.

`config.toml`:

```toml
[mediaTypes]
[mediaTypes."text/gemini"]
suffixes = ["gmi"]

[outputFormats]
[outputFormats.Gemini]
name = "GEMTEXT"
isPlainText = true
isHTML = false
mediaType = "text/gemini"
protocol = "gemini://"
permalinkable = true
path = "gemini/"

[outputs]
section = ["HTML", "RSS"]
```

Blog posts (`post-filename.md`):

A post that has both html and gemini output:
```
title: "Example"
date: 2020-01-01 13:23:00 -0500
draft: false
outputs:
  - html
  - gemtext
```

Just gemini:

```
outputs:
  - gemtext
```

Gemini content will go in the same `post-filename.gmi`. A Makefile or automated CI can be used to transfer output and exclude certain files/ directories to the correct directories.

## Contributing

Please see [contributing.md](contributing.md). This project is licensed under the [MIT License](license.md).

## Thanks

- [Dracula theme](https://draculatheme.com/) (MIT)
- [Simple CSS](https://simplecss.org/) (MIT)
