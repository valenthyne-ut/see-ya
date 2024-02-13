"use strict";

import { execa } from "execa";

const MAIN_BRANCH_NAME = "main";
const PAGES_BRANCH_NAME = "pages";
const BUILD_FOLDER_NAME = "dist";

(async () => {
	try {
		await execa("git", ["checkout", "--orphan", PAGES_BRANCH_NAME]);

		console.log("Build started..");
		await execa("yarn", ["build"]);
		await execa("cp", ["./dist/index.html", "./dist/404.html"]);

		await execa("git", ["--work-tree", BUILD_FOLDER_NAME, "add", "--all"]);
		const curDateTime = new Date().toISOString().substring(0, 19);
		await execa("git", ["--work-tree", BUILD_FOLDER_NAME, "commit", "-m", `Script Pages deploy @ ${curDateTime}`]);
		
		console.log("Pushing to Pages..");
		await execa("git", ["push", "origin", `HEAD:${PAGES_BRANCH_NAME}`, "--force"]);
		await execa("rm", ["-r", BUILD_FOLDER_NAME]);

		await execa("git", ["checkout", "-f", MAIN_BRANCH_NAME]);
		await execa("git", ["branch", "-D", PAGES_BRANCH_NAME]);
		console.log("Successfully deployed; Check your settings.");
	} catch(error) {
		console.log(error);
		// eslint-disable-next-line no-undef
		process.exit(1);
	}
})();