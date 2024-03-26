function bissextile(année){
    if ((année % 4 === 0 && année % 100 > 0) || année % 100 === 0)   
    return true
    else return false
}

var année = 1934

if (bissextile(année)){
    console.log(année + " est bissextile.");
}else {
    console.log(année + " n'est pas bissextile.");
}

