(function(angular) {
  'use strict';
  // ����ģ��
  var myApp = angular.module('myModule',[]);
  // ���������������ڱ�¶���ݣ�
  myApp.controller('todoController', ['$scope',function($scope) {
  	// ������������ģ��
  	$scope.text = '';
  	// ���¼��б�����ݼ�ģ��
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
  	// ����¼�
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
  	// �Ƴ������¼�
  	$scope.remove = function(id) {
  		for(var i=0; i<$scope.todoList.length; i++) {
  			if($scope.todoList[i].id === id) {
  				$scope.todoList.splice(i,1);
  			}
  		}
  	};
  	// �������������¼�
  	$scope.clear = function() {
  		var result = [];
  		for(var i=0; i<$scope.todoList.length; i++) {
  			if(!$scope.todoList[i].completed) {
  				result.push($scope.todoList[i]);
  			}
  		}
  		$scope.todoList = result;
  	};
  	// �Ƿ����������¼�
  	$scope.existCompleted = function() {
  		for(var i=0; i<$scope.todoList.length; i++) {
  			if($scope.todoList[i].completed) {
  				return true;
  			}
  		}
  			return false;
  	};
  	// �༭״̬
  	$scope.currentEditing = function(id, completed) {
  		if(completed == false){
	  			$scope.editingId = id;
  		}
  	};
  	$scope.save = function() {
  		$scope.editingId = '';
  	};
  	// �л���ѡ��״̬
  	var now = true;
  	$scope.toggleAll = function() {
  		for(var i=0; i<$scope.todoList.length; i++) {
  			$scope.todoList[i].completed = now;
  		}
  		now = !now;
  	};


  }]);

})(angular);
