

var interval;



function startCounter(){
    var iValue = parseInt(document.getElementById('take-input').value) ;
    
    
    if (isNaN(iValue)) {
        alert("Please enter a number");
        clearInterval(countInterval);   
        return;
    }
   
   
    // if (iValue < 1 || iValue > 9) {
    //     alert("Range out of bounds");
    //     clearInterval(countInterval);
    //     return;
    // }

    var current = document.querySelector('.current');
    var next = document.querySelector('.next');
    var count = 0;

    
    resetNumbers(current, next);
    clearInterval(interval);
    
    interval = setInterval(function(){
        if (count  == iValue){
            clearInterval(interval);
            alert('Counter has stopped');
            return;
        }
        increaseCount(current, next);
        count++;
    } , 1000);
}

function resetNumbers(current, next){
    current.innerText = 0;
    next.innerText = 1;
}

function increaseCount(current, next){
    next.classList.add('animate');

    setTimeout(function(){
        current.innerText = next.innerText;
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;
    },500);
}


