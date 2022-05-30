function doMath(a,b){    
    if(a===0){
        if(b===0){
            alert(`x = Phương trình có vô số nghiệm`)
        } else {
            alert(`x = Phương trình vô nghiệm`)
        }
    }
    if(a!== 0){
        if(b === 0){
            alert(`x = 0`)
        } else {
            alert(`x  = ${-b/a}`)
        }
    } 

}

doMath(5,8)