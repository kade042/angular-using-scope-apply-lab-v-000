function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
				'<span>clock</span>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function($scope) {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			document.addEventListener('keydown', function () {
				//scope.counter++;
				ctrl.counter++;
				scope.$apply();
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
