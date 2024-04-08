import HomePage from '@/pages/HomePage.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
