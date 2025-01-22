import * as Linking from 'expo-linking';

async function getInitialUrlWithRetry(maxRetries = 3, retryDelay = 1000) {
  let initialUrl = null;
  let retries = 0;

  while (initialUrl === null && retries < maxRetries) {
    try {
      initialUrl = await Linking.getInitialURL();
    } catch (error) {
      console.error('Error getting initial URL:', error);
    }
    if (initialUrl === null && retries < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
    retries++;
  }

  return initialUrl;
}

export default getInitialUrlWithRetry; 