petApp.controller('dashController', ['petService', function(petService){
    console.log('dashController loaded');
    let self = this;
    self.petList = petService.petList

    // petService.getPets();

    self.addPet = function(pet){
      petService.addPet(pet);
    }
   
    self.deletePet = function(pet) {
       petService.deletePet(pet);
      }
   
}]);