const routes = {
  // Auth Routes
  signIn,
  // App Routes

  home,
  profile,
  info,

};
// Auth
function signIn() {
  return "signIn";
}


// App

function home() {
  return "home";
}

function profile() {
  return "profile";
}

function info() {
  return "info";
}

export default routes;
