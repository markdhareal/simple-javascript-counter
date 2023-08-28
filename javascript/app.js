(function(){

    const buttons = document.querySelectorAll('.counterButton')
    let countNumber = 0

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains('resetButton')){
                countNumber = 0
            }else if(button.classList.contains('decreaseButton')){
                countNumber--
            }else if(button.classList.contains('increaseButton')){
                countNumber++
            }

            const countNumberDisplay = document.querySelector('#count')
            countNumberDisplay.textContent = countNumber

            if(countNumber < 0){
                countNumberDisplay.style.color = 'red'
            }else if(countNumber > 0){
                countNumberDisplay.style.color = 'green'
            }else{
                countNumberDisplay.style.color = '#333333'
            }
            
        })
    })

})()