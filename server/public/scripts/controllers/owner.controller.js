petApp.controller('ownerController', ['$http', function($http){
    console.log('ownerController loaded');
    let self = this;
    self.ownerConList = {list: [] };

    getOwners();

    //get all owners from postgres
    function getOwners(){
        console.log('in get owners');
            $http({
                method: 'GET',
                url: '/owners'
            }).then(function(response){
                console.log('GET response:', response);
                self.ownerConList.list = response.data;
            }).catch(function(error){
                console.log('error in GET:', error);
            })
        }

    self.addOwner = function(owner){
            console.log('Inside add owner', owner);
            self.newOwner = null; //clear form inputs
            $http({
                method: 'POST',
                url: '/owners',
                data: owner
            }).then(function(response){
                console.log('POST response: ', response);
                getOwners();
            }).catch(function(error){
                console.log('Error in POST', error)
            });
        }
}]);