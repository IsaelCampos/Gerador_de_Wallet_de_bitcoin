// Vamos importar nossas dependecias.
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// Definindo a rede.
// bitcoin - rede principal - mainnet.
// testnet - rede de teste.
const network = bitcoin.networks.testnet

// Derivação de endereços(wallet) HD
const path = `m/49'/1'/0'/0`

// Vamos criar nossa seed
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// Gerando uma conta nó apartir da raiz.
// Criando uma conta - par pvt pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira gerada com sucesso.")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed: ", mnemonic)
