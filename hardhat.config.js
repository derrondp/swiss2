require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "5ab617b7197ab618d45f2b850f0f5547c749175668870fa4f75e2fcd0a623a48";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
