<template>
    <div class="dropdown">
      <button @click="open = !open" class="dropdown-button" autofocus>
        {{ selected || "Select an option" }}
      </button>
      <ul v-if="open" 
      @keydown="handleArrowNav"
      tabindex="0"
   
      class="dropdown-menu">
        <li v-for="(option, index) in options" 
            :key="index" 
            :class="{ 'focused': focusedIndex === index }"
            @mouseenter="setFocus(index)"
            @mouseleave="removeFocus"
            @click="select(option)"
            >
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
  
  const open = ref(false)
  const selected = ref(null)
  const focusedIndex = ref(-1)
  const setFocus = (index) => {
    focusedIndex.value = index
  }
  const removeFocus = () => {
    focusedIndex.value = -1
  }

  const options = ['Option 1', 'Option 2', 'Option 3']
  
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
            console.log('up')
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
    li.focused,
    li:hover,
    li:focus{
        outline:none;
        background-color: black;
        color: white;
    } 

</style>