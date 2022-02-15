import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
    {
		path: "/home",
		component: HelloWorld
	},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router