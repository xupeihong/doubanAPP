<template>
    <div class="home-view has-header">
        <!-- 四个模块 -->
        <sub-nav mold="quickNav"></sub-nav>
        <!-- 新闻展示 -->
        <list mold="thumbnail" :items="events"></list>
        <!-- 无限加载数据 -->
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <loading slot="spinner"></loading>
        </infinite-loading>
    </div>
</template>
<script type="text/javascript">
import {
    mapState,
    mapActions
} from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/SubNav'
import List from '../components/List'
import Loading from '../components/Loading'
export default {
    name: 'home-view',
    components: {
        SubNav,
        List,
        InfiniteLoading,
        Loading
    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            events: state => state.activities.events
        })
    },
    methods: {
        onInfinite() {
            setTimeout(() => {
                this.loadMore()
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            }, 1000)
        },
        ...mapActions([
            'loadMore',
            'getEvent'
        ])
    }
}
</script>
<style type="text/css" scoped>
.sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
}

.has-header {
    margin-top: 4.8rem;
}
</style>
