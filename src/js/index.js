// default index.hmtl page
import index from "../index.html";
// seperate html file
import page from "../page.html";
// default scs styles
import css from "../scss/style.scss";

// // material.io js code goes here
import { MDCRipple } from "@material/ripple/index";
const ripple = new MDCRipple(document.querySelector(".mdc-button"));
//
// import { MDCList } from "@material/list";
// const list = MDCList.attachTo(document.querySelector(".mdc-list"));
// list.wrapFocus = true;
//
// import { MDCDrawer } from "@material/drawer";
// const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
//
// const listEl = document.querySelector(".mdc-drawer .mdc-list");
// const mainContentEl = document.querySelector(".main-content");
//
// listEl.addEventListener("click", (event) => {
// 	drawer.open = false;
// });
//
// document.body.addEventListener("MDCDrawer:closed", () => {
// 	mainContentEl.querySelector("input, button").focus();
// });
//
// import { MDCTopAppBar } from "@material/top-app-bar";
//
// // Instantiation
// const topAppBarElement = document.querySelector(".mdc-top-app-bar");
// // const topAppBar = new MDCTopAppBar(topAppBarElement);
//
// // import { MDCTopAppBar } from "@material/top-app-bar";
// // const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
// // topAppBar.setScrollTarget(document.getElementById("main-content"));
// topAppBar.listen("MDCTopAppBar:nav", () => {
// 	drawer.open = !drawer.open;
// });

import { MDCDrawer } from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

// Dismissible Drawer
import { MDCTopAppBar } from "@material/top-app-bar";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById("main-app-bar"));
topAppBar.setScrollTarget(document.getElementById("main-content"));
topAppBar.listen("MDCTopAppBar:nav", () => {
	drawer.open = !drawer.open;
});

const listEl = document.querySelector(".mdc-drawer .mdc-list");
const mainContentEl = document.querySelector(".main-content");

listEl.addEventListener("click", (event) => {
	drawer.open = false;
});

// document.body.addEventListener("MDCDrawer:closed", () => {
// 	mainContentEl.querySelector("input, button, a").focus();
// });

// Breakpoint
// Setup the breakpoint variable
var breakpoint;

var menuButton = document.getElementsByClassName("mdc-top-app-bar__navigation-icon");
var navigationDrawer = document.getElementsByClassName("mdc-drawer");

// Get the current breakpoint
var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ":before").content.replace(/\"/g, "");
};

// Calculate breakpoint on page load
breakpoint = getBreakpoint();
if (breakpoint === "xsmall" || breakpoint === "small" || breakpoint === "medium") {
	console.log("Drawer should now be hidden (modal)");
	navigationDrawer[0].classList.add("mdc-drawer--modal");
} else {
	console.log("Drawer should now be standard");
	if (navigationDrawer[0].classList.contains("mdc-drawer--modal")) {
		console.log("Has modal classs");
		navigationDrawer[0].classList.remove("mdc-drawer--modal");
	}
}

// Recalculate breakpoint on resize
window.addEventListener(
	"resize",
	function () {
		breakpoint = getBreakpoint();

		if (breakpoint === "xsmall" || breakpoint === "small" || breakpoint === "medium") {
			console.log("Drawer should now be hidden (modal)");
			navigationDrawer[0].classList.add("mdc-drawer--modal");
		} else {
			console.log("Drawer should now be standard");
			if (navigationDrawer[0].classList.contains("mdc-drawer--modal")) {
				console.log("Has modal classs");
				navigationDrawer[0].classList.remove("mdc-drawer--modal");
			}
		}
	},
	false
);
