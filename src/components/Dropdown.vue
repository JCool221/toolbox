<template>
    <div class="dropdown" style="position: relative; display: inline-block;">
      <button @click="open = !open" class="dropdown-button">
        {{ selected || "Select an option" }}
      </button>
      <ul v-if="open" class="dropdown-menu">
        <li v-for="option in options" :key="option" 
            @click="select(option)"
            style="padding: 8px; cursor: pointer;">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
  
  const open = ref(false)
  const selected = ref(null)
  const highlightedIndex = ref(0)

  const options = ['Option 1', 'Option 2', 'Option 3']
  
  function select(option) {
    selected.value = option
    open.value = false
  }

  function handleArrowNav(e) {
    if (!open.value) return

    switch (e.key) {
        case 'ArrowDown':
            highlightedIndex.value = (highlightedIndex.value + 1 ) % options.length
            e.preventDefault()
        break
        case 'ArrowUp':
            highlightedIndex.value = (highlightedIndex.value -1 + options.length) % options.length
            e.preventDefault()
        break
        case 'Enter':
            select(options[highlightedIndex.value])
            e.preventDefault()
        break
        case 'Escape':
            open.value = false
            e.preventDefault()
        break
    }
  }

  function attachListener(){
    window.addEventListener('keydown', handleArrowNav)
  }
  function removeListener(){
    window.removeEventListener('keydown', handleArrowNav)
  }
  watch(open, (newVal) => {
    if (newVal) {
        attachListener()
    } else {
        removeListener()
    }
  })
  onBeforeUnmount(() => {
    removeListener()
  })
  </script>

<style scoped>
    ul{
        position: absolute;
        background-color: white;
        color: black;
        border: 1px solid #ccc;
        margin-top: 4px;
        list-style: none;
        padding: 0;
    }
    li:hover {
        background-color: black;
        color: white;
    }
</style>