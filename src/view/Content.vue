<template>
  <div class="container">
    <MainTopBar></MainTopBar>
    <main>
      <div class="main-image">
        <a href="https://thriveglobal.com/stories/try-to-make-a-dent-in-the-universe/">
          <img src="../assets/main-content.webp" alt="We are here to make a dent in the universe">
        </a>
      </div>
      <!--最新歌曲-->
      <div class="main-content">
        <div class="content-title">New Song</div>
        <ul class="search_ul">
          <li class="adobe-product" v-for="item in newMusic">
            <!--专辑名-->
            <p>{{ item.song.album.name }}</p>
            <!--歌手名-->
            <p>{{ item.song.artists[0].name }}</p>
            <!-- 歌曲时间 -->
            <p>{{ item.song.duration }}</p>
            <div>
              <div class="clicksvg" @click="playMusic(item.id)">
                <svg x="1639295337775" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2313" width="40" height="40">
                  <path
                      d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                      p-id="2314" fill="#e6e6e6"></path>
                  <path
                      d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                      p-id="2315" fill="#e6e6e6"></path>
                </svg>
              </div>
              <div class="clicksvg" v-if="item.song.mvid!==0" @click="playMV(item.song.mvid,item.id)">
                <svg x="1639296179055" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3387" width="40" height="40">
                  <path
                      d="M0 76.8h158.72v125.952H0V76.8z m209.92 0v870.4h606.208v-870.4H209.92z m147.456 193.536c5.12 0 10.24 1.024 14.336 4.096l153.6 108.544 153.6 108.544c12.288 8.192 15.36 26.624 8.192 39.936-2.048 4.096-5.12 7.168-8.192 9.216l-153.6 108.544-153.6 108.544c-12.288 8.192-27.648 4.096-34.816-9.216-3.072-5.12-4.096-10.24-4.096-15.36V299.008c0-15.36 10.24-27.648 24.576-28.672zM868.352 76.8H1024v125.952H868.352V76.8zM0 260.096h158.72V389.12H0V260.096z m868.352 0H1024V389.12H868.352V260.096zM0 447.488h158.72v129.024H0V447.488z m868.352 0H1024v129.024H868.352V447.488zM0 633.856h158.72v129.024H0V633.856z m868.352 0H1024v129.024H868.352V633.856zM0 820.224h158.72v125.952H0V820.224z m868.352 0H1024v125.952H868.352V820.224z"
                      fill="#e6e6e6" p-id="3388"></path>
                </svg>
              </div>
              <div class="clicksvg" @click="downloadSong(item.id)">
                <a :href="downloadSongURL" target="_blank" download>
                  <svg x="1639296939929" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="4288" width="40" height="40">
                    <path
                        d="M918.3 468.6c-18.8 0-34 15.2-34 34v309.6c0 6.6-14.4 18.7-38 18.7H190.2c-23.5 0-38-12.1-38-18.7V486c0-18.8-15.2-34-34-34s-34 15.2-34 34v326.3c0 24.8 12.8 48.4 35 64.7 19.4 14.2 44.6 22 71 22h656.1c26.4 0 51.6-7.8 71-22 22.2-16.3 35-39.9 35-64.7V502.6c0-18.7-15.3-34-34-34z"
                        fill="#e6e6e6" p-id="4289"></path>
                    <path
                        d="M450.4 679.4c17.8 18 41.5 28 66.8 28.1h0.5c25.1 0 48.8-9.7 66.6-27.4l154.4-152.8c13.3-13.2 13.5-34.7 0.2-48.1-13.2-13.3-34.7-13.5-48.1-0.2L551.3 617.1c0.6-2.6 1-5.3 1-8.1V149.1c0-18.8-15.2-34-34-34s-34 15.2-34 34V609c0 3.2 0.5 6.3 1.3 9.3L345.9 477.1c-13.2-13.3-34.7-13.5-48.1-0.2-13.3 13.2-13.5 34.7-0.2 48.1l152.8 154.4z"
                        fill="#e6e6e6" p-id="4290"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--热门歌曲-->
      <div class="main-content">
        <!--标题-->
        <div class="content-title">Popular PlayerLists</div>
        <!--歌单盒子-->
        <div class="content-song">
          <!--歌曲-->
          <div v-for="item in songList" @click="openPlayList(item.id)">
            <el-image class="songlistimg app-card" :src="item.coverImgUrl"></el-image>
            <h5 class="songlisttext">{{ item.name }}</h5>
          </div>
        </div>
        <!--换页-->
        <div class="block">
          <el-pagination v-if="count!==0"
                         @current-change="changePage"
                         :current-page.sync="currentPage"
                         :page-size="30"
                         layout="prev, pager, next, jumper"
                         :total="parseInt(count)"
                         :background="true">
          </el-pagination>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {getLyricAPI, getNewMusicAPI, getSongInfoAPI, getSongListAPI, playMusicAPI} from "@/apis/api";
