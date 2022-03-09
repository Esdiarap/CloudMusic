<template>
  <nav class="top-bar">
    <a href="#">Daily Recommend</a>
    <div class="header-menu">
      <router-link to="/" active-class="is-active">Album</router-link>
      <router-link to="/content">Rank</router-link>
      <router-link to="/content">Singer</router-link>
      <router-link to="/content">Category</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainTopBar"
}
</script>

<style scoped lang="scss">
$border-bottom: 1px solid #9ea6c8;
$border-bottom-hover: 2px solid whitesmoke;
nav {
  display: flex;
  text-align: center;
  color: whitesmoke;
  border-bottom: $border-bottom;
  align-items: center;
  height: 60px;
  width: 100%;


  & > a:first-child {
    flex: 0 0 123px;
    padding: 0 30px;
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    vertical-align: center;
    color: wheat;
  }

  & > div {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > a {
      height: 100%;
      // 拉开间距
      padding: 0 24px;
      margin: 0 5px;
      display: flex;
      align-items: center;
      letter-spacing: 2px;
      text-decoration: none;
      transition: all .3s linear;

      &:hover {
        border-bottom: $border-bottom-hover;
        color: whitesmoke;
      }
    }
  }
}

.is-active {
  border-bottom: $border-bottom-hover;
  color: whitesmoke;
}
</style>
