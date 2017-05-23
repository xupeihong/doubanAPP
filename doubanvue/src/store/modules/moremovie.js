import Vue from 'vue'

const state = {
    hotMovies: [],
    newMovies: [],
    topMovies: []
   
}

const mutations = {
    getMoviemore(state, payload) {
        switch (payload.tag) {
            case 'hotMovies':
                state.hotMovies = payload.res
                break
            case 'newMovies':
                state.newMovies = payload.res
                break
            case 'topMovies':
                state.topMovies = payload.res
                break
            default:
                state.hotMovies = payload.res
        }
    }
}

const actions = {
    getMoviemore({ commit }) {
        Vue.http.jsonp('https://api.douban.com/v2/movie/in_theaters')
            .then(res => {
                commit({
                    type: 'getMoviemore',
                    tag: 'hotMovies',
                    res: res.body.subjects
                })
            })
        Vue.http.jsonp('https://api.douban.com/v2/movie/coming_soon')
            .then(res => {
                commit({
                    type: 'getMoviemore',
                    tag: 'newMovies',
                    res: res.body.subjects
                })
            })
        Vue.http.jsonp('https://api.douban.com/v2/movie/top250')
            .then(res => {
                commit({
                    type: 'getMoviemore',
                    tag: 'topMovies',
                    res: res.body.subjects
                })
            })
    }
}

export default {
    state,
    mutations,
    actions
}
