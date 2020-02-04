// var friendName = ['Blake', 'Kayla', 'Cole', 'Mary', 'Josh'];
// var locationName = ['Hoover','Bessemer','Homewood', 'Mountion Brook','Pelham', 'McCalla','Vestavia Hills','Alabaster','Hueytown','Trussville'];
// var weaponName = ['Sword','Spear','Hammer','Mace','Fist','Bow','dagger','Sheild','Rod','Staff','Cannons','Whip','Bomb','Axe','Gauntlet','trident','knife']; 

$(document).ready(function() {

    // var friendName = ['Blake', 'Kayla', 'Cole', 'Mary', 'Josh'];
    // var locationName = ['Hoover','Bessemer','Homewood', 'Mountion Brook','Pelham', 'McCalla','Vestavia Hills','Alabaster','Hueytown','Trussville'];
    // var weaponName = ['Sword','Spear','Hammer','Mace','Fist','Bow','dagger','Sheild','Rod','Staff','Cannons','Whip','Bomb','Axe','Gauntlet','trident','knife']; 
    
    //making the 100 accusation 
    for(i = 1; i <= 100; i++) {
        // $('body').append('<h3>Accusation '+ i + ':</h3>');
        // $('h3').click(getAlert(i));
        var h3 = $('<h3>Accusation ' + i + ':</h3>');
        $('body').append(h3);
        $(h3).click(getAlert(i));

    };
    
    function getAlert(num) {
        var friendName = ['Blake', 'Kayla', 'Cole', 'Mary', 'Josh'];
        var locationName = ['Hoover','Bessemer','Homewood', 'Mountion Brook','Pelham', 'McCalla','Vestavia Hills','Alabaster','Hueytown','Trussville'];
        var weaponName = ['Sword','Spear','Hammer','Mace','Fist','Bow','dagger','Sheild','Rod','Staff','Cannons','Whip','Bomb','Axe','Gauntlet','trident','knife','needles']; 
        return function() {
            var name = num % friendName.length;
            console.log(name);
            var location = num % locationName.length;
            console.log(location); 
            var weapon = num % weaponName.length; 
            console.log(weapon);
            alert("I accuse "+ friendName[name]+" with the "+ weaponName[weapon]+ " in the "+ locationName[location]+ "!");
        };
    }; 
});

console.log('end of scripts');

//I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!

//JUNK CODE;

// accuse();
// function accuse() {
//     var count = 1; 
//     for (count; count <= 100; count++) {
//         var header = document.createElement('h3');
//         var text = document.createTextNode('Accusation ' + count + ':');
//         header.append(text); 
//         document.body.appendChild(header); 

//     }
//     header.addEventListener('click', function() {
//         alert('accusation ' + count + ":" + " I accuse example" ); 
//     })
// }
