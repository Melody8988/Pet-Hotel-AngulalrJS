petApp.controller('ownerController', ['$http', function($http){
    console.log('ownerController loaded');
    let self = this;
    self.ownerConList = {list: [] };

    getOwners();

    //CONTROLLER GET
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

    //CONTROLLER POST

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

    //CONTROLLER DELETE 

    self.deleteOwner = function(owner) {
        console.log("called deleteOwner", owner)
        $http({
          method: 'DELETE',
          url: '/owners/' + owner.id
        }).then(function(response){
          console.log('can delete owner!');
          getOwners();
        }).catch(function(error){
          console.log('cannot delete', error);
        })
      }
}]);