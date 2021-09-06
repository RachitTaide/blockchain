const TronWeb = require('tronweb')
const tronWeb = new TronWeb({
    fullHost:'https://api.shasta.trongrid.io/',
    privateKey: 'c8be3b0fe02572fa13993e917a8edbb8eff4b2d71f110c11979b20a9da2d94be'
})
//GetBalance
tronWeb.trx.getBalance("TAAiq6DsJ4mbKA58TSt2UZDTz1t6ZFbgAF").then((result)=> console.log(result));
//SendTransaction
tronWeb.trx.sendTransaction("TD9uCRGYNBduikRbcxwFVzXn3XcCrYBBxe", 1000)
.then((result)=>console.log(result))
.catch((err)=>console.log(err))