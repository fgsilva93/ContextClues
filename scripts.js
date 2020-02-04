$(document).ready(function() {
    for(i=1; i <= 100; i++) {
        $('body').append('<h3 class=h3>Assucation '+ i + ':</h3>');
        $('.h3').click(getAlert(i));
    };
    function getAlert(num) {
        var friendName = ['Blake', 'Kayla', 'Cole', 'Mary', 'Josh'];
        var locationName = ['Hoover','Bessemer','Homewood', 'Mountion Brook','Pelham', 'McCalla','Vestavia Hills','Alabaster','Hueytown','Trussville'];
        var weaponName = ['Sword','Spear','Hammer','Mace','Fist','Bow','dagger','Sheild','Rod','Staff','Cannons','Whip','Bomb','Axe','Gauntlet','trident']; 

        var name = num % friendName.length;
        var location = num % locationName.length;
        var weapon = num % weaponName.length; 
        function alerting() {
            alert("Accusation " +i+ ":  I accuse "+ friendName[name]+" with the "+ weaponName[weapon]+ " in the "+ locationName[location]+ "!");
        };
        return alerting; 
    };
});

//I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
//junk code;

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
