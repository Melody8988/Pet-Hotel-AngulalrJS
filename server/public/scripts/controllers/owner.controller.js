petApp.controller('ownerController', ['petService', function(petService){
    console.log('ownerController loaded');
    let self = this;
    self.ownerConList = petService.ownerConList;

    self.addOwner = function(owner){
           petService.addOwner(owner);
        }

    self.deleteOwner = function(owner) {
        petService.deleteOwner(owner);
      }

}]);