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

    {content: "Finish this challenge",
     isCompleted: false
    },
    {content: "Item 2",
     isCompleted: false
    }


  ];



})();


