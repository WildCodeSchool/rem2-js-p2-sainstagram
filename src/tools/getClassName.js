function getClassName(category) {
    if (category){
        if (category !== "Déesse"){
            return category.split("'").pop().split(" ").pop();
        } else {
          return "Saori"; 
        }
    }
}

export default getClassName;