<script setup>
import SideBarLeft from './components/SideBarLeft.vue'
import MainContent from './components/MainContent.vue'
import SideBarRight from "./components/SideBarRight.vue"
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="layout">
    <div class="nav-wrapper">
        <NavBar />
    </div>
    <div class="content-wrapper">
      <SideBarLeft />
      <MainContent />
      <SideBarRight />
    </div>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


</style>
