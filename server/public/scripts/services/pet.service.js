petApp.service('petService', ['$http', function($http) {
    console.log('petService has been loaded');
    const self = this;
    self.petList = {Pets: [] }
    self.ownerConList = {list: [] };

    //DASHBOARD GET - get all existing pets 
    self.getPets = function(){
        // console.log('On page load, get pets');
        $http.get('/dash').then(function(response){
        self.petList.Pets = response.data;
        }).catch(function(error){
        console.log(error, 'Error getting pets');
        })//end catch
    }//end getPets

    //DASHBOARD POST - add new pet 
    self.addPet = function(pet){
        // console.log('Inside add pet!', pet);
        self.newPet = null; //clear form inputs
        $http({
            method: 'POST',
            url: '/dash',
            data: pet
        }).then(function(response){
            console.log('POST response: ', response);
            self.getPets();
            self.getOwners();
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
          self.getOwners();
        }).catch(function(error){
          console.log('cannot delete', error);
        })
      }

      //UPDATE STATUS
      self.changeStatus = function(petId, updatedStatus){
        updatedStatus = !updatedStatus;

        console.log('new status will be', updatedStatus);

        $http({
            method: 'PUT', 
            url: '/dash/' + petId,
            data: {checkedIn: updatedStatus}
        }).then(function(response){
            console.log('checkin status changed!');
            self.getPets();
        }).catch(function(error){
            console.log('error changing checkin status', error);
        })
    }

    //OWNER GET
    self.getOwners = function(){
        console.log('in get owners');
            $http({
                method: 'GET',
                url: '/owners'
            }).then(function(response){
                console.log('GET owners:', response);
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
                self.getPets();
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
          self.getPets();
        }).catch(function(error){
          console.log('cannot delete', error);
          alert(`You must remove owner's pet from the hotel before deleting owner information`);
        })
      }
      //get all existing pets and owners
      self.getOwners();
      self.getPets();

}]);