const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // Reduce file watching to decrease CPU usage
  watchFolders: [],
  
  // Optimize transformer for better performance
  transformer: {
    // Reduce workers to prevent overheating
    maxWorkerCount: 2,
    // Enable minification in development for smaller bundles
    minifierConfig: {
      keep_classnames: true,
      keep_fnames: true,
      mangle: {
        keep_classnames: true,
        keep_fnames: true,
      },
    },
  },

  // Optimize resolver to reduce file system operations
  resolver: {
    // Cache resolved modules to reduce file system calls
    hasteImplModulePath: undefined,
  },

  // Reduce server workload
  server: {
    // Limit concurrent requests
    enableVisualizer: false,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
