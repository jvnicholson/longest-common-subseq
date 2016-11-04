(function () {
	'use strict';

	angular.module('app', ['ngMaterial'])
		.component('lcs', {
			controller: LCSComponentController,
			templateUrl: 'lcs.component.html'
		});

	function LCSComponentController() {
		var ctrl = this;

		// Properties
		ctrl.str1 = "";
		ctrl.str2 = "";
		ctrl.lcs = "";

		// Methods
		ctrl.findLcs = findLcs;
		ctrl.onKeyUp = function (e) {
			if (e.keyCode === 13) findLcs();
		};


		function lcs(str1, str2) {

			if (!str1 || !str1.length || !str2 || !str2.length)
				return "";

			var str1Len = str1.length,
				str2Len = str2.length;

			if (str1[str1Len - 1] === str2[str2Len - 1]) {
				return lcs(str1.substr(0, str1Len - 1), str2.substr(0, str2Len -1)) + str1[str1Len - 1];
			} else {
				var test1 = lcs(str1, str2.substr(0, str2Len - 1));
				var test2 = lcs(str1.substr(0, str1Len - 1), str2);

				return test1.length > test2.length ? test1 : test2;
			}
		}

		function findLcs() {
			console.log("str1: " + ctrl.str1[0]);
			console.log("str2: " + ctrl.str2);
			ctrl.lcs = lcs(ctrl.str1, ctrl.str2);
		}

	}
})();
