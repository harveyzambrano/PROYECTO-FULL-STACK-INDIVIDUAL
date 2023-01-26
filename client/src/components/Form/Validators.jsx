function validate(InputRecipes) {
    let errors = {};
    let RegExpressionUrl= /^https?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/
    let RegExpressionText = /^[a-zA-Z\s]*$/;
    let RegExpressionNum= /^[0-9,$]*$/;

    if(!RegExpressionUrl.test(InputRecipes.image)){
        errors.image = 'Agregue correctamente la URL'
    }
    if(InputRecipes.image <1){
        errors.image = 'Agregue url de Imagen'
    }
    if(!RegExpressionText.test(InputRecipes.name)){
        errors.name = 'No se permiten números ni caracteres especiales'
    }
    if(!RegExpressionNum.test(InputRecipes.healthScore)){
    errors.healthScore = 'Solo se permiten numeros'
    }
    //*-----------------------------------
    if(!InputRecipes.name){
        errors.name = 'Se requiere un Nombre';
    }
    if( InputRecipes.name.length < 4 ){
        errors.name = 'El nombre debe tener mas de cinco caracteres'
    }    
    if(InputRecipes.name.length > 10 ){
        errors.name = 'El nombre debe tener menos de Dies caracteres'
    }
    //*-----------------------------------
    if(InputRecipes.healthScore < 1 ){
        errors.healthScore = 'Debe ser mayor a 0'
    }
    if( InputRecipes.healthScore> 10 ){
        errors.healthScore = 'Debe ser menor a 10'
    }  
    //*-----------------------------------
    if(!InputRecipes.summary){
        errors.summary = 'Se requiere un Resumen';
    }
    if(InputRecipes.summary.length < 3 ){
        errors.summary = 'El resumen debe tener mas de 3 caracteres'
    }
    if( InputRecipes.summary.length > 10 ){
        errors.summary = 'El resumen debe tener menos de 10 caracteres'
    } 
    //*-----------------------------------
    if(!InputRecipes.steps){
        errors.steps = 'Se requiere los Pasos';
    }
    if(InputRecipes.steps.length < 3 ){
        errors.steps = 'La descripcion  de los pasos debe tener mas de 3 caractere'
    }
    if( InputRecipes.steps.length > 10 ){
        errors.steps = "La descripcion  de los pasos debe tener menos de 10 caracteres"
    }
    //*-----------------------------------
    if (InputRecipes.diets.length < 1) {
        errors.diets = "Seleccione una Dieta"
    } 
   

    return errors;
} 

module.exports ={
    validate
}