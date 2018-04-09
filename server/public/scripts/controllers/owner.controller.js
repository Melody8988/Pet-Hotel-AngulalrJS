//petService contains all client side gets, posts, deletes
petApp.controller('ownerController', ['petService', function(petService){
    console.log('ownerController loaded');
    let self = this;
    self.ownerConList = petService.ownerConList;

    self.addOwner = function(owner){
           petService.addOwner(owner);
        }//end addOwner
    self.deleteOwner = function(owner) {
        petService.deleteOwner(owner);
      }//end deleteOwner
      
}]);//end ownerController