<template>
    <div class="scroller1">
        <div class="header">
        <!-- 显示电影栏目 -->
            <h2>{{title}}</h2>
        </div>
        <div class="content">
            <!-- <slot name="promItem"></slot> -->
            <ul class="hasCover" v-if="type === 'hasCover'">
                <li v-for="item in items">
                    <router-link :to="'subject/' + items[item].id" append>
                        <img v-if="item.images" :src="item.images.large" alt="">
                        <span class="title">{{item.title}}</span>
                        <rating v-if="item.rating" :rating="item.rating"></rating>
                    </router-link>
                </li>
            </ul>
            <ul class="onlyString" v-if="type === 'onlyString'">
                <li v-for="item in items" style="border-color: #FFAC2D;">
                    <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
import Rating from './Rating'
export default {
    name: 'scroller1',
    props: ['title', 'type', 'items'],
    components: {
        Rating
    },
    data() {
        return {

        }
    }
}
</script>
<style type="text/css" scoped=""></style>
