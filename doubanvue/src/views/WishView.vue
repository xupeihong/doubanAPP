<template>
    <div class="wish-view" >
        <div class="hd">
            <span class="title">{{subject.title}}</span>
            <a href="javascript:history.go(-1);" class="btn-cancel">取消</a>
            <a href="javascript:;" class="btn-ok">确定</a>
        </div>
        <div class="bd">
            <div class="con star hide">
                <span class="rating-star-max-gray"></span>
                <span class="rating-star-max-gray"></span>
                <span class="rating-star-max-gray"></span>
                <span class="rating-star-max-gray"></span>
                <span class="rating-star-max-gray"></span>
            </div>
            <div class="insert-bd">
                <div class="tit">打标签</div>
                <div class="con remark">
                    <template v-if="genres">
                        <tags :items="genres"></tags>
                    </template>
                    <input type="text" name="" id="input-tag" class="hide" size="5">
                    <a href="javascript:;" class="add-tag">+</a>
                </div>
                <div class="tit">
                    写评论
                    <span class="max-length"></span>
                </div>
                <div class="con">
                    <textarea style="overflow:hidden;resize: none;"></textarea>
                </div>
            </div>
        </div>
        <div class="con share">
            <span class="shar-douban">
        		<input type="checkbox" name="douban" id="chekdouban" value="douban" checked>
        		<label for="chekdouban">
        			同步到豆瓣
        		</label>
        	</span>
        </div>
    </div>
</template>
<script type="text/javascript">
import {
    mapState,
    mapGetters
} from 'vuex'
import HeaderBar from '../components/HeaderBar'
import Tags from '../components/Tags'
import $ from 'jquery'
export default {
    name: 'wish-view',
    components: {
        HeaderBar,
        Tags
    },
    data() {
        return {
            items: new Array(5)
           
        }
    },
    methods: {
       
    },
    computed: {
        ...mapState({
            subject: state => state.subject.subject,
            adImgUrl: state => state.subject.adImgUrl,
            questions: state => state.subject.questions,
            movieTags: state => state.movie.movieTags
        }),
        ...mapGetters({
            subjectMeta: 'subjectMeta',
            summary: 'summary',
            genres: 'genres'
        })
    }
}
</script>
<style type="text/css" scoped="">
.wish-view {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-top: 44px;
    overflow: auto;
    background: #fff;
    z-index: 1000;
}

.hd {
    height: 44px;
    width: 100%;
    color: #333;
    border-bottom: 1px solid #efefef;
    font-size: 20px;
    line-height: 44px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background: #fff;
}

.hd .title {
    display: inline-block;
    width: 70%;
    margin: 0 15%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.hd a {
    color: #42bd56;
    font-size: 15px;
    position: absolute;
    top: 0;
    z-index: 100001;
    text-decoration: none;
}

.hd a.btn-cancel {
    left: 18px;
}

.hd a.btn-ok {
    right: 18px;
}

.bd {
    max-width: 650px;
    margin: 0 auto;
}

.star {
    padding: 40px 0;
    text-align: center;
    position: relative;
}

.hide {
    display: none;
}

.star .rating-star-max-gray {
    height: 0;
    width: 12%;
    padding-top: 12%;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100%;
    -webkit-tap-highlight-color: transparent;
}

.star span {
    margin: 0 6px;
}

.rating-star-max-gray {
    background-image: url(/f/talion/0eb3a627a2c8679d6a90aa5f567566b2ad659c9e/pics/card/ic_star_n.png);
}

.insert-bd {
    padding: 0 18px;
    position: relative;
}

.insert-bd .tit {
    margin-top: 40px;
}

.bd .tit {
    padding-bottom: 10px;
    color: #aaa;
    font-size: 15px;
    margin-left: -23rem;
}

.insert-bd .remark {
    font-size: 0;
    text-align: left;
}

.remark a {
    height: 34px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 34px;
    padding: 0 15px;
    margin: 0 5px 10px;
    color: #aaa;
    font-size: 17px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background: #fff;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
}

#input-tag {
    height: 34px;
    min-width: 80px;
    max-width: 200px;
    border: 0;
    border-radius: 28px;
    padding: 0 15px 2px;
    margin-bottom: 10px;
    font-size: 17px;
    line-height: 34px;
    vertical-align: top;
    color: #fff;
    text-align: center;
    background: #42bd56
}

.remark a .add-tag {
    font-size: 20px;
    line-height: 20px;
}

.max-length {
    float: right;
}

.insert-bd textarea {
    height: 130px;
    width: 100%;
    font-size: 17px;
    color: #494949;
    line-height: 1.5;
    border-radius: 2px;
    padding: 15px;
    background-color: #fff;
    box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.05), inset -1px -1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #ccc;
    box-sizing: border-box;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-family: monospace;
}

.share {
    max-width: 614px;
    margin: 10px auto 40px;
    padding: 0 18px 20px;
}

.share span {
    margin-right: 19rem;
}

.share span input {
    display: none;
}

input {
    outline: 0;
}

.share span input:checked+label {
    color: #494949;
}

.share span input:checked+label:after {
    content: '\2713';
    border: 1px solid #494949;
    color: gray;
}

.share span input+label {
    position: relative;
    padding-left: 20px;
    font-size: 15px;
    color: #ccc;
}

.share span input+label:after {
    content: '';
    height: 13px;
    width: 13px;
    border: 1px solid #ccc;
    position: absolute;
    top: 1px;
    left: 0;
    color: #ccc;
    font-size: 17px;
    line-height: 10px;
    text-align: center;
}

.isHiden {
    display: none;
}
</style>
