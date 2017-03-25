var calcApp = angular.module('CalculatorApp',[]);

calcApp.controller('CalcController',['$scope', function($scope) {
    $scope.result=0;
    $scope.expression=0;
    $scope.hideExpr=false;
    $scope.handleClick = function(obj){
        if(isNaN(obj.target.value)){
            if(obj.target.value == '=')
            {
                handleEquals();
            }
            else {
                handleOpr(obj.target.value);
            }
        }
        else{
            handleNum(obj.target.value)
        };
    };
    var handleEquals = function() {
        $scope.hideExpr = true;
    };
    var handleOpr = function(opr) {
        $scope.hideExpr = false;
        $scope.expression = $scope.expression + ' ' + opr + ' ';
    };
    var handleNum = function(num) {
        if($scope.hideExpr)
        {
            $scope.result = 0;
            $scope.expression=0;
        }
        $scope.hideExpr = false;
        if($scope.expression == 0) {
            $scope.expression = num + '';
        }
        else
        {
            $scope.expression = $scope.expression + '' + num;
        };
    };
}]);