(function() {

  var app = angular.module('todoListApp', []);


  app.controller('TodoList', function() {

    this.items = items;


  });

  var items = [

    {content: "Finish this challenge",
     isCompleted: false
    },
    {content: "Keep Sanity",
     isCompleted: false
    }


  ];



})();


