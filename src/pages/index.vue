<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import crypto_, { useCryptoStore } from '../store/crypto'

// 引用crypto.vue的const宣告變數
// import crypto_ from '../store/user'

const defineStore = useCryptoStore()
const { deposit, itemcost, connectWallet, new_onSign, new_count } = useCryptoStore()
const { account, showTWDtoGwei, TWDtoEth, showdepositTxn, count } = storeToRefs(defineStore)

const getAmount = ref(0)
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl m-4">
      Payment
    </h1>
    <div v-if="!account">
      <P class="MsoNormal">點擊下方橙色按鈕連結錢包登入付款</P><br>
      <p>Only for Metamask --Goerli network.</p>
    </div>
    <button v-if="!account" class="bg-amber-600 rounded p-4" @click="connectWallet">
      Connect Wallet
    </button>

    <div v-if="account" class="border shadow w-4/12 p-4 mt-10">
      <input
        v-model="getAmount"
        :style="{ width: '100px' }"
        name="AmountInfo"
        class="py-4 px-4 shadow border rounded"
        maxlength="15"
      >

      <button class="bg-slate-600 rounded p-4 mt-10" @click="itemcost(getAmount)">
        確定金額
      </button>

      <p>Show TWD to Gwei: {{ showTWDtoGwei }}</p>

      <button class="bg-cyan-600 rounded p-4 mt-10" @click="new_onSign(getAmount)">
        確認簽名
      </button>
      <div style="word-break: break-all;">
        <p class="m-4">
          Signature : {{ crypto_.Sig }}
        </p>
        <p>nonce: {{ count }}</p>
      </div>

      <button class="bg-cyan-400 rounded p-4 mt-10" @click="deposit(getAmount)">
        確認付款
      </button>

      <p>Show TWD to Eth: {{ TWDtoEth }}</p>
      <p>{{ showdepositTxn }}</p>

      <!-- <button class="bg-slate-600 rounded p-4 mt-10" @click="new_count()">
        更新count
      </button> -->
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
