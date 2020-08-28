/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n// let arr = [\n//   {}\n// ]\n\n/*\n 1. create project object\n - add event listener\n - get input value\n - use input value to create object in local storage\n - use local storage to update project field\n\n -user shouldnt be able to create a list item without a project title\n\n - add functionality for the close btn on each proj title\n - add horizontal scroll\n\n\n 2. create todo item\n - add event listener\n - add some validation for the fields\n - get input value and use it to store list items in local storage\n - use local storage to update dom list field\n\n - add event listener to update list item status\n - add eventlistener for implementing editing functionality\n */\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setListItemsStorage\"])();\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setListStorage\"])();\nlet currentProject = -1;\nfunction Project(title) {\n\tthis.title = title;\n\tlet idx;\n\tif (Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listLength\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]) === 0) {\n\t\tidx = 0;\n\t} else {\n\t\tidx = JSON.parse(localStorage.getItem(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]))[Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listLength\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]) - 1].id + 1;\n\t}\n\tthis.id = idx;\n}\n\nfunction Item(parentId, title, description, date, priority) {\n\tthis.parentId = parentId;\n\tthis.title = title;\n\tthis.date = date;\n\tthis.description = description;\n\tthis.priority = priority;\n\tthis.status = false;\n\tlet idx;\n\tif (Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listLength\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]) === 0) {\n\t\tidx = 0;\n\t} else {\n\t\tidx = JSON.parse(localStorage.getItem(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]))[Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listLength\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]) - 1].id + 1;\n\t}\n\tthis.id = idx;\n}\n\nconst projectInput = document.getElementById('project');\nconst createProject = document.getElementById('create-project');\n\ncreateProject.addEventListener('click', () => {\n\tif (projectInput.value) {\n\t\tconst newProject = new Project(projectInput.value);\n\t\tObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setLocalStorage\"])(Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]), _storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"], newProject);\n\t\tprojectInput.value = '';\n\t\tlocation.reload();\n\t}\n});\n\nconst ul = document.querySelector('.list-group');\n\nfunction render() {\n\tul.innerHTML = '';\n\tlet local = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]);\n\n\tlocal.forEach((item, idx, array) => {\n\t\tconst li = document.createElement('li');\n\t\tli.classList.add('list-group-item', 'm-1', 'pr-4', 'border', 'rounded', 'wrap');\n\t\tli.innerText = array[idx].title;\n\t\tli.id = array[idx].id;\n\n\t\tconst icon = document.createElement('i');\n\t\ticon.classList.add('fa', 'fa-times-circle', 'ml-2', 'text-danger');\n\n\t\tli.appendChild(icon);\n\t\tul.appendChild(li);\n\t\tif (ul.scrollWidth === ul.clientWidth) {\n\t\t\trightBtn.style.color = 'grey';\n\t\t\tleftBtn.style.color = 'grey';\n\t\t} else {\n\t\t\trightBtn.style.color = 'black';\n\t\t}\n\t});\n}\n\nvar rightBtn = document.getElementById('slide-right');\nvar leftBtn = document.getElementById('slide-left');\n\nrightBtn.onclick = function() {\n\tlet scrolled = ul.scrollWidth - ul.scrollLeft === ul.clientWidth;\n\tsideScroll(ul, 'right', 25, 100, 10);\n\tif (scrolled) {\n\t\trightBtn.style.color = 'grey';\n\t} else {\n\t\trightBtn.style.color = 'black';\n\t\tleftBtn.style.color = 'black';\n\t}\n};\n\nleftBtn.onclick = function() {\n\tsideScroll(ul, 'left', 25, 100, 10);\n\tif (ul.scrollLeft == 0) {\n\t\tleftBtn.style.color = 'grey';\n\t} else {\n\t\tleftBtn.style.color = 'black';\n\t\trightBtn.style.color = 'black';\n\t}\n};\n\nfunction sideScroll(element, direction, speed, distance, step) {\n\tlet scrollAmount = 0;\n\tvar slideTimer = setInterval(function() {\n\t\tif (direction == 'left') {\n\t\t\telement.scrollLeft -= step;\n\t\t} else {\n\t\t\telement.scrollLeft += step;\n\t\t}\n\t\tscrollAmount += step;\n\t\tif (scrollAmount >= distance) {\n\t\t\twindow.clearInterval(slideTimer);\n\t\t}\n\t}, speed);\n}\nwindow.onload = render();\nlet closeBtns = document.querySelectorAll('.fa-times-circle');\n\ncloseBtns.forEach((item, index) => {\n\tlistenClose(item, index);\n});\n\nfunction listenClose(item, index) {\n\titem.addEventListener('click', (e) => {\n\t\tlet storedItems = [ ...Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]) ];\n\t\tstoredItems.splice(index, 1);\n\n\t\tObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(storedItems, _storage__WEBPACK_IMPORTED_MODULE_0__[\"listStorage\"]);\n\t\tlocation.reload();\n\t});\n}\n\nconst clickableLi = document.querySelectorAll('.list-group-item');\nclickableLi.forEach((item) => {\n\titem.addEventListener('click', () => {\n\t\tgetItems(item.id);\n\t\tshowForm(item);\n\t});\n});\n\nfunction showForm(item) {\n\tconst itemForm = document.getElementById('form');\n\titemForm.classList.add('d-flex');\n\tcurrentProject = item.id;\n}\n\nfunction getItems(id) {\n\tlet items = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]);\n\tconst result = items.filter((item) => item.parentId == id);\n\trenderItems(result);\n}\n\nfunction renderItems(result) {\n\tlet items = document.getElementById('items');\n\titems.innerHTML = '';\n\n\tresult.forEach((item, idx, array) => {\n\t\tconst itemsDiv = document.createElement('div');\n\t\titemsDiv.classList.add('border', 'w-100', 'p-1', 'my-1', 'rounded', 'bg-light', 'shadow', 'toggleItems');\n\n\t\tconst itemHeader = document.createElement('div');\n\t\titemHeader.classList.add('w-100', 'd-flex', 'justify-content-between', 'p-2', 'my-1', 'position-relative');\n\t\titemsDiv.appendChild(itemHeader);\n\n\t\tconst colorDot = document.createElement('span');\n\t\tcolorDot.classList.add('bg-danger', 'p-1', 'color-dot', 'position-absolute');\n\n\t\titemHeader.appendChild(colorDot);\n\t\tconst itemTitle = document.createElement('div');\n\t\titemTitle.classList.add('togglerTitle');\n\t\titemTitle.innerText = item.title;\n\t\titemHeader.appendChild(itemTitle);\n\n\t\tconst itemIcons = document.createElement('div');\n\t\titemIcons.classList.add('d-flex');\n\t\titemIcons.dataset.id = item.id;\n\t\titemHeader.appendChild(itemIcons);\n\n\t\tconst itemEdit = document.createElement('i');\n\t\titemEdit.classList.add('fa', 'fa-pencil', 'm-1');\n\n\t\tconst itemStatus = document.createElement('i');\n\t\titemStatus.classList.add('fa', 'fa-check-circle', 'm-1');\n\n\t\titemIcons.appendChild(itemEdit);\n\t\titemIcons.appendChild(itemStatus);\n\n\t\tconst itemDetail = document.createElement('div');\n\t\titemDetail.classList.add('d-none', 'flex-column', 'align-items-start', 'border');\n\n\t\tconst itemDate = document.createElement('div');\n\t\titemDate.innerText = 'Date: ' + item.date;\n\n\t\tconst itemDescription = document.createElement('div');\n\t\titemDescription.innerText = 'Description: ' + item.description;\n\n\t\tconst itemPriority = document.createElement('div');\n\t\titemPriority.innerText = 'Priority: ' + item.priority;\n\n\t\titemDetail.appendChild(itemDescription);\n\t\titemDetail.appendChild(itemDate);\n\t\titemDetail.appendChild(itemPriority);\n\t\titemsDiv.appendChild(itemDetail);\n\n\t\titems.appendChild(itemsDiv);\n\t});\n\titemToggleListener();\n\titemStatusListener();\n}\n\nconst projecItmBtn = document.getElementById('projectItem');\nprojecItmBtn.addEventListener('click', () => {\n\tconst itemFrom = document.getElementById('itemForm');\n\tlet children = itemFrom.children;\n\tlet inputs = Array.from(children);\n\tconst newItem = new Item(currentProject, inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);\n\tconsole.log(newItem);\n\tObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"setLocalStorage\"])(Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]), _storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"], newItem);\n\tgetItems(currentProject);\n});\n\nfunction itemToggleListener() {\n\tconst toggleItems = document.querySelectorAll('.togglerTitle');\n\ttoggleItems.forEach((item) => {\n\t\titem.addEventListener('click', () => {\n\t\t\tconsole.log(item.parentNode.parentNode.childNodes[1]);\n\t\t\tif (item.parentNode.parentNode.childNodes[1].classList.contains('d-none')) {\n\t\t\t\titem.parentNode.parentNode.childNodes[1].classList.remove('d-none');\n\t\t\t\titem.parentNode.parentNode.childNodes[1].classList.add('d-flex');\n\t\t\t} else {\n\t\t\t\titem.parentNode.parentNode.childNodes[1].classList.add('d-none');\n\t\t\t\titem.parentNode.parentNode.childNodes[1].classList.remove('d-flex');\n\t\t\t}\n\t\t});\n\t});\n}\n\nfunction itemStatusListener() {\n\tconst itemStatus = document.querySelectorAll('.fa-check-circle');\n\titemStatus.forEach((item) => {\n\t\titem.addEventListener('click', () => {\n\t\t\tupdateItemStatus(item.parentNode.dataset.id);\n\t\t});\n\t});\n}\n\nfunction updateItemStatus(itemId) {\n\tlet listItems = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"getLocalStorage\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]);\n\tlistItems.forEach((item) => {\n\t\tif (item.id == itemId) {\n\t\t\titem.status == false ? (item.status = true) : (item.status = false);\n\t\t}\n\t});\n\tObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"updateLocalStorage\"])(listItems, _storage__WEBPACK_IMPORTED_MODULE_0__[\"listItemsStorage\"]);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: setListItemsStorage, setListStorage, setLocalStorage, getLocalStorage, listStorage, listItemsStorage, updateLocalStorage, listLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListItemsStorage\", function() { return setListItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListStorage\", function() { return setListStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalStorage\", function() { return setLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocalStorage\", function() { return getLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listStorage\", function() { return listStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemsStorage\", function() { return listItemsStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLocalStorage\", function() { return updateLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listLength\", function() { return listLength; });\nlet listStorage = 'list';\nconst defaultProject = { title: 'Smoking', id: 0 };\nconst defaultNotTodo1 = {\n\tparentId: 0,\n\tid: 0,\n\ttitle: 'Do not buy cigarattes',\n\tdate: '28.8.2020',\n\tdescription: 'avoid buyin new pack of cigarattes',\n\tpriority: 'high',\n\tstatus: false\n};\nconst defaultNotTodo2 = {\n\tparentId: 1,\n\tid: 1,\n\ttitle: 'Try to smoke not more than twice in a day',\n\tdate: '29.8.2020',\n\tdescription: 'Try to smoke not more than twice in a day',\n\tpriority: 'medium',\n\tstatus: true\n};\nconst defaultNotTodo3 = {\n\tparentId: 0,\n\tid: 2,\n\ttitle: 'Avoid smokers',\n\tdate: '30.8.2020',\n\tdescription: 'Avoid spending time with people who smoke',\n\tpriority: 'low',\n\tstatus: false\n};\n\nconst setListStorage = () => {\n\tlet listLen = 0;\n\tif (JSON.parse(localStorage.getItem(listStorage))) {\n\t\tlistLen = JSON.parse(localStorage.getItem(listStorage)).length;\n\t} else {\n\t\tlocalStorage.setItem(listStorage, JSON.stringify([]));\n\t\tsetLocalStorage(getLocalStorage(listStorage), listStorage, defaultProject);\n\t}\n};\n\nlet listItemsStorage = 'list-items';\nconst setListItemsStorage = () => {\n\tlet listItemsLen = 0;\n\tif (JSON.parse(localStorage.getItem(listItemsStorage))) {\n\t\tlistItemsLen = JSON.parse(localStorage.getItem(listItemsStorage)).length;\n\t} else {\n\t\tlocalStorage.setItem(listItemsStorage, JSON.stringify([]));\n\t\tsetLocalStorage(getLocalStorage(listItemsStorage), listItemsStorage, defaultNotTodo1);\n\t\tsetLocalStorage(getLocalStorage(listItemsStorage), listItemsStorage, defaultNotTodo2);\n\t\tsetLocalStorage(getLocalStorage(listItemsStorage), listItemsStorage, defaultNotTodo3);\n\t}\n};\n\nfunction getLocalStorage(name) {\n\tlet local = JSON.parse(localStorage.getItem(name));\n\treturn local;\n}\n\nfunction setLocalStorage(array, name, value) {\n\tarray.push(value);\n\tlocalStorage.setItem(name, JSON.stringify(array));\n}\n\nfunction updateLocalStorage(array, name) {\n\tlocalStorage.setItem(name, JSON.stringify(array));\n}\n\nconst listLength = (name) => {\n\tlet listLen = 0;\n\tif (JSON.parse(localStorage.getItem(name))) {\n\t\tlistLen = JSON.parse(localStorage.getItem(name)).length;\n\t}\n\treturn listLen;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });