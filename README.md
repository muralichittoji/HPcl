# HPcl
## Getting Started

```sh
# Using npx
npx react-native start
```

## Build and run your app

### android
```sh
npx react-native run-android
```

### iOS

```sh
npx react-native run-ios
```

### any issues with android or ios
```sh
# ios
cd ./ios/ && pod install && cd ..

# android
cd ./android/ && ./gradlew clean && cd ..
```

## Required Languages
```sh
# node
node v20

# java
java v17LTS

# clone the code,

# cd to the HPcl folder

# make sure to run
npm i --legacy-peer-deps

# now you can follow those required run envenroments

# for android, you need to install android studio and also need to add the required lines to the following to make the environment run

# __ for macbook/linux only on regarding the shell you are using, on linux it will be ~/.bashrc, on mac its ~/.zshrc __
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator                                        
export PATH=$PATH:$ANDROID_HOME/platform-tools                                  
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$PATH"

__ for windows __

# visual studio code

```
