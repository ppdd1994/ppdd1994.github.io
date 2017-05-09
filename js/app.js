var myApp = angular.module('helloworld', ['ui.router']);
myApp.component('topbar',{
    templateUrl: 'tpls/pagetab.html'
});
myApp.component('navbar',{
    templateUrl: 'tpls/navbar.html'
});
myApp.config(function($stateProvider) {

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'tpls/about.html'
  };
  var skillState = {
        name: 'skill',
        url: '/skill',
        templateUrl: 'tpls/skill.html'
  };
  var workState = {
        name: 'work',
        url: '/work',
        templateUrl: 'tpls/work.html'
  }

  $stateProvider.state(workState);
  $stateProvider.state(skillState);
  $stateProvider.state(aboutState);
});