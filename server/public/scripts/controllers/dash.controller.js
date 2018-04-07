petApp.controller('dashController', ['petService', function(petService){
    console.log('dashController loaded');
    let self = this;
    self.petList = petService.petList
    self.ownerConList = petService.ownerConList;

    // self.getPets = petService.getPets;

    self.addPet = function(pet){
      petService.addPet(pet);
    }
   
    self.deletePet = function(pet) {
       petService.deletePet(pet);
      }
   
}]);