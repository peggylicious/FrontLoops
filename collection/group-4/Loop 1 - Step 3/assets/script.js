let switchA = document.querySelectorAll('.switch');
document.addEventListener('click', function(event){
    for(var i = 0; i < switchA.length; i++){
        if(event.target == switchA[i]){
            // console.log(event.target);
            // if(switchA[i].hasAttribute('transform')){
            //     console.log("has");
            // }
            console.log(switchA[i]);
            switchA[i].classList.add('move_back');
            // break;
        }
    }
})