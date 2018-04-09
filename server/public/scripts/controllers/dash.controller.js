//petService contains all client side gets, posts, deletes, updates
petApp.controller('dashController', ['petService', function(petService){
    console.log('dashController loaded');
    let self = this;

    //object containing all pets
    self.petList = petService.petList
    //object containing all owners
    self.ownerConList = petService.ownerConList;

    self.addPet = function(pet){
      petService.addPet(pet);
      }//end addPet
    self.deletePet = function(pet) {
       petService.deletePet(pet);
      }//end deletePet
    self.changeStatus = function(petId, updatedStatus) {
        petService.changeStatus(petId, updatedStatus);
      }//end changeStatus
      
}]);//end dashController