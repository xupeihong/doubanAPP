<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view class="view"></router-view>
        <router-view class="view" name="subject"></router-view>
        <router-view class="view" name="search"></router-view>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    font-size: 62.5%;
}
</style>
