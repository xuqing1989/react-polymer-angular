'use strict';

describe('Directive: comment', function () {

  // load the directive's module
  beforeEach(module('comment'));

  var element1,element2,element3,element4, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    var now = new Date().getTime();
    var time1 = now - 20*1000;
    var time2 = now - 6.5*60*1000;
    var time3 = now - 7.5*60*60*1000;
    var time4 = now - 12.5*24*60*60*1000;
    element1 = angular.element('<comment-model author="Santiago" update-time="'+time1+'">hola</comment-model>');
    element1 = $compile(element1)(scope);
    element2 = angular.element('<comment-model author="Santiago" update-time="'+time2+'">hola</comment-model>');
    element2 = $compile(element2)(scope);
    element3 = angular.element('<comment-model author="Santiago" update-time="'+time3+'">hola</comment-model>');
    element3 = $compile(element3)(scope);
    element4 = angular.element('<comment-model author="Santiago" update-time="'+time4+'">hola</comment-model>');
    element4 = $compile(element4)(scope);
    scope.$digest();
  }));

  it('should render the author', function (){
    expect(element1.find('h2').html()).toBe('Santiago');
  });

  it('should render the msg', function (){
    expect(element1.find('span').html()).toBe('hola');
  });

  it('should render time less than 1 min',function(){
    expect(element1.find('h6').html()).toBe('1 minute ago');
  });

  it('should render time more than 1 min less than 1 hour',function(){
    expect(element2.find('h6').html()).toBe('7 minutes ago');
  });

  it('should render time more than more than 1 hour less than 1 day',function(){
    expect(element3.find('h6').html()).toBe('8 hours ago');
  });

  it('should render time more than more than 1 day',function(){
    expect(element4.find('h6').html()).toBe('13 days ago');
  });
});
