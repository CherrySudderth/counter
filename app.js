
const btns = document.queryCommandIndeterm.SelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;
console.log(btns)
btnsfor(function (btn) {
    btn.addEventListener('click', (event) => {
        console.log(event.targetClassList);


        if (event.target.ClassList.contains('decrease')){
        count -= 1;
    } else if(event.target.classList.contains('increase')) {
        count += 1;
    } else {
        count = 0;
    }
 if(count > 0) value.style.color = "green";
 if(count < 0) value.style.color = "purple";
 if(count < 0) value.style.color = "red";

});
})

          
           
