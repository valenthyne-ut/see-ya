import RootView from "@/views/RootView.vue";
import { createRouter, createWebHashHistory, type RouteLocationNormalized, type RouteRecordRaw } from "vue-router";

const DEFAULT_ROUTE_TITLE = "see-you";

const routes: readonly RouteRecordRaw[] = [
	{
		path: "/",
		name: "root",
		meta: { title: "Homepage" },
		component: RootView
	}
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes
});

function setTitle(to: RouteLocationNormalized) {
	let newTitle: string | undefined = to.meta.title as string | undefined;
	if(!newTitle) { newTitle = DEFAULT_ROUTE_TITLE; }
	document.title = newTitle;
}

router.beforeEach((to, from, next) => {
	setTitle(to);
	next();
});

export default router;
