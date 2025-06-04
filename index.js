
for(let i = 0; i<=6; i++){
   
    $(`.question${i}`).click(function(){
         for (let j = 0; j <= 6; j++) {
        if (i !== j) {
          $(`.slide${j}`).slideUp();
        }
      }
    $(`.slide${i}`).slideToggle();
})
}


