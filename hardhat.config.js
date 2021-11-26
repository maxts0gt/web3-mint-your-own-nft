require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		rinkeby: {
			url: process.env.url,
			accounts: [process.env.accounts],
		},
	},
};
