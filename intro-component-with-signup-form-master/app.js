const formField = document.querySelectorAll(".form-field")
const form = document.getElementById("form")


const isEmpty = (field) =>{
    if(field.value == ""){
        return true
    }
    return false
}
form.addEventListener('submit', (e)=>{
    var valid = 0
    e.preventDefault()
    console.log(formField)
    formField.forEach(field => {
        input = field.children[1]
        checker = isEmpty(input)
        console.log(checker)
        if(checker){
            field.classList.add("error")
        }else{
            if(field.classList.contains("error")){
                field.classList.remove("error")
                valid++;
            }
        }
    })

    if(valid == 4){
        form.submit()
    } 
    // form.submit()

})