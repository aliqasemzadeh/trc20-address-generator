const { generateAccount } = require('tron-create-address')

const { address, privateKey } = generateAccount()
console.log(`Tron address is ${address}`)
console.log(`Tron private key is ${privateKey}`)
