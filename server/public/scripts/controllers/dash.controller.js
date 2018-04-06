petApp.controller('dashController', ['$http', function($http){
    console.log('dashController loaded');
    let self = this;
    self.petList = {Pets: [] }
    self.ownersList = { list: [] }
    getPets();

    //CONTROLER GET
    function getPets(){
        console.log('On page load, get pets');
            $http.get('/dash').then(function(response){
             self.petList.Pets = response.data;
        }).catch(function(error){
        console.log(error, 'Error getting pets');
        })
    }

    //CONTROLLER POST 
    self.addPet = function(pet){
        console.log('Inside add pet!', pet);
        self.newPet = null; //clear form inputs
        $http({
            method: 'POST',
            url: '/dash',
            data: pet
        }).then(function(response){
            console.log('POST response: ', response);
            getPets();
        }).catch(function(error){
            console.log('Error in POST', error)
        });
    }

    //CONTROLLER DELETE 
    self.deletePet = function(pet) {
        console.log("called deletePet", pet)
        $http({
          method: 'DELETE',
          url: '/dash/' + pet.id
        }).then(function(response){
          console.log('can delete pet!');
          getPets();
        }).catch(function(error){
          console.log('cannot delete', error);
        })
      }
}]);