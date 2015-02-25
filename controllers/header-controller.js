app.controller("HeaderController", function ($scope, $http) {

    $scope.IsVisibleDisplayModal = false;
    $scope.Title = "Test KNT 01";
    $scope.ShowModal = false;
    $scope.AppUser = {
        UserName: "Guest",
        FirstName: "",
        LastName: "",
        Email: ""
    };

    /**
     * Adds two numbers
     * @param {Number} a
     * @param {Number} b
     * @return {Number} sum
     */
    $scope.loadAllData = function () {
            var searchString = $scope.SearchAllData.split(" ");
            //       console.log($scope.User);
            var stringArray = [];
            for (var i = 0; i < searchString.length; i++) {
                console.log(searchString);
                if (i != searchString.length - 1) {
                    stringArray.push(searchString[i]);
                }
            }
            if (searchString.length > 0) {
                $scope.IsVisibleDisplayModal = true;
            } else {
                $scope.IsVisibleDisplayModal = false;
            }
        }
        /**
         * Login to access system
         * @return {Number} sum
         */
    $scope.Login = function (email, password) {
            var url = "http://localhost:3000/users/LoadUsers";
            $http.get(url)
                .success(function (data) {
                    //    console.log(data);
                    $scope.EditData = data;
                    $scope.CurrentIndex = index;
                })
                .error(function () {
                    alert("edit Data error");
                });


            $("#div-datatable").hide("slow");
            $("#div-editbox").show("slow");
        }
        /**
         * Log out to exit the system
         * @return {Number} sum
         */
    $scope.Logout = function () {

    }
});