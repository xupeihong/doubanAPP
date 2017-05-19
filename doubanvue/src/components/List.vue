<template>
    <div class="list">
        <template v-if="mold === 'thumbnail'" v-for="item in items">
            <router-link class="thumbnail" :to="{name: 'DetailView', params: { id: item.id }}">
                <div class="content">
                    <img :src="item.image_hlarge" alt="cover">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content | subStr}}</p>
                </div>
                <div class="author">
                    <span class="name">{{item.category_name}}</span>
                    <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
                </div>
            </router-link>
        </template>
        <template v-if="mold === 'basic'">
            <ul class="basic">
                <li v-for="item in items">
                    <a href="#">
                        <h3>{{item.title}}</h3>
                        <div class="info">{{item.comments}}</div>
                    </a>
                </li>
            </ul>
        </template>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'list',
    props: {
        mold: {
            type: String,
            default: 'basic'
        },
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    filters: {
        subStr: function(value) {
            value.replace(/<.+>|\s/, '')
            return value.slice(0, 30)
        }
    }
}
</script>
<style type="text/css" scoped>
a {
    text-decoration: none;
}

li {
    list-style: none;
}

.list .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
}

.list .thumbnail .content {
    overflow: hidden;
    margin-bottom: 1rem;
}

.list .thumbnail h3 {
    margin-top: 0;
    margin-bottom: 0.6rem;
    line-height: 1.41;
    text-align: justify;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
}

.list .thumbnail p {
    line-height: 1.5;
    text-align: justify;
    color: #aaa;
    font-size: 1.2rem;
    overflow: hidden;
}

.list .thumbnail img {
    float: right;
    width: 25.6%;
    height: 8.678rem;
    margin-left: 2.5rem;
    border-style: none;
}

.list .thumbnail .author {
    font-size: 1.2rem;
    color: #ccc;
    margin-left: -26rem;
}

.list .thumbnail .label {
    position: absolute;
    bottom: 2.5rem;
    right: 1.8rem;
}

.list .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
}

.list .basic h3 {
    padding: 0;
    line-height: 1.41;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
}

.list .basic .info {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #42bd56;
}
.list .basic li{
    text-align:left;
    margin-left: -3rem;
}
</style>
