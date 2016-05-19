'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('comment', [])
  .filter('timepass',function(){
      return function(input){
          var now = new Date();
          var seconds = (now.getTime()-input)/1000;
          var minutes = seconds/60;
          var hours = minutes/60;
          var days = hours/24;
          if(seconds < 59){
              return '1 minute ago';
          }
          if(minutes < 59 ){
              return Math.ceil(minutes) + ' minutes ago';
          }
          if(minutes < (23*60+59)) {
              return Math.ceil(hours) + ' hours ago';
          }
          return Math.ceil(days) + ' days ago';
      };
  })
  .directive('commentModel', function () {
    return {
      template: '<div class="comment">' +
                  '<h2 class="commentAuthor">' +
                      '{{author}}' +
                  '</h2>' +
                  '<h6>{{updateTime|timepass}}</h6>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@',
        updateTime:'@',
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
