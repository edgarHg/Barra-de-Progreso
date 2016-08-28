angular.module('App', [])
	.controller('ctrlBarraProgreso', ['$scope', function($scope){
		$scope.intPorcentaje = 75;
	}])

	.directive('barraProgreso', ['$interval', function($interval) {
    return {
        restrict : 'E',
        scope : {
        	porcentaje : '@'
        },
        template : "<div class='contenedor-progreso'>"+
						"<label>Avance {{contPorcentaje}}%</label>"+
						"<div class='barra-total'>"+
							"<div class='barra-dinamica' ng-style='anchoPorcentaje'></div>"+
						"</div>"+
                    "</div>",
        link : function(scope, element){
			scope.contPorcentaje = 0;
			scope.anchoPorcentaje ='';
			var intPorcentaje = parseInt(scope.porcentaje);

			var intervalo = $interval(function () {
				if(scope.contPorcentaje === intPorcentaje){
					$interval.cancel(intervalo);
				}else{
					scope.contPorcentaje += 1;
					scope.anchoPorcentaje = {width: scope.contPorcentaje + '%'};
				}
			}, 20);
		}
	}
}]);