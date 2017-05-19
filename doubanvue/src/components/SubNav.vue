<template>
    <div class="sub-nav">
        <!-- 底部导航 -->
        <div class="navBottom" v-if="mold === 'navBottom'">
            <div class="nav-item">
                <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>
                <!-- 替换模块 -->
                <template v-if="currentUser.email">
                    <a href="#" @click.prevent="logout()">{{currentUser.name}}退出登录</a>
                </template>
                <template v-else>
                    <router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
                </template>
            </div>
            <div class="nav-item">
                <a href="https://movie.douban.com/">使用桌面版</a>
                <!-- 替换板块 -->
                <a href="#">使用豆瓣App</a>
            </div>
        </div>
        <!-- 点击切换导航 -->
        <div class="quickNav" v-if="mold === 'quickNav'">
            <ul class="quick-nav">
                <li>
                    <router-link :to="{name: 'MovieView'}">影院热映</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>
                </li>
                <li>
                    <template v-if="currentUser.email">
                        <a href="#" @click.prevent="logout()">退出登录</a>
                    </template>
                    <template v-else>
                        <router-link :to="{name: 'LoginView'}" replace>登录豆瓣</router-link>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
import {
    mapGetters
} from 'vuex'

export default {
    name: 'sub-nav',
    props: {
        mold: {
            type: String,
            default: 'quickNav'
        }
    },
    data() {
        return {}
    },
    computed: {
        currentLink: function() {
            return this.currentUser.name ? 'StatusView' : 'LoginView'
        },
        holder: function() {
            return this.currentUser.name ? this.currentUser.name : '请先登录'
        },
        // 检查当前用户的状态
        ...mapGetters(['currentUser'])
    },
    methods: {
        logout() {
            this.$store.commit({
                type: 'logout'
            })
            this.$router.push({
                name: 'HomeView'
            })
        }
    },
    created() {
        // 得到本地用户信息自动填充输入框中
        if (localStorage.getItem('email')) {
            this.$store.commit({
                type: 'getLocalUser'
            })
        }
    }
}
</script>
<style type="text/css" scoped>
.navBottom {
    width: 100%;
    border-bottom: 0.1rem solid #f3f3f3;
}

.navBottom .nav-item {
    border-top: 0.1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
}

.navBottom a {
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #42bd56;
    text-decoration: none;
    /*padding-left: 7rem;*/
}

.navBottom a:first-child {
    border-right: 0.1rem solid #e5e5e5;
    margin-left: -1rem;
}

.quickNav ul {
    overflow: hidden;
    margin: 1rem 3px 0 -40px;
    padding-top: 0.6rem;
}

.quickNav ul li {
    float: left;
    width: 50%;
    padding: 0.3rem;
    box-sizing: border-box;
    font-size: 1.5rem;
    list-style: none;
}

.quickNav ul a {
    display: block;
    max-width: 100%;
    padding: 1.2rem 0;
    line-height: 2rem;
    text-align: center;
    background-color: #f6f6f6;
    color: #494949;
    border-radius: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    text-decoration: none;
}
</style>
