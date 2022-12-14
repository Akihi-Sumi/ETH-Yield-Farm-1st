require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "172.23.48.1",
      port: 7545,
      network_id: "5777" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
