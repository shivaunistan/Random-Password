var letters = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var randomstring = '';

        for(var i=0;i<5;i++){
            var rlet = Math.floor(Math.random()*letters.length);
            randomstring += letters[rlet];
        }
        for(var i=0;i<3;i++){
            var rnum = Math.floor(Math.random()*numbers.length);
            randomstring += numbers[rnum];
        }
     alert(randomstring);