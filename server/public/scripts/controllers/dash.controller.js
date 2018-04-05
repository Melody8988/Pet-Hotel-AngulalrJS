petApp.controller('dashController', ['$http', function($http){
    console.log('dashController loaded');
    let self = this;
    self.petList = {Pets: [] }
    getPets();

    //GET ON PAGE LOAD
    function getPets(){
        console.log('On page load, get pets');
            $http.get('/dash').then(function(response){
             self.petList.Pets = response.data;
        }).catch(function(error){
        console.log(error, 'Error getting pets');
        })
    }
    //POST commented out because I've used the old way
    // self.addPet = function(pet){
    //     console.log('in self.addPet!', pet)

    //     $http.post('/dash', pet).then(function(response){
    //         console.log('pet successfully posted!');
    //         getPets();
    //     }).catch(function(error){
    //         console.log('Error in posting pet', error)
    //     })
    // }

    self.addPet = function(pet){
        console.log('Inside add pet!', pet);
        // self.newToDo = null;//clear input field 
    
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
}]);