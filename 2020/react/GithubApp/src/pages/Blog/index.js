import React from 'react';
import { WebView } from 'react-native-webview';

export default function BlogView({navigation }) {
  const link = navigation.getParam('blog');

  return (
    <WebView source={{uri: link}}/>
  );
}
