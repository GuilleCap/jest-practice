const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
  test('should allow a recipe to be added', () => {
   const myCookbook = new Cookbook();
	 
	  myCookbook.addRecipe("chivitoCanadiense", ['bread', 'fry egg', 'bacon', 'lettuce and tomato', 'meat']);

	  expect(myCookbook.recipes).toEqual({ chivitoCanadiense: ['bread', 'fry egg', 'bacon', 'lettuce and tomato', 'meat'] });

    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
    
      const myCookbook = new Cookbook();
    myCookbook.addRecipe('burguer', ['meat', 'bread', 'cheese']);

   const myRecipes = myCookbook.listRecipes();

   expect(myRecipes).toEqual(['burguer']);



    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('tortillas', ['dough', 'water'])

      const myRecipes = myCookbook.getRecipes();

      expect(myRecipes).toEqual(['tortillas']);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('hotdog', ['meat', 'bread']);

      const myRecipes = myCookbook.removeRecipes();

      expect(myRecipes).toEqual(['hotdog']);



    });
  });
});
