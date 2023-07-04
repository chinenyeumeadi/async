const recipe = {
     sushi:{
      duration: "1hr",
     },
        ingredients: {
             tuna: "1kg",
            rice:"250g",
            cassava:"500g",
             adbado:"1cob",
        },
    spices:{
                 cinnamon:"0.5tbs",
                tumeric:"2tbs",
              curry:"2tbs"
            },
        
        }
 function getRecipeFromDb(recipeName) {
if (!recipe[recipeName]){
  throw new Error("recipe not found!");
 return  recipe[recipeName] ; 
 }
             }
             
            function getSushiRecipe(){
                let sushiRecipe = null; 

               new Promise((resolve) => {
                    setTimeout(() =>(resolve))
                   sushiRecipe = getSushiRecipefromDb("sushi");
                    resolve(sushiRecipe)
                 }, 3000);
        
            }
           result.then(recipe => console.log(recipe));
       getSushiRecipe();     
          console.log(recipe);

function sayHello(name) {
    console.log("Called sayHello");
 }

setTimeout(() => console.log("Hello".concat(nam)));



 function sayhi(name){
 console.log("called sayHi");
 return "Hi".concat(name);
 }

function data(){
     sayHello("ruth");
    sayHi("chinenye");
}