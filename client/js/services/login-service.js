const USER = "agoddijnuser";

app.factory('LoginService', ['$http', '$q', function($http, $q) {

  var user = null;

  return ({
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
    register: register,
    getUser: getUser,
    //attemptLogin: attemptLogin
  });

  function getUser() {
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
    localStorage.removeItem(USER);
  };

  function isLoggedIn() {
    return user != null;
  };

  function localLogin(curUser) {
    user = curUser;
  };

  // function loadFromLocalStorage() {
  //   user = localStorage.getItem(USER);
  //   // DEBUG
  //   console.log("Loading from local storage");
  //   console.log(user);
  //   console.log(user.username);
  //   // END DEBUG
  // };

  /*
    Attempts a login from the local storage,
    returns true if successeful, false otherwise
  */
  // function attemptLogin() {
  //   // DEBUG
  //   console.log("attemptLogin");
  //   console.log(localStorage.getItem(USER));
  //   console.log(user);
  //   // END DEBUG
  //   if (localStorage.getItem(USER) != null && !isLoggedIn()) {
  //     loadFromLocalStorage();
  //     // DEBUG
  //     console.log("Returning true");
  //     console.log(user)
  //     // END DEBUG
  //     return true;
  //   } else {
  //     // DEBUG
  //     console.log("Returning false");
  //     // END DEBUG
  //     return false;
  //   };
  // };

}])