This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.



> ionic config set app_id "dce0c962" --json
[OK] app_id set to "dce0c962" in ./ionic-favorite-quotes/ionic.config.json!
> ionic git remote
> git remote add ionic git@git.ionicjs.com:tmilos1/ionic-favorite-quotes.git
[OK] Added remote ionic.
[OK] Project linked with app dce0c962!
> git add -A
> git commit -m "Initial commit" --no-gpg-sign

Next Steps:
Go to your newly created project: cd ./ionic-favorite-quotes
Then, push your code to the Ionic Dashboard: git push ionic master

