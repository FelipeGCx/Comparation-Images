<template>
  <nav>
    <div class="container">
      <img src="@/assets/zolek.png" alt="" />
      <input
        class="divider"
        type="range"
        name="rng"
        id="rng"
        min="0"
        max="100"
        step="1"
        @input="handlerDrag"
        />
      <img src="@/assets/zolek-render.png" alt="" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const pathOne = ref('polygon(50% 0%, 0% 0, 0% 100%, 50% 100%)')
const pathTwo = ref('polygon(100% 0, 50% 0, 50% 100%, 100% 100%)')
const left = ref('50%')
const leftThumb = ref('50%')
const handlerDrag = (event: any) => {
  console.log(event)
  const val = event.target.value
  pathOne.value = `polygon(${val}% 0%, 0% 0, 0% 100%, ${val}% 100%)`
  pathTwo.value = `polygon(100% 0, ${val}% 0, ${val}%100%, 100% 100%)`
  left.value = `calc(${val}% - 0.4rem / 2)`;
  leftThumb.value = `calc(${val}% - 2.5rem / 2)`;
}
</script>

<style lang="scss">
nav {
  --size-thumb: 2.5rem;
  min-height: 100vh;
  align-items: center;
  .container {
    width: 50rem;
    height: 50rem;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      &:first-child {
        clip-path: v-bind(pathOne);
      }
      &:last-child {
        clip-path: v-bind(pathTwo);
      }
    }
    .divider {
      height: 100%;
      // height: 1.5rem;
      width: 100%;
      position: absolute;
      background: transparent;
      z-index: 5;
      outline: none;
      // pointer-events: none;
      border: none;
      -webkit-appearance: none;
      appearance: none;
      // top: calc(50% - 1.5rem);
      &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        border-radius: 5rem;
      }
      /* For Chrome browsers */
      &::-webkit-slider-thumb {
        background: #2196f3;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        height: var(--size-thumb);
        width: var(--size-thumb);
        z-index: 99;
        pointer-events: all;
        position: absolute;
        left: v-bind(leftThumb);
        -webkit-appearance: none;
        appearance: none;
        -webkit-tap-highlight-color: transparent;
        margin-top: -0.5rem;
      }

      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 0.3rem;
        cursor: pointer;
        background: transparent;
        // background: #ff00dd;
        border-radius: 5px;
        border: none;
      }
      &:focus::-webkit-slider-runnable-track {
        background: transparent;
      }
    }
    &::after {
      content: '';
      background-color: #2196f3;
      // box-shadow: 0 0 .6rem .1rem #2195f34b;
      width: 0.4rem;
      height: 100%;
      position: absolute;
      z-index: 4;
      left: v-bind(left);
    }
  }
}
</style>
