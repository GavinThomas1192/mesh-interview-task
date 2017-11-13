'use strict';
var app = app || {};

(function (module) {
    const getReposController = {};

    getReposController.init = function () {

        app.repos.requestRepos(app.repoView.index);
    }

    module.getReposController = getReposController;
})(app);