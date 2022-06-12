import {createRouter, createWebHashHistory} from 'vue-router'

import Login from './components/account/Login.vue'
import Register from './components/account/Register.vue'
import index from './components/guest/index.vue'
import Target from './components/guest/Target/Target.vue'
import Sentence from './components/guest/Sentence/Sentence.vue'

const routes = [
    {
        path: '/',
        component: index,
        children:[
            {
                path: '',
                redirect: {name :'target' }
            },
            {
                path: 'target',
                name: 'target',
                component: Target,
            },
            {
                path: 'sentence',
                component: Sentence,
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

const router =createRouter({
  history: createWebHashHistory(),
  routes, 
})


export default router