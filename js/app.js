import Dashboard from "./dashboard.js";
import Login from "./login.js";
import Signup from "./signup.js";
import Recent from "./recent.js";

(function () {
    function init() {
        var router = new Router([
            new Route('login', 'login.html', true, Login),
            new Route('dashboard', 'dashboard.html', false, Dashboard),
            new Route('recent', 'recent.html', false, Recent),
            new Route('signup', 'signup.html', false, Signup)
        ]);
    }
    init();
}());
