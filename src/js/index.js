// default index.hmtl page
import index from "../index.html";
// seperate html file
import page from "../page.html";
// default scs styles
import css from "../scss/style.scss";

// import bgtest from "../images/Resting.png";

// // material.io js code goes here
import { MDCRipple } from "@material/ripple/index";
const ripple = new MDCRipple(document.querySelector(".mdc-button"));
//
import { MDCList } from "@material/list";
const list = MDCList.attachTo(document.querySelector(".mdc-list"));
list.wrapFocus = true;

const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

import { MDCDataTable } from "@material/data-table";
const dataTable = new MDCDataTable(document.querySelector(".mdc-data-table"));
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
import { MDCIconButtonToggle } from "@material/icon-button";
// const iconToggle = new MDCIconButtonToggle(document.querySelector(".mdc-icon-button"));add-to-favorites
const iconToggle = new MDCIconButtonToggle(document.querySelector("#add-to-favorites"));

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

// var getTableWidth = function () {
// 	return window.getComputedStyle(document.body, ":before").content.replace(/\"/g, "");
// };
// cim-table-flex
// var table = document.querySelector(".cim-table-flex");
// var tableWidth = table.clientWidth;

// var table = document.getElementsByClassName("popup")[0];
// var tableWidth = window.getComputedStyle(table).width;
var tableWidth;
var getTableWidth = function () {
	return window.getComputedStyle(document.getElementsByClassName("cim-table-schedule")[0]).width;
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

tableWidth = getTableWidth();
if (tableWidth <= "600px") {
	if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("regular")) {
		document.getElementsByClassName("cim-table-schedule")[0].classList.remove("regular");
	}
	if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("large")) {
		document.getElementsByClassName("cim-table-schedule")[0].classList.remove("large");
	}
	document.getElementsByClassName("cim-table-schedule")[0].classList.add("small");
} else if (tableWidth <= "768px") {
	if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("small")) {
		document.getElementsByClassName("cim-table-schedule")[0].classList.remove("small");
	}
	if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("large")) {
		document.getElementsByClassName("cim-table-schedule")[0].classList.remove("large");
	}
	document.getElementsByClassName("cim-table-schedule")[0].classList.add("regular");
} else if (tableWidth > "768px") {
	if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("small")) {
		document.getElementsByClassName("cim-table-schedule")[0].classList.remove("small");
	}
	if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("regular")) {
		document.getElementsByClassName("cim-table-schedule")[0].classList.remove("regular");
	}
	document.getElementsByClassName("cim-table-schedule")[0].classList.add("large");
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

		tableWidth = getTableWidth();
		if (tableWidth <= "600px") {
			if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("regular")) {
				document.getElementsByClassName("cim-table-schedule")[0].classList.remove("regular");
			}
			if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("large")) {
				document.getElementsByClassName("cim-table-schedule")[0].classList.remove("large");
			}
			document.getElementsByClassName("cim-table-schedule")[0].classList.add("small");
		} else if (tableWidth <= "768px") {
			if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("small")) {
				document.getElementsByClassName("cim-table-schedule")[0].classList.remove("small");
			}
			if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("large")) {
				document.getElementsByClassName("cim-table-schedule")[0].classList.remove("large");
			}
			document.getElementsByClassName("cim-table-schedule")[0].classList.add("regular");
		} else if (tableWidth > "768px") {
			if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("small")) {
				document.getElementsByClassName("cim-table-schedule")[0].classList.remove("small");
			}
			if (document.getElementsByClassName("cim-table-schedule")[0].classList.contains("regular")) {
				document.getElementsByClassName("cim-table-schedule")[0].classList.remove("regular");
			}
			document.getElementsByClassName("cim-table-schedule")[0].classList.add("large");
		}
	},
	false
);
