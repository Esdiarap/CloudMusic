<template>
  <div class="wrapper">
    <aside>
      <AsideItem v-for="(contents, title, index) in asideContent" :contents="contents" :title="title" :key="index"></AsideItem>
    </aside>
    <!--<router-link></router-link>-->
    <main>
      <!--<router-view></router-view>-->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AsideItem from "@/components/AsideItem";
export default {
  name: "MainApp",
  components: {AsideItem},
  data(){
    return {
      asideContent:{
        "Recommend":['Daily Recommend', 'Song Search'],
        "My Music":['My Collection', 'My Radio', 'Local Download', 'Cloud', 'Recently Listen', 'Default List'],
        "Theme":['Theme'],
        "My Song List":['Like', 'Default', 'Japanese']
      },

    }
  }
}
</script>

<style scoped lang="scss">
$border-color: 1px solid #9ea6c8;
.wrapper{
  //width: 100%;
  //height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-column-gap: 1px;
  flex: 0 0 auto;
  & > aside{
    // 媒体查询

    width: 100%;
    height: 100%;
    padding: 26px 26px 10px 26px;
    overflow: auto;
    border-right: $border-color;
  }

  .testLink{

  }
}
@media screen and (max-width: 945px) {
  .wrapper > aside{
    display: none;
  }
  .wrapper > main{
    grid-column: 1 / 3;
  }
}

</style>
