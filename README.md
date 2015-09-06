# UX Membership

#### Setup
----------
Clone this repo and setup the following tools on your machine:

- [Node](http://nodejs.org) (*if not already installed*)
- [PhantomJS](http://gulpjs.com/) (*not optional - need 2.0 for unit tests*)
- [Gulp](http://gulpjs.com/) (*optional - it needs a local version anyways*)

You can install PhantomJS through brew or choclat

```shell
choco install phantomjs
OR
brew install phantomjs
```

After you have the above tools setup, install all runtime/dev dependencies by running:

```shell
$ npm install
```

#### Problems
----------
Karma won't run?

Check that it's using the 2.0 version of PhantomJS, karma-phantomjs-launcher might have overwritten it with an older version, you can replace the phantomjs package entry with this to force it to use your sytems verison. 
```shell
"phantomjs": "https://github.com/just-boris/phantomjs.git"
```