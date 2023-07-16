<template>
  <q-page padding class="column items-center justify-center">
    <div class="container">
      <div class="animated">
        <span>Hi :)</span>
      </div>
    </div>
    <q-btn color="primary" icon-right="send" label="Click here to public apis" :to="{name:'publicApisList'}" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
.animated {
  overflow: hidden;
  width: 11rem;
  white-space: nowrap;
}

.animated > * {
  display: inline-block;
  position: relative;
  animation: 3s linear 0s infinite alternate move;
}

@keyframes move {
  0%,
  25% {
    transform: translateX(0%);
    left: 0%;
  }
  75%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}

/* Non-solution styles */

.container {
  display: flex;
  flex-wrap: wrap;
}

.animated {
  font-size: 2rem;
  font-family: sans-serif;
  margin: 1rem;
}

.animated > * {
  box-sizing: border-box;
  padding: .5rem 1rem;
}

</style>
