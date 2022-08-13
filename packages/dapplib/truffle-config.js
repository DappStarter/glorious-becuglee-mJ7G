require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain erosion gloom private swallow skirt'; 
let testAccounts = [
"0x9586982e07f54fbb44875b4e78b33c6421c949005879b28e0682932a2645328d",
"0xfc910d07ab111f9a60a49cad6a22b9994418880a5e28580b3446dbf16eced3f3",
"0xd575f83eaf7f6584054303496454b994269c15bfc0c86c5e7c87cf0dda457ffd",
"0x2e9bf8b4e3917c7031d6e5126f9f424dac28c11e3a1de65ceb4d5adf2513f060",
"0xf3356179cf096b628b5ae0ac2e8cfcf8b2e99429c408d485da207a7922ed325b",
"0x1147a28bbf48f8680c0bb26963bc8beb1011184d9493ec930ea6c9e3377db127",
"0xb9b1067c130ff5a88d9ba6e313379684d3d60f23f369631699b876f3f1b1d869",
"0x280a4c5865f9b0f8f39783c586fbd0287d1525dfde37d0552a8b548da5dba889",
"0xfbb26366c4b271f15c52d9b4f383053ecaaa85eed6048f2508b5b4ade4f8ea91",
"0xffe8a96683da5e39e85f1bd06a233bb147b3172f785171cc026abbd4daae8684"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

