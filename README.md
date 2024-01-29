# linu.sk

This is the source code of my personal website hosted at [linu.sk](https://linu.sk). It is built using [Zola](https://www.getzola.org), a static site generator (SSG) written in Rust.

> Feel free to open an issue or pull request if you think something could be improved!



## Building the Website

### Prerequisites

Clone this repository:

```
git clone git@github.com:linuskmr/linu.sk.git
```

Install the Zola <span title="Static Site Generator">SSG</span> as described at [getzola.org > Installation](https://www.getzola.org/documentation/getting-started/installation/).


### Live Preview

For a live preview of the site with hot reloading, run:

```
zola serve
```


### Build the Website to Static HTML

To build the website to the `output` directory, run:

```
zola build
```

You can then serve the website using any webserver, e.g.:

```
python3 -m http.server
``````