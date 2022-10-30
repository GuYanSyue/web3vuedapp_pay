/* eslint-disable no-alert */
/* eslint-disable no-console */
import { ethers } from 'ethers'
import { acceptHMRUpdate, defineStore } from 'pinia'

// import { ref } from 'vue'
import contractABI from '../artifacts/contracts/newPayment.sol/newPayment.json'
const contractAddress = '0x7d9EC22cD25e4174613094B7eE0CF8fBA03A5ab9'

const Sig = ref('0x')
// 預設匯出 !重要
export default {
  Sig,
}

export const useCryptoStore = defineStore('user', () => {
  const account = ref(null)
  const loading = ref(false)
  const Amount = ref(0)
  const showTWDtoGwei = ref('123')
  const showdepositTxn = ref()
  const TWDtoEth = ref()
  const showTWDtoEth = ref('123')

  async function getBalance() {
    setLoader(true)
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const SimplePayContract = new ethers.Contract(contractAddress, contractABI.abi, signer)

        const count = (await SimplePayContract.getBalance())
        const amt = ethers.utils.formatEther(count)
        console.log('count', amt)
        setLoader(false)
      }
    }
    catch (e) {
      setLoader(false)
      console.log('e', e)
    }
  }

  // ------------------------------------------------------
  async function itemcost(TWDtoGwei: any) {
    console.log('setting loader')
    setLoader(true)
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner() // 持有使用者的私鑰並以此簽核 (Signer)
        const SimplePayContract = new ethers.Contract(contractAddress, contractABI.abi, signer)

        // gwei to wei -> 乘以10的9次
        TWDtoGwei = TWDtoGwei * 20000 // gwei
        showTWDtoGwei.value = TWDtoGwei
        TWDtoEth.value = TWDtoGwei / 1e9
        showTWDtoEth.value = TWDtoEth.value

        const costInput = await SimplePayContract.itemcost(TWDtoGwei)

        console.log('loading....', costInput)
        await costInput.wait()
        console.log('loaded -- ', costInput)
      }
      else {
        console.log('Ethereum object doesn\'t exist!')
      }
    }
    catch (error) {
      setLoader(false)
      console.log(error)
    }
  }

  async function deposit(TWD: any) {
    console.log('setting loader')
    setLoader(true)
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner() // 持有使用者的私鑰並以此簽核 (Signer)
        const SimplePayContract = new ethers.Contract(contractAddress, contractABI.abi, signer)

        const send_token_amount = TWD * 0.00002

        const overrides = {
          value: ethers.utils.parseUnits(send_token_amount.toString(), 18),
          gasLimit: 300000,
        }

        const _sig = ethers.utils.arrayify (Sig.value)

        // const bytes32 = ethers.utils.formatBytes32String(Sig.value)
        const depositTxn = await SimplePayContract.deposit(_sig, overrides)

        console.log('loading....', depositTxn)
        await depositTxn.wait()
        console.log('loaded -- ', depositTxn)
      }
      else {
        console.log('Ethereum object doesn\'t exist!')
      }
    }
    catch (error) {
      setLoader(false)
      console.log(error)
    }
  }

  // --------------------------------------------------------------

  async function connectWallet() {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert('Must connect to MetaMask!')
        return
      }

      // 授權獲取帳戶
      const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Connected: ', myAccounts[0])
      account.value = myAccounts[0]

      await getBalance()
      await onSign()
    }
    catch (error) {
      console.log(error)
    }
  }

  // 客戶端進行鏈下簽名
  async function onSign() {
    try {
      // 1. 建構 Provider
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        // const UDPCContract = new ethers.Contract(contractAddress, contractABI.abi, signer)

        // 2. 簽名內容 進行 solidity Keccak256 Hash
        const messageHsh = ethers.utils.solidityKeccak256(['string'], ['HelloWorld'])

        // 3. 轉成 bytes
        const arrayifyMessage = ethers.utils.arrayify(messageHsh)

        // 4. 使用私鑰進行消息簽名
        const Signature = await signer.signMessage(arrayifyMessage)
        Sig.value = Signature
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // ------------------------------------------------

  function setLoader(value: boolean) {
    console.log('setloader', value)
    loading.value = value
  }

  return {
    setLoader,
    loading,
    connectWallet,
    account,
    Amount,
    Sig,
    onSign,
    itemcost,
    deposit,
    showTWDtoGwei,
    TWDtoEth,
    showdepositTxn,
    showTWDtoEth,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCryptoStore, import.meta.hot))
