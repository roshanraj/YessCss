angular.module("app",["ngRoute","ui.router"]),angular.module("app").controller("homeCtrl",["$scope","$http",function(t,o){t.setup=function(){t.topLeft=0,t.topRight=0,t.bottomRight=0,t.bottomLeft=0},t.setup()}]),angular.module("app").controller("masterCtrl",["$scope","$rootScope",function(t,o){console.log("masterCtrl")}]),angular.module("app").controller("navCtrl",["$scope","$location",function(t,o){t.logout=function(){}}]),angular.module("app").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,o,e){o.otherwise("/"),t.state("app",{url:"/",views:{header:{templateUrl:"/nav.html",controller:"navCtrl"},content:{templateUrl:"/home.html",controller:"homeCtrl"}}}).state("app.home",{url:"home",views:{"content@":{templateUrl:"users/home.html",controller:"homeCtrl"}}}),e.html5Mode(!0)}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvbWFzdGVyQ3RybC5qcyIsImNvbnRyb2xsZXJzL25hdkN0cmwuanMiLCJjb250cm9sbGVycy9yb3V0ZXMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkaHR0cCIsInNldHVwIiwidG9wTGVmdCIsInRvcFJpZ2h0IiwiYm90dG9tUmlnaHQiLCJib3R0b21MZWZ0IiwiJHJvb3RTY29wZSIsImNvbnNvbGUiLCJsb2ciLCIkbG9jYXRpb24iLCJsb2dvdXQiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RhdGUiLCJ1cmwiLCJ2aWV3cyIsImhlYWRlciIsInRlbXBsYXRlVXJsIiwiY29udGVudCIsImNvbnRlbnRAIiwiaHRtbDVNb2RlIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNBLFVBQUEsY0NEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLFlBQUEsU0FBQSxRQUFBLFNBQUFDLEVBQUFDLEdBRUFELEVBQUFFLE1BQUEsV0FDQUYsRUFBQUcsUUFBQSxFQUNBSCxFQUFBSSxTQUFBLEVBQ0FKLEVBQUFLLFlBQUEsRUFDQUwsRUFBQU0sV0FBQSxHQUdBTixFQUFBRSxXQ1ZBTCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsY0FBQSxTQUFBLGFBQUEsU0FBQUMsRUFBQU8sR0FDQUMsUUFBQUMsSUFBQSxpQkNGQVosUUFBQUMsT0FBQSxPQUNBQyxXQUFBLFdBQUEsU0FBQSxZQUFBLFNBQUFDLEVBQUFVLEdBQ0FWLEVBQUFXLE9BQUEsZ0JDRkFkLFFBQUFDLE9BQUEsT0FDQWMsUUFBQSxpQkFBQSxxQkFBQSxvQkFBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUVBRCxFQUFBRSxVQUFBLEtBRUFILEVBQ0FJLE1BQUEsT0FDQUMsSUFBQSxJQUNBQyxPQUNBQyxRQUNBQyxZQUFBLFlBQ0F0QixXQUFBLFdBRUF1QixTQUNBRCxZQUFBLGFBQ0F0QixXQUFBLGVBT0FrQixNQUFBLFlBQ0FDLElBQUEsT0FDQUMsT0FDQUksWUFDQUYsWUFBQSxrQkFDQXRCLFdBQUEsZUFTQWdCLEVBQUFTLFdBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsW1xuJ25nUm91dGUnLCd1aS5yb3V0ZXInXG5dKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5jb250cm9sbGVyKCdob21lQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHApIHtcblxuICAgICAgICAkc2NvcGUuc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS50b3BMZWZ0ID0gMDtcbiAgICAgICAgICAgICRzY29wZS50b3BSaWdodCA9IDA7XG4gICAgICAgICAgICAkc2NvcGUuYm90dG9tUmlnaHQgPSAwO1xuICAgICAgICAgICAgJHNjb3BlLmJvdHRvbUxlZnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLnNldHVwKCk7XG5cblxuXG4gICAgfSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5jb250cm9sbGVyKCdtYXN0ZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFzdGVyQ3RybFwiKTtcblxuXG4gICAgfSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5jb250cm9sbGVyKCduYXZDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgICAgICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuXG5cbiAgICAgICAgfVxuICAgIH0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICAnaGVhZGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvbmF2Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ25hdkN0cmwnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvaG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cblxuXG4gICAgICAgIC5zdGF0ZSgnYXBwLmhvbWUnLCB7XG4gICAgICAgICAgICB1cmw6ICdob21lJyxcbiAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgJ2NvbnRlbnRAJzoge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3VzZXJzL2hvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuXG5cblxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSlcblxuICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
