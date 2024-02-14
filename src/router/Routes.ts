import { type RouteLocationNormalized, type RouteRecordRaw } from "vue-router";
import RootView from "@/views/Root/RootView.vue";

const DEFAULT_ROUTE_TITLE = "see-you";

export function setTitle(to: RouteLocationNormalized) {
	let newTitle: string | undefined = to.meta.title as string | undefined;
	if(!newTitle) { newTitle = DEFAULT_ROUTE_TITLE; }
	
	document.title = newTitle;
}

export const routes: readonly RouteRecordRaw[] = [
	{
		path: "/",
		name: "root",
		meta: { title: "Homepage" },
		component: RootView
	},
	{
		path: "/generator",
		name: "generator",
		meta: { title: "Generator" },
		component: () => import("@/views/Generator/RootView.vue")
	},
	{
		path: "/generator/preview",
		name: "generator-preview",
		meta: { title: "Generator preview" },
		component: () => import("@/views/Generator/PreviewView.vue")
	},
	{
		path: "/generator/result",
		name: "generator-result",
		meta: { title: "Generator result" },
		component: () => import("@/views/Generator/ResultView.vue")
	},
	{
		path: "/reader",
		name: "reader",
		meta: { title: "Reader" },
		component: () => import("@/views/Reader/RootView.vue")
	}
];