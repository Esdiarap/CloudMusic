<template>
  <!--fixed 吸底模式-->
  <aplayer
      ref="APlayer"
      :audio="songInfo"
      fixed
      :lrcType="1"
      @listAdd="handleEvent"
  ></aplayer>
  <!--<div>{{ songInfo }}</div>-->
</template>

<script>
import Vue from "vue";
import APlayer from '@moefe/vue-aplayer'
import {mapState} from 'vuex'

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

export default {
  name: "APlayer",
  data() {
    return {
      firstInfo: [
        {
          name: '脱胎换骨',
          artist: '李荣浩',
          url: 'http://m801.music.126.net/20220309204632/f9835a02cdd01aeafde7b9f334ae611f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/13311638108/1061/4ba0/2763/a0af113d3b426cc89f9298c192ec3297.mp3',
          cover: 'https://p1.music.126.net/u3a_9vYOQC4xz7-kKOCJlA==/109951167114856500.jpg',
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
        }
      ],

    }
  },
  computed: {
    ...mapState(['songInfo']),

  },
  methods: {
    handleEvent() {
      // this.$refs.APlayer['audio'] = this.songInfo;
      const aplayer = this.$refs.APlayer;
      const songInPlay = this.songInfo.length - 1;

      aplayer.switch(songInPlay);
      aplayer.play();
    }
  },
  mounted() {
    // console.log(this.$store.state.songInfo);
    this.handleEvent();

  }
}

</script>

<style scoped>

</style>
