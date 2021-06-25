require('babel-register');
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"//match any network id
    },
  },

  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',
  
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
      enabled: true,
      runs: 200
      },
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
