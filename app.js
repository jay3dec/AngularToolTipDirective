angular.module('myApp',[])

.controller('myCtrl',function () {
	// body...
})

.directive('tooltip',function(){
	return{
		restrict:'A',
		controller: function ($scope, $element) {
            $scope.isShown = false;
            this.showHover = function () {
                $scope.isShown = $scope.isShown == true ? false : true;
            }
        },
        transclude: true,
        link: function (scope, element, attr, ctrl) {
            element.bind('click', function () {
                scope.$apply(function(){
                	ctrl.showHover();
                });
            });
        },
		template:
			'<div ng-transclude></div>' +
			'<div id="divPopup" ng-show="isShown">' +
			    '<div class="floatLeft">'+
			        '<img src="images/tooltipArrow.png" />'+
			    '</div>'+
			    '<div class="floatLeft margin3">'+
			        '<span>'+
			            'I am the Hover Popup'+
			        '</span>'+
			    '</div>'+
			'</div>'
	}
})