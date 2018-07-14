module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    gyaan: {
      host:"gyaan.network",
	port: 8545,
      gas: "4600000",
      network_id: "17"
    }
  }
};


