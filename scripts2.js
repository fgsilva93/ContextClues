var body = document.body;

var friend_name =   ['Jess', 'Clark', 'Rob', 'Jimbo', 'Ryan'];
var place_name = ['the club', 'the cloud', 'the cellar', 'the peace garden', 'the creepy shed','the place', 'the megadome', 'the shit closet', 'the dog cage', 'the outhouse'];
var weapon_name =    ['fork', 'remote', 'shoe', 'chew toy','spatula','pistol','club', 'car', 'pillow', 'chair', 'belt', 'baloon', 'chainsaw', 'hammer', 'knife','pan', 'revolver', 'shotgun', 'machete', 'poop'];



$(document).ready(function(){
    for (var i=1; i<101; i++) {
            var h3 = $('<h3> Accusation ' + i + '</h3>');
            $(body).append(h3);
            var trigger = randomAlert(i);
            h3.click(trigger);
    }
    function randomAlert(num) {
        return function() {
            var name = num % friend_name.length;
                console.log(name);
            var place = num % place_name.length;
                console.log(place);
            var weapon = num % weapon_name.length;
                console.log(weapon);
            alert('I accuse ' + friend_name[name] + ' with the ' + weapon_name[weapon] + ' in the ' + place_name[place] + '!');  
        }
    }
})