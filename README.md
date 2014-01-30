# hasher-cli

A small, nodejs based script to generate reproducible, unique passwords for use in websites/programs.
This is a command line version of the web based hasher: https://github.com/th3l33k/hasher

### Install

#### Automatic with npm (preferred)
Install with the node package manager via:
`$ sudo npm install -g hasher-cli`. We use `sudo` for the symlink creation to `hasher-cli.js`.

Then, relogin, or rehash your binaries in your shell if required.

#### Manual Install
Clone this repository. In the repositories directory, run `npm install` to resolve any dependencies that you may be lacking. Optionally, `chmod +x hasher.js` to make it executable.

Usage: hasher.js identifier output-length
