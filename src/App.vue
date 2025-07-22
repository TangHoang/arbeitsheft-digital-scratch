<script setup>
import Sidebar from './components/SideBar.vue'
import MainContent from './components/MainContent.vue'
import Tipps from "./components/Tipps.vue"
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="layout">
    <div class="nav-wrapper">
        <NavBar />
    </div>
    <div class="content-wrapper">
      <Sidebar />
      <MainContent />
      <Tipps />
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
