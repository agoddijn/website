app.factory('LoginService', ['$http', '$q', function($http, $q) {

  var user = null;

  return ({
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
    register: register,
    getUser: getUser
  });

  function getUser() {
    if (localStorage.getItem("user") != 'null' && user == null) {
      loadFromLocalStorage();
    };
    // DEBUG
    console.log(user);
    // END DEBUG
    return user;
  };

  function login(data) {
    var deferred = $q.defer();

    $http.post('/login', data).then(function(res){
      if (res.data.success) {
        // DEBUG
        console.log("Great success");
        console.log(res.data.user);
        // END DEBUG
        localLogin(res.data.user);
        deferred.resolve(res.data);
      } else {
        // DEBUG
        console.log("Error");
        console.log(res.data.error);
        // END DEBUG
        deferred.reject(res.data);
      }
    })

    return deferred.promise;
  };

  function register(data) {
    var deferred = $q.defer();

    // Register user
    $http.post('/register', data).then(function(res){
      if (res.data.success) {
        // DEBUG
        console.log("Great success!");
        console.log(res.data.user);
        // END DEBUG
        localLogin(res.data.user);
        deferred.resolve(res.data);
      } else {
        // DEBUG
        console.log("Big failure!");
        console.log(res.data.error);
        // END DEBUG
        deferred.reject(res.data);
      };
    })

    return deferred.promise;
  };

  function logout() {
    user = null;
    localStorage.removeItem('user');
  };

  function isLoggedIn() {
    // DEBUG
    console.log(user != null);
    // END DEBUG
    return user != null;
  };

  function localLogin(curUser) {
    user = curUser;
    localStorage.setItem('user', curUser);
  };

  function loadFromLocalStorage() {
    user = localStorage.getItem("user");
  };

}])