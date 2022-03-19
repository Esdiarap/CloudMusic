<template>
  <div id="app">
    <TopBar></TopBar>
    <MainApp></MainApp>
    <APlayer></APlayer>
  </div>
</template>

<script>
import MainApp from "@/components/MainApp";
import TopBar from "@/components/TopBar";
import APlayer from "@/components/APlayer";
export default {
  name: 'App',
  components: {
    MainApp,
    TopBar,
    APlayer
  }
}
</script>

<style>
#app{
  max-width: 1500px;
  margin: 20px auto;
  height: 90vh;
  background-color: rgba(237, 160, 181, .3);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
