import Vue from 'vue'


const state = {
    login_email: '',
    login_token: '',
    login_name: '',
    temp_email: '',
    temp_token: '',
    temp_name: '',
    login_pwd: '',
    temp_pwd: ''
}

const getters = {
    currentUser: state => {
        return {
            email: state.login_email,
            token: state.login_token,
            // name: 'xanz123',
            name:state.login_name,
            pwd: state.login_pwd
        }
    }
}

const mutations = {
    // payload载荷
    updateData(state, payload) {
        switch (payload.name) {
            case 'email':
                state.temp_email = payload.value
                break
            case 'token':
                state.temp_token = payload.value
                break
            case 'name':
                state.temp_name = payload.name
                break
            case 'pwd':
                state.temp_pwd = payload.pwd
            default:
                console.log('Error:Dont directly mutate Vuex store')
        }
    },

    // 得到本地缓存数据
    getLocalUser(state) {
        state.login_email = localStorage.getItem('email')
        state.login_token = localStorage.getItem('token')
        state.login_name = localStorage.getItem('name')
        
    },
    //设置用户信息
    setUser(state, payload) {
        state.login_email = payload.email
        state.login_token = payload.token
        state.login_name = payload.name
        state.login_pwd = payload.pwd

    },
    logout(state) {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        state.login_email = ''
        state.login_token = ''
        state.login_name = ''
    }
}

const actions = {
    // 你需要明白 store.dispatch 可以处理被触发的action的回调函数返回的Promise，
    // 并且store.dispatch仍旧返回Promise
    login({ commit }, payload) {
        return new Promise((resolve, reject) => {
            Vue.http.get('https://douban.herokuapp.com/user/' + payload.email, {
                headers: {
                    Authorization: 'Bearer ' + payload.token
                }
            }).then(res => {
                commit({
                    type: 'setUser',
                    email: res.body.email,
                    token: res.body.token,
                    name: res.body.name,
                    pwd: res.body.pwd
                })
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    },
    register({ commit }, payload) {
        return new Promise((resolve, reject) => {
            Vue.http.post('https://douban.herokuapp.com/user/', {
                email: payload.email,
                pass: payload.pass,
                name: payload.name
            }).then(res => {
                localStorage.setItem('token', res.body.token)
                localStorage.setItem('email', res.body.email)
                localStorage.setItem('name', res.body.name)

                commit({
                    type: 'setUser',
                    email: res.body.email,
                    token: res.body.token,
                    name: res.body.name
                })
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
