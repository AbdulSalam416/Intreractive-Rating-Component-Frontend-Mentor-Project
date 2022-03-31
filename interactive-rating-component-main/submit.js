

let submitButton = document.getElementsByClassName("submit-button")[0];


let selected = document.getElementsByClassName('selected')[0];

let notSelected = document.getElementsByClassName('not-selected')[0];

let rating=   document.getElementById('rating');


submitButton.addEventListener("click", showRating)




function showRating(){
        notSelected.style.display = 'none';
        selected.style.visibility = 'visible';
}

function modifyText(value){
        
        rating.innerHTML= value
}