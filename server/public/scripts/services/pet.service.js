petApp.service('petService', ['$http', function($http) {
    console.log('petService has been loaded');
    const self = this;

    self.petList = {Pets: [] }

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
      self.getPets();//get all existing pet on page load

}]);