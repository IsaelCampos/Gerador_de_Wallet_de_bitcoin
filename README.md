Neste desafio de projeto vamos:

* Construir o nosso gerador de carteiras de bitcoin;
* Importar para um software gerenciador de carteiras;
* Realizar transações de envio e recebimento de bitcoin.
---
  **Tecnologias utilizadas**

  * Linguagem JavaScript
  * Electrum Bitcoin Wallet
  * Bitcoin Faucet Generator



    ![pet-postblog-interno](https://github.com/IsaelCampos/Gerador_de_Wallet_de_bitcoin/assets/149100120/45b6a462-15ee-4122-b1c6-254d9a6b1962)


Requerimentos necessarios:
- Nodejs.
- Electrum.
- Block Explore.

### Passos iniciais

> npm init -y

> npm install bip39 bip32@2.0.6 bitcoincoin-lib --save

São necessário a instalação das dependências `bip39`, `bip32@2.0.6` e `bitcoin-lib` para a conclução das atividades propostas.

Para visualizar a carteira e as transações realizadas vamos procurar no `Blockchain.com` sobre as mesmas.

Vamos utilizar uma moeda sem valor(`freebitcoin`) no site `Bitcoin Testnet Faucet`, para vermos na prática qual o comportamento de nossa carteira e os seus registos no bloco.

Essa parte do código em questão sera responsavel pela geração de caracteres aleatorios de nossa Wallet.

> Derivação de carteira HD

```javaScript
const path = `m/49´/1´/0´/0`
```
