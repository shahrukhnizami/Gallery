var  large = document.getElementById("preview")
var small= document.getElementsByClassName("img-fluid")


console.log(small)
for( var i=0 ;i < small.length;i++){
    console.log(small[i])
    small[i].addEventListener('mouseover',function(){
        large.src = this.src
        this.style.border= '3px solid red'

    })

    small[i].addEventListener('mouseout',function(){
        
        this.style.border= '3px solid grey'

    })

    

}

// for(i=0; i<small.length; i++){
//     small[i].addEventListener('',function{

//     })}