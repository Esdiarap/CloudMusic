// 该文件专门用于创建整个路由器
import VueRouter from "vue-router";
import Content from "@/view/Content";
import Search from "@/view/Search";
import PlayList from "@/view/PlayList";
import PlayMV from "@/view/PlayMV";

// 创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Content
        },
        {
            path: '/content',
            name: 'Content',
            component: Content
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
            //
            props: true,
        },
        {
            path: '/playlist',
            component: PlayList
        },
        {
            path: '/playmv',
            component: PlayMV
        }

    ]
})

export default router
