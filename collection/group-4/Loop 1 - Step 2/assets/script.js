var eachTab = document.querySelectorAll('.tab p'),
    chosen = document.querySelectorAll('.display p')[0],
    button = document.querySelector('input[type=button]'),
    inputVal = document.querySelector('input[type=number]'),
    oldV;

// Saves chosen/changed input value even after the form has been reset
document.addEventListener('focusout', function(){
    oldV = Number(inputVal.value);
})

// For clicking on tabs in the tabs pane and reflecting its values in the display area
document.addEventListener('click', function(event){
    for(let i = 0; i < eachTab.length; i++){
        if(event.target.matches(".tab p")){
            chosen.innerHTML = event.target.innerHTML + " Content";
            if(eachTab[i] ==  event.target){
                eachTab[i].style.color = "black";
                continue;
            }
            chosen.innerHTML = event.target.innerHTML + " Content";
            eachTab[i].style.color = "grey";
        }
    }
// For Input
    for(let x = 0; x < eachTab.length; x++){
        if(event.target.matches("input[type=button]")){
            if(oldV >= 1 && oldV <= 3){
                // The below condition can be set as (oldV === x+1) or (oldV-1 === x)
                if(oldV === x+1){
                    eachTab[x].style.color = "black";
                    chosen.innerHTML = eachTab[x].innerHTML + " Content";
                    document.getElementById('myForm').reset();
                    // continue;
                }else{
                    eachTab[x].style.color = "grey";
                }
            }else{
                alert('Index is invalid');
                document.getElementById('myForm').reset();
                break;
            }
        }
    }
})