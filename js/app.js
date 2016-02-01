(function(angular) {
  'use strict';
  // 创建模块
  var myApp = angular.module('myModule',[]);
  // 创建控制器（用于暴露数据）
  myApp.controller('todoController', ['$scope',function($scope) {
  	// 给输入框绑定数据模型
  	$scope.text = '';
  	// 给事件列表绑定数据集模型
  	$scope.todoList = [
  		{
  			id: 1,
  			text:'thing-1',
  			completed: false
  		},
  		{
  			id: 2,
  			text: 'thing-2',
  			completed: false
  		},
  		{
  			id: 3,
  			text: 'thing-3',
  			completed: true
  		},
  	];
  	// 添加事件
  	$scope.add = function() {
  		if($scope.text) {
  			$scope.todoList.push({
  			id: new Date(),
  			text: $scope.text,
  			completed: false
  		});
  		$scope.text = '';
  		}

  	};
  	// 移除单个事件
  	$scope.remove = function(id) {
  		for(var i=0; i<$scope.todoList.length; i++) {
  			if($scope.todoList[i].id === id) {
  				$scope.todoList.splice(i,1);
  			}
  		}
  	};
  	// 清除所有已完成事件
  	$scope.clear = function() {
  		var result = [];
  		for(var i=0; i<$scope.todoList.length; i++) {
  			if(!$scope.todoList[i].completed) {
  				result.push($scope.todoList[i]);
  			}
  		}
  		$scope.todoList = result;
  	};
  	// 是否存在已完成事件
  	$scope.existCompleted = function() {
  		for(var i=0; i<$scope.todoList.length; i++) {
  			if($scope.todoList[i].completed) {
  				return true;
  			}
  		}
  			return false;
  	};
  	// 编辑状态
  	$scope.currentEditing = function(id, completed) {
  		if(completed == false){
	  			$scope.editingId = id;
  		}
  	};
  	$scope.save = function() {
  		$scope.editingId = '';
  	};
  	// 切换复选框状态
  	var now = true;
  	$scope.toggleAll = function() {
  		for(var i=0; i<$scope.todoList.length; i++) {
  			$scope.todoList[i].completed = now;
  		}
  		now = !now;
  	};


  }]);

})(angular);
