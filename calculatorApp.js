var calcApp = angular.module('CalculatorApp',[]);

calcApp.controller('CalcController',['$scope', function($scope) {
    $scope.result=0;
    $scope.expression=0;
    $scope.hideExpr=false;
    var isOpr = false;
    $scope.handleClick = function(obj){
        if(isNaN(obj.target.value)){
            if(obj.target.value == '=')
            {
                handleEquals();
            }
            else if (obj.target.value == 'Clear')
            {
                $scope.expression = 0;
                $scope.result = 0;
                $scope.hideExpr = false;
            }
            else {
                handleOpr(obj.target.value);
            }
            isOpr = true;
        }
        else{
            handleNum(obj.target.value);
            isOpr = false;
        };
    };
    var handleEquals = function() {
        $scope.hideExpr = true;
        $scope.expression = $scope.result;
    };
    var handleOpr = function(opr) {
        $scope.hideExpr = false;
        if(!isOpr)
        {
            $scope.expression = $scope.expression + ' ' + opr + ' ';
        }
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
        $scope.result = eval($scope.expression);
    };
}]);