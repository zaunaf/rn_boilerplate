## RN-All

## What is this?

React Native Working Boilerplate for Android, IOS and Web as explained in:
https://medium.com/@aureliomerenda/create-a-native-web-app-with-react-native-web-419acac86b82

## How to use this

Clone the repo, then remove the origin. Change folder name if you need to.

```
git clone git@github.com:zaunaf/rn_boilerplate.git
cd rn_boilerplate
git remote rm origin
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

### Enable Web

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

### Correct Warnings

Correct RCTBridge warning `./ios/pos/AppDelegate.m`

```
#if RCT_DEV
  [bridge moduleForClass:[RCTDevLoadingView class]];
#endif
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"Test"
                                            initialProperties:nil];
```

### Font Loading

Support font loading by creating `react-native.config.js`

```
module.exports = {
  project: {
    android: {},
  },
  assets: ['./assets/fonts/'],
};
```

### Packages

Add libs for nav, screens, expo support, etc

```sh
yarn add \
  react-dom \
  react-native-web \
  react-navigation \
  react-navigation-tabs \
  react-navigation-stack \
  react-screen \
  react-native-gesture-handler \
  react-native-safe-area-context \
  react-native-screens \
  react-native-svg \
  react-native-unimodules \
  babel-plugin-module-resolver \
  @react-native-community/async-storage \
  native-base@next \
  react-native-svg \
  expo-font \
  @expo/vector-icons \
  styled-components \
  styled-system \
  react-native-safe-area-context \
  @react-native-picker/picker \
  react-redux \
  redux \
  redux-thunk \
  redux-logger \
  redux-persist \
  axios \
  axios-hooks \
  formik \
  yup \
  @native-base/formik-ui \
  react-native-dotenv \
  react-number-format \
  react-native-reanimated
```

### Expo Support

Add expo support, follow instructions from here https://docs.expo.io/bare/installing-unimodules/

In `android/app/build.gradle` add:

- `apply from: '../../node_modules/react-native-unimodules/gradle.groovy'` below `apply plugin: "com.android.application"`,
- `addUnimodulesDependencies()` below `implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"`

In `MainApplication.java` (find it):

```java
import com.pos.generated.BasePackageList;
```

below

```java
package com.pos;
```

and

```java
import java.util.Arrays;

import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.SingletonModule;
```

below

```java
import java.util.List;
```

Then this

```java
    private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(new BasePackageList().getPackageList(), null);

```

below

```java
public class MainApplication extends Application implements ReactApplication {
```

Then this

```java
          // Add unimodules
          List<ReactPackage> unimodules = Arrays.<ReactPackage>asList(
            new ModuleRegistryAdapter(mModuleRegistryProvider)
          );
          packages.addAll(unimodules);
```

below

```java
// packages.add(new MyReactNativePackage());
```

In `android/build.gradle` change to:

```gradle
 minSdkVersion = 21
 compileSdkVersion = 30
 targetSdkVersion = 30
```

And in `android/settings.gradle` add

```gradle
apply from: '../node_modules/react-native-unimodules/gradle.groovy'; includeUnimodulesProjects()
```

under

```gradle
rootProject.name = 'pos'
```

Rebuild libs

```sh
rm -rf node_modules && yarn
```

For IOS,

Run `pod install` inside ios directory.

Before running, do:
Run `watchman watch-del-all`
and `yarn start --reset-cache`

## Running

Check first for devices/emulators:

```
$ adb devices
```

or

```
$ emulator -list-avds
10.1_WXGA_Tablet_API_28
Pixel_2_API_29
```

Choose adb to run

```
$ emulator -avd Pixel_2_API_29
```

Run it:

```
yarn run web
yarn run ios
yarn run android
```
