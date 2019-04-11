/**
* @description Changes input to selected element
* @constructor
* @param {string} defaultValue - The value that displays everytime browser refreshes
* @param {string} inputVal - The selected value from list of options
* @param {string} optBlock - The container for list of options
* @param {string} checkmark - Checks a selected value
* @param {string} lastClicked - Stores the target element that was last clicked
* @returns {string} Selected option
*/

var inputVal = document.querySelectorAll('.options p'),
    defaultValue = document.querySelector('.default p'),
    optBlock = document.getElementsByClassName('options')[0],
    checkmark = document.getElementsByClassName('tick'),
    lastClicked;

// Assigns click eventlistener to list of options
// Hides Option block when value is selected
document.addEventListener('click', function(event){
    let actualWidth = window.innerWidth;
    for (let i = 0; i < inputVal.length; i++){
            if (window.matchMedia("(max-width: 600px)").matches){
                if(event.target.matches('.opt-list p')){
                    defaultValue.innerHTML = event.target.innerHTML;
                    lastClicked = event.target;
                    checkmark[i].style.visibility = 'visible';
                    if(actualWidth < 600){
                        if(inputVal[i] == event.target){
                            continue;
                        }
                        checkmark[i].style.visibility = 'hidden';
                    }
                    optBlock.style.display = 'none';
                    console.log(event.target.previousElementSibling);
                }
            }else if(window.matchMedia("(min-width: 605px)").matches){
                if(event.target.matches('.opt-list p')){
                    lastClicked = event.target;
                    lastClicked.style.backgroundColor = 'dodgerblue';
                    if(actualWidth > 600){
                        if(inputVal[i] == event.target){
                            continue;
                        }
                        inputVal[i].style.backgroundColor = 'white';
                    }
                }
            }else{
                console.log('yo');
            }
    }
    if (event.target.matches('.container')){
        if (window.matchMedia("(max-width: 600px)").matches){
            optBlock.style.display = 'none';
            console.log('You jus clicked the window!');
        }
    }
})

// Displays option block when user clicks input
defaultValue.addEventListener('click', function(e){
    optBlock.style.display = 'block';
})

// Checks if the browser window is maximized or minimized
// if browser window is maximized, change color of selected option
// If it is minimized, remove color and instead, add a checkmark
window.addEventListener("resize", function(e){
    for (let u = 0; u < inputVal.length; u++){
        if (window.innerWidth > 600){
            optBlock.style.display = 'block';
            lastClicked.style.backgroundColor = 'dodgerblue';
            defaultValue.innerHTML = event.target.innerHTML;
            lastClicked.previousElementSibling.style.visibility = 'hidden';
        }
        else{
            optBlock.style.display = 'none';
            lastClicked.style.backgroundColor = 'white';
            defaultValue.innerHTML = lastClicked.innerHTML;
            lastClicked.previousElementSibling.style.visibility = 'visible';
        }
    }
})