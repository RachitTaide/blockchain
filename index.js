const Tx = require('ethereumjs-tx').Transaction
const Web3 = require("web3");
const web3 = new Web3('https://ropsten.infura.io/v3/3e3c4c7cd6b24318b2b25da9e5866632') ;

/*web3.eth.getBalance("0x8e8302EaD9014d80D6F493fBA40d14147009E55B",(err, result)=> {
    if (err) {
      console.log(err)
    } else {
      console.log(web3.utils.fromWei(result, "ether") + " ETH")
        }
  })*/

  const acc1='0x8e8302EaD9014d80D6F493fBA40d14147009E55B';
  const acc2='0xc301965D884165b59bd828D0E7634D3cd00A3a5A';

  const pkey1=Buffer.from('3f79b0c05c0ac5d92f388fa251a7cb4988731983d79ee7d1cff1125f38a70571','hex');
 

  web3.eth.getTransactionCount(acc1, (err, txCount) => {

    const txObject = {
         nonce: web3.utils.toHex(txCount),
         to: acc2,
         value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
         gasLimit: web3.utils.toHex(21000),
         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx(txObject, { chain: 'ropsten' })
tx.sign(pkey1)
const serializedTransaction = tx.serialize()
const raw = '0x' + serializedTransaction.toString('hex')

web3.eth.sendSignedTransaction(raw, (err, txHash) => {
  if(err){
    console.log(err)
  }else{
    console.log('txHash: ', txHash)
  }
 })
})                                  



