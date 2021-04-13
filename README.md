## RN-All

## What is this?

React Native Working Boilerplate for Android, IOS and Web as explained in:
https://medium.com/@aureliomerenda/create-a-native-web-app-with-react-native-web-419acac86b82

## How to use this

Clone the repo, then remove the origin. Change folder name if you need to.

```
git clone git@github.com:zaunaf/rn_boilerplate.git
cd rn_boilerplate
git remove rm origin
```

## Set your environment

### RN-Flow linting error

Your VSCode probably needs to be set so there wouldn't be annoying errors. Open settings.json
on windows `%APPDATA%\Code\User\settings.json`, or on mac `$HOME/Library/Application Support/Code/User/settings.json`,
or on linux `$HOME/.config/Code/User/settings.json`. Add this line:
`"javascript.validate.enable": false,`

### Prettier bug

Code from \*x OS will use CR without LF, and it will become problem in windows. So add this property on `.eslintrc.js`.
`rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},`

## How to make this yourself

Init

```sh
npx react-native init rnall
```

Create src/public/index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
  </head>

  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
```

Create migrate-src.sh

```sh
mkdir src/
mv app.json src/
mv App.js src/
cp index.js src/
mv index.js index.native.js
```

Run it

```
chmod 755 migrate-src.sh
./migrate-src.sh
```

Change imports in index.native.js

```
import App from './src/App';
import {name as appName} from './src/app.json';
```

Add in `src/index.js`

```js
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
```

Remove this from package.json

```
-   "babel-jest": "^25.1.0",
-   "jest": "^25.1.0",
```

Rebuild libs

```
rm -rf node_modules && yarn
```

Add libs

```sh
yarn add react-dom react-native-web
yarn add --dev react-scripts jest
```

Change **test**/App-test.js

```
import App from '../src/App';
```

Check run test

```
yarn run test
```

Add task "web" on the `package.json`

```json
"web": "react-scripts start",
```

Correct RCTBridge warning

```
#if RCT_DEV
  [bridge moduleForClass:[RCTDevLoadingView class]];
#endif
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"Test"
                                            initialProperties:nil];
```

Run it:

```
yarn run web
yarn run ios
yarn run android
```
