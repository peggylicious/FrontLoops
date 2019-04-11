/**
* How to describe your code
* @description Changes input to selected element
* @constructor
* @param {string} defaultValue - The value that displays everytime browser refreshes
* @param {string} inputVal - The selected value from list of options
* @param {string} optBlock - The container for list of options
* @param {string} checkmark - Checks a selected value
* @returns {string} Selected option
*/

var inputVal, defaultValue, optBlock, checkmark;
    inputVal = document.querySelectorAll('.options p');
    defaultValue = document.querySelector('.default p');
    optBlock = document.getElementsByClassName('options')[0];
    checkmark = document.getElementsByClassName('tick');

// Displays default value when browser refreshes
//  Hides all checkmarks when browser loads
window.onload = function(){
    for (let x = 0; x < inputVal.length; x++){
        checkmark[x].style.visibility = 'hidden';
        optBlock.style.display = 'none';
    }
}

// Assigns click eventlistener to list of options
// Hides Option block when value is selected
for (let i = 0; i < inputVal.length; i++){
    inputVal[i].addEventListener('click', function(e){
        defaultValue.innerHTML = this.innerHTML;
        optBlock.style.display = 'none';
        checkmark[i].style.visibility = 'visible';
        for (let a = 0; a < inputVal.length; a++){
            if (inputVal[a] == event.target){
                continue;
            }
            checkmark[a].style.visibility = 'hidden';
        }
    })
}

// Displays option block when user clicks input
defaultValue.addEventListener('click', function(e){
    optBlock.style.display = 'block';
})