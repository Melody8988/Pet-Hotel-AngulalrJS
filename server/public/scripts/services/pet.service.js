petApp.service('petService', ['$http', function($http) {
    console.log('petService has been loaded');
    const self = this;

    self.petList = {Pets: [] }
    self.ownerConList = {list: [] };

      //DASH GET
      self.getPets = function(){
        console.log('On page load, get pets');
            $http.get('/dash').then(function(response){
             self.petList.Pets = response.data;
        }).catch(function(error){
        console.log(error, 'Error getting pets');
        })
    }

    //DASH POST 
    self.addPet = function(pet){
        console.log('Inside add pet!', pet);
        self.newPet = null; //clear form inputs
        $http({
            method: 'POST',
            url: '/dash',
            data: pet
        }).then(function(response){
            console.log('POST response: ', response);
            self.getPets();
        }).catch(function(error){
            console.log('Error in POST', error)
        });
    }

    //DASH DELETE 
    self.deletePet = function(pet) {
        console.log("called deletePet", pet)
        $http({
          method: 'DELETE',
          url: '/dash/' + pet.id
        }).then(function(response){
          console.log('can delete pet!');
          self.getPets();
        }).catch(function(error){
          console.log('cannot delete', error);
        })
      }
    //OWNER GET
    self.getOwners = function(){
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

    //OWNER POST
    self.addOwner = function(owner){
            console.log('Inside add owner', owner);
            self.newOwner = null; //clear form inputs
            $http({
                method: 'POST',
                url: '/owners',
                data: owner
            }).then(function(response){
                console.log('POST response: ', response);
                self.getOwners();
            }).catch(function(error){
                console.log('Error in POST', error)
            });
        }

    //OWNER DELETE 
    self.deleteOwner = function(owner) {
        console.log("called deleteOwner", owner)
        $http({
          method: 'DELETE',
          url: '/owners/' + owner.id
        }).then(function(response){
          console.log('can delete owner!');
          self.getOwners();
        }).catch(function(error){
          console.log('cannot delete', error);
        })
      }
      //get all existing pets and owners
      self.getOwners();
      self.getPets();

}]);