var zipcodeInput = document.getElementById('zipcode');
var itemInput = document.getElementById('item');


function handleSubmit(event) {
    event.preventDefault();
    var zipcode = zipcodeInput.value;
    var item = itemInput.value;
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


// WE STILL NEED TO FIND AND ADD OUR API KEYS, AS WELL AS A FUNCTION TO MAKE SURE THAT THE ZIPCODE ISNT BLANK 