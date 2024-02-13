import { createRouter, createWebHashHistory } from "vue-router";
import { routes, setTitle } from "./Routes";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes
});

router.beforeEach((to, from, next) => {
	setTitle(to);
	next();
});

export default router;