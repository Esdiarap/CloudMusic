<template>
  <div class="main">
    <nav>
      <ul>
        <li><img src="../assets/backward.png" alt="后退"></li>
        <li><img src="../assets/forward.png" alt="前进"></li>
        <li><img src="../assets/refresh.png" alt="刷新"></li>
      </ul>
    </nav>
    <main>
      <div class="router">
        <router-link to="/" active-class="is-active">Music</router-link>
        <router-link to="/content">Movie</router-link>
        <router-link to="/content">Radio</router-link>
        <router-link to="/content">Place</router-link>
      </div>
      <div class="search">
        <form action="#" method="get">
          <input type="text" id="searchInput" placeholder="搜索">
        </form>
      </div>
      <div class="profile">
        <a href="#">创作者信息</a>
        <img src="../assets/portrait.jpg" alt="头像">
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "TopBar"
}
</script>

<style scoped lang="scss">
// 引入字体
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');

$border-color: 1px solid #9ea6c8;
div.main {
  display: flex;
  height: 58px;
  width: inherit;
  border-bottom: $border-color;
  flex-flow: row nowrap;
  align-items: center;

  & > nav {
    // 作为main flex的子容器，可以让他缩小，basic是240px
    flex: 0 0 240px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

      & > li {
        padding: 5px 8px;
        cursor: pointer;

        & > img {
          max-width: 100%;
        }
      }
    }
  }

  & > main {

    flex: 1 1 auto;
    display: flex;
    align-items: center;

    & > .router {
      flex: 0 1 368px;
      min-width: 263px;
      display: flex;
      text-align: center;
      & > a{
        height: 100%;
        flex: 1 0;
        padding: 20px 10px;
        text-decoration: none;
        font-size: 18px;
        transition: all .2s linear;
        &:active, &:hover{
          color: whitesmoke;
          border-bottom: 2px solid whitesmoke;
        }
      }

      & > .is-active{
        color: whitesmoke;
        border-bottom: 2px solid whitesmoke;
      }
    }

    & > .search {
      flex: 0 1 400px;
      height: 36px;
      padding-left: 16px;
      border-radius: 4px;
      display: flex;
      min-width: 320px;

      & > form {
        width: 100%;
        height: 100%;

        & > input {
          height: 100%;
          width: 100%;
          background-color: transparent;
          outline: none;
          border: 1px solid whitesmoke;
          border-radius: 14px;
          padding-left: 2em;
          font-size: 20px;
          box-shadow: 0 0 2px black;
        }
      }
    }

    & > .profile {
      flex: 1 0 auto;
      min-width: 176px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 16px 0 40px;

      & > a {
        display: block;
        text-decoration: none;
        color: whitesmoke;
        margin-right: 30px;
        padding: 8px 16px;
        border: 1px solid whitesmoke;
        border-radius: 24px;
      }

      & > img {
        display: block;
        max-width: 100%;
        border-radius: 50%;
      }
    }
  }

}


</style>
