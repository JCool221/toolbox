<template>
    <div class="dropdown">
      <button @click="open = !open"
       class="dropdown-button" 
       ref="controller"
       type="button"
       >
        {{ selected || "Select an option" }}
      </button>
      <ul v-if="open" 
      class="dropdown-menu"
      >
      <li v-for="(option, index) in options" 
      :key="index" 
      @mouseenter="setFocus(index)"
      @mouseleave="removeFocus"
      @click="select(option)"
      @keydown="handleArrowNav"
            tabindex="0"
            >
            {{ option }}
          </li>
        </ul>
      </div>
    </template>
  
  <script setup>
import { ref, onMounted, watch } from 'vue'

defineProps({
  options: {
    type: Array,
    required: true
  }
});

const controller = ref(null)
  onMounted(() => {
    controller.value?.focus()
  })
  
  const open = ref(false)
  const focusedIndex = ref(-1)
  watch(open, (isOpen, isClosed) => {
    if (isOpen && !isClosed) {
      focusedIndex.value = 0
    } 
  })

  const selected = ref(null)

  const setFocus = (index) => {
    focusedIndex.value = index
  }
  const removeFocus = () => {
    focusedIndex.value = -1
  }
 
  function select(option) {
    selected.value = option
    console.log("Selected: ", option)
    open.value = false
  }

  function handleArrowNav(e) {
    if (!open.value) return

    switch (e.key) {
        case 'ArrowDown':
            focusedIndex.value = (focusedIndex.value + 1 ) % options.length
            e.preventDefault()
        break
        case 'ArrowUp':
            focusedIndex.value = (focusedIndex.value -1 + options.length) % options.length
            e.preventDefault()
        break
        case 'Enter':
            select(options[focusedIndex.value])
            e.preventDefault()
        break
        case 'Escape':
            open.value = false
            e.preventDefault()
        break
    }
  }



  </script>

<style scoped>
    .dropdown{
        position: relative;
        display: inline-block;
    }
    ul{
        position: absolute;
        background-color: white;
        color: black;
        border: 1px solid #ccc;
        margin-top: 4px;
        list-style: none;
        padding: 0;
    }
    li{
        padding: 8px;
        cursor: pointer;
    }
    li:hover,
    li:focus{
        outline:none;
        background-color: black;
        color: white;
    } 

</style>