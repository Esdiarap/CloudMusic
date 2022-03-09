<template>
  <div>
    <div class="side-title">{{ title }}</div>
    <div class="side-content">
      <!--<router-link></router-link>-->
      <div v-for="(content, index) in contents" :key="index">
        <a href="#">
          <img src="../assets/logo.png" alt="logo">
          {{ content }}
        </a>
      </div>


      <!--<router-link></router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideItem",
  props: ['title', 'contents']
}
</script>

<style scoped lang="scss">
.side-title {
  width: 100%;
  color: whitesmoke;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 14px;
}

.side-content {
  width: 100%;
  margin-bottom: 20px;
  & > div {
    & > a {
      display: flex;
      text-decoration: none;
      color: whitesmoke;
      padding: 10px;
      font-size: 18px;

      & > img {
        max-width: 16px;
        margin-right: 8px;
      }
    }
  }

}
</style>
