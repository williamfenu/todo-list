const addLineThroughWhenDone = (inputId) => {
    const lineThroughClass = "line-through";
    const inputClasses = document.getElementById(inputId).classList;

    if(inputClasses.contains(lineThroughClass)){
        inputClasses.remove(lineThroughClass)
    }else{
        inputClasses.add(lineThroughClass);
    }
}