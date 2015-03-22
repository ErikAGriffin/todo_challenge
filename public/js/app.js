(function() {

  var app = angular.module('todoListApp', []);

  app.controller('TodoList', function() {

    this.items = items;

    this.newItem = {};

    this.addItem = function() {
      this.items.unshift(this.newItem);
      this.newItem = {};
    };
  });


  var items = [

    {content: "Welcome to TODOList!",
     isCompleted: false
    },
    {content: "This item is completed!",
     isCompleted: true
    }


  ];



})();


