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

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
