export const validateObjEmpty = (object) =>{
    if(Object.keys(object).length === 0){
        return true;
    }else{
        return false;
    }
}