import MainTopBar from "@/components/MainTopBar";
export default {
  name: "Content",
  components: {MainTopBar},
  data() {
    return {
      // 初始页
      currentPage: 1,
      // 歌曲数目
      count: '',
      // 一次获取歌单的数量
      limit: 15,
      // 歌单数据
      songList: [],
      // 最新歌曲,
      newMusic: [],
      // 音乐地址
      songURL: '',
      // 音乐歌词
      songLyric: '',
      // 下载音乐地址
      downloadSongURL: ''
    }
  },
  created() {
    this.showSongList();
    this.showNewMusic();
  },
  methods: {
    // 显示歌单 ok
    showSongList(page = 1) {
      getSongListAPI({
        limit: 15,
        offset: (page - 1) * 15
      }).then(response => {
        this.songList = response.data.playlists;
        this.count = response.data.total;
      }).catch(error => {
        console.log(error)
      })
    },
    // 新歌推荐 ok
    showNewMusic() {
      getNewMusicAPI({})
          .then(response => {
            this.newMusic = response.data.result;
            //计算歌曲时间
            let min = 0, sec = 0;
            for (let i = 0; i < this.newMusic.length; i++) {
              min = Math.floor(this.newMusic[i].song.duration / 1000 / 60)
              sec = Math.floor((this.newMusic[i].song.duration / 1000) % 60)
              if (sec < 10) {
                sec = '0' + sec
              }
              this.newMusic[i].song.duration = min + ":" + sec;
            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    // 分页 ok
    changePage(currentPage) {
      this.currentPage = currentPage;
      this.showSongList(currentPage);
    },
    // 打开播放列表
    openPlayList(playlistid) {
      // 跳转路由
      this.$router.push({
        path: '/playlist',
        query: {
          playlistid: playlistid
        }
      })
    },
    // 播放音乐 获取歌曲URL和歌词 ok
    playMusic(id) {
      playMusicAPI({
        id: id
      }).then(response => {
        this.songURL = response.data.data[0].url;
      });

      //获取歌词
      getLyricAPI({
        id: id
      }).then(res => {
        this.songLyric = res.data.lrc.lyric;
      });

      // 获取歌曲信息
      getSongInfoAPI({
        id: id
      }).then(res => {
        if (this.songURL) {
          this.$store.dispatch("addsong", {
            // 歌名, 歌手名，歌曲地址，歌曲图片地址，歌词
            name: res.data.songs[0].name,
            artist: res.data.songs[0].ar[0].name,
            url: this.songURL,
            cover: res.data.songs[0].al.picUrl,
            lrc: this.songLyric,
          });
          console.log(`成功上传`)
          // console.log(res.data.songs[0].name);
          // console.log(res.data.songs[0].ar[0].name);
          // console.log(this.songURL);
          // console.log(res.data.songs[0].al.picUrl);
          // console.log(this.songLyric);
          this.songURL = "";
          this.songLyric = "";
        } else {
          alert("歌曲无版权,无法播放！");
        }
      });
    },
    // 下载音乐 ok
    downloadSong(id) {
      playMusicAPI({
        id: id
      }).then(res => {
        if (res.data.data[0].url) {
          this.downloadSongURL = res.data.data[0].url;
          console.log(this.downloadSongURL)
        } else {
          alert("无版权，无法下载");
        }
      });
    },
    // 播放mv 跳转路由
    playMV(mvid, page = 1) {
      //  this.$router.push({ path:'/search',query:{keyworks:this.searchvalue}})
      this.$router.push({
        path: '/playmv',
        query: {mvid: mvid}
      })
    },
  }
}
</script>

<style scoped lang="scss">
$border-color: #9ea6c8;
$border-bottom: 1px solid #9ea6c8;
$border-bottom-hover: 2px solid whitesmoke;

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  & > main {

    width: 100%;
    height: 100%;
    padding: 10px 20px;

    & > .main-image {
      width: 100%;
      height: 28vh;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        opacity: .85;
      }
    }

    & > .main-content {
      margin-top: 30px;
      width: 100%;

      & > .content-song {
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        grid-gap: 20px;
        text-align: center;

        & > div {
          cursor: pointer;
        }
      }
    }


  }
}

.is-active {
  border-bottom: $border-bottom-hover;
  color: whitesmoke;
}

.search_ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid $border-color;
  border-radius: 16px;

  & > li {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    padding: 5px 0;
    text-align: center;
    border-bottom: $border-bottom;

    & > * {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & > div {
      display: flex;
    }
  }

  & > li:last-child {
    border-bottom: none;
  }
}

.content-title {
  width: 100%;
  color: whitesmoke;
  font-size: 18px;
  padding-bottom: 10px;
}

.clicksvg {
  cursor: pointer;
  margin-right: 10px;
}
</style>
