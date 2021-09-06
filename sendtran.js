var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');

web3.eth.sendTransaction({
    from: '0x8c0276653633fa180a2df87fe67bc5a10be150e8',
    to: '0x9ad4e20abcca29eefa4d4ba9c459731b66edea45',
    value: '1000000000000000'
})
.then((receipt)=>{
    console.log(receipt);

});

//node_modules/.bin/testrpc