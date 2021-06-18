module.exports = {
  // presets: ['module:metro-react-native-babel-preset'],
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@elements': './src/elements',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
        },
      },
    ],
    ['@babel/plugin-syntax-jsx'],
  ],
};
