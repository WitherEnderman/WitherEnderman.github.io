/******/ (function(modules) {
/******/ 	var installedModules = {};
/******/ 	function __webpack_require__(moduleId) {
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 		return module.exports;
/******/ 	}
/******/ 	return __webpack_require__(0);
/******/ })
([
function(module, exports, __webpack_require__) {


	
	$(document).ready(function ($) {

	
	    // typed.js啪啪啪啪
	    $(".typed a").typed({
	        strings: ["越越","I love U", "平底锅敲宁捞袋"],
	        typeSpeed: 39,
	        backSpeed: 7,
	        backDelay: 699
	    });
	


	    // 顶部头像动画
	    document.getElementsByClassName('avatar')[0].onmouseover = function () {
	        this.classList.add('animated', 'tada');
	    };
	    document.getElementsByClassName('avatar')[0].onmouseout = function () {
	        this.classList.remove('animated', 'tada');
	    };
	

	});

}
]);
