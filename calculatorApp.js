var calcApp = angular.module('CalculatorApp',[]);

calcApp.controller('CalcController',['$scope', function($scope) {
    $scope.result=0;
    $scope.expression=0;
    $scope.hideExpr=false;
    var lastOpr;
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
        $scope.expression = $scope.result;
    };
    var handleOpr = function(opr) {
        $scope.hideExpr = false;
        if(lastOpr != opr)
        {
            $scope.expression = $scope.expression + ' ' + opr + ' ';
            lastOpr = opr;
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