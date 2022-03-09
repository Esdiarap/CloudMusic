import Vue from "vue";
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

// 准备actions-- 用于响应组件中的动作
const actions = {
    addsong(context, value){
        context.commit('ADDSONG', value)
    }
}
// 准备mutations-- 用于操作数据state
const mutations = {
    ADDSONG(state, song) {
        state.songInfo.push({
            songName: song.songName,
            artist: song.singerName,
            songURL: song.songURL,
            picURL: song.songPicURL,
            lyric: song.lyric
        })
    }
}
// 准备state-- 用于存储数据
const state = {
    // 搜索关键字
    searchKeyWords: "",
    // 歌曲搜索总数
    searchSongCount:"",

    songInfo:[],
}

export default new Vuex.Store({
    actions,
    mutations,
    state
});
