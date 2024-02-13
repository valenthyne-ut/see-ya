import { createRouter, createWebHashHistory } from "vue-router";
import { routes, setTitle } from "./Routes";
import { useGeneratorStore } from "@/stores/GeneratorStore";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes
});

router.beforeEach((to, from, next) => {
	const generatorStore = useGeneratorStore();
	if(to.name == "generator-result" && generatorStore.curMessage === undefined) {
		next("/generator");
	} else if(to.name == "root" && from.name == "generator-result") {
		generatorStore.clearAll();
		next();
	} else {
		setTitle(to);
		next();
	}
});

export default router;