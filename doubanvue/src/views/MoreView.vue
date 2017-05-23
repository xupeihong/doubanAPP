<template>
    <div class="more-movie">
        <HeaderBar></HeaderBar>
        <!-- <MoreScroller :title="this.title" type="hasCover" :items="this.items"></MoreScroller> -->
        <!--  <MoreScroller title="免费在线观影" type="hasCover" :items="topMovies"></MoreScroller>
        <MoreScroller title="新片速递" type="hasCover" :items="newMovies"></MoreScroller> -->
        <!-- 不同栏目切换，v-if判断点击的是哪个栏目的更多 -->
        <MoreScroller title="影院热映" type="hasCover" :items="hotMovies" v-if="nums==='1'"></MoreScroller>
        <MoreScroller title="免费在线观影" type="hasCover" :items="topMovies" v-if="nums==='2'"></MoreScroller>
        <MoreScroller title="新片速递" type="hasCover" :items="newMovies" v-if="nums==='3'"></MoreScroller>
    </div>
</template>
<script type="text/javascript">
import MoreScroller from '../components/MoreScroller'
import MoreMovie from '../components/MoreMovie'
import Rating from '../components/Rating'
import HeaderBar from '../components/HeaderBar'
import $ from 'jquery'
import {    mapState} from 'vuex'


export default {
    name: 'moremovie',
    data() {
        return {
            nums: ''
        }
    },
    computed: {
        // 从movie.js来获取豆瓣数据
        ...mapState({
            hotMovies: state => state.movie.hotMovies,
            topMovies: state => state.movie.topMovies,
            newMovies: state => state.movie.newMovies
        })
    },
    methods: {
        getMoviemore: function() {
            this.$store.dispatch('getMoviemore')
        }
    },
    components: {
        Rating,
        HeaderBar,
        MoreScroller,
        MoreMovie
    },
    created() {
        this.getMoviemore()
    },
    beforeMount() {

    },
    mounted() {
        //获取更多的缓存num
        var num = sessionStorage.getItem("num")
            // 根据num来切换三个栏目电影
        if (num == 1) {
            this.nums = '1'
                // this.title = "影院热映"
                // this.items = "hotMovies"
                // str = "https://api.douban.com/v2/movie/in_theaters"
        } else if (num == 2) {
            this.nums = '2'
                // this.title = "免费在线观影"
                // this.items = 'topMovies'
                // str = "https://api.douban.com/v2/movie/coming_soon"
        } else if (num == 3) {
            this.nums = '3'
                // this.title = "新片速递"
                // this.items = 'newMovies'
                // str = "https://api.douban.com/v2/movie/top250"
        }

    }


}
</script>
<style type="text/css" scoped="">
a {
    text-decoration: none;
}

.more-movie {
    padding-top: 1rem;
}

.header {
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 1.6rem;
}

.header a {
    float: right;
    font-size: 1.44rem;
    margin-top: 1rem;
}

.header a:last-child {
    color: #42bd56;
}

.header h2 {
    display: inline-block;
    position: absolute;
    left: 2rem;
}

.content {
    box-sizing: content-box;
}

.content ul {
    padding: 0.8rem 0;
}

.hasCover {
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
}

.hasCover .title {
    display: block;
    max-width: 100%;
    margin-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.hasCover li {
    display: inline-block;
    width: 10rem;
    margin-left: 1rem;
}

.hasCover li:first-child {
    padding-left: 0.8rem;
}

.hasCover img {
    height: 15rem;
}

.onlyString {
    overflow-x: auto;
    white-space: nowrap;
}

.onlyString li {
    display: inline-block;
    margin: 0 0 0.8rem 1.6rem;
    font-size: 1.6rem;
    border: solid 0.1rem;
    border-radius: 0.4rem;
    vertical-align: middle;
}

.onlyString a {
    height: 5rem;
    line-height: 5rem;
    padding: 0 2.4rem;
    letter-spacing: 0.16rem;
    overflow: auto;
    display: block;
    text-align: center;
}

.onlyString li:empty {
    width: 100%;
    display: block;
    height: 0.1rem;
    border: 0;
    margin: 0;
}
</style>
