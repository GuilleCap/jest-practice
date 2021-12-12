const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
   
   const myCookbook = new Cookbook();
  const myCookbookCli = new CookbookCli(myCookbook);

  const message = myCookbookCli.add('burguer', ['meat', 'bread']);

  myCookbookCli.add('burguer', ['meat', 'bread']);

  expect(message).toEqual('Successfully added the following recipe: burguer');

    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {

    const myCookbook = new Cookbook();
    const myCookbookCli = new CookbookCli(myCookbook);
    
    const message = myCookbookCli.list('milanesa', ['meat', 'bread crumbs', 'eggs']);
    

   myCookbookCli.list('milanesa', ['meat', 'bread crumbs', 'eggs']);
   

   

   expect(message).toEqual('You have the following recipes: milanesa');


    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
    
      const myCookbook = new Cookbook();
	    const myCookbookCli = new CookbookCli(myCookbook);
      
      const message =  myCookbookCli.get('guiso');
	        
      myCookbookCli.get('guiso',['rice','chicken','condiments']);
	        
      expect(message).toEqual('The ingredients for guiso are: rice, chicken and condiments');
	  

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
       const myCookbook = new Cookbook();
       const myCookbookCli = new CookbookCli(myCookbook);
        
       const message = myCookbookCli.remove('pizza');
       
       myCookbookCli.remove('pizza', ['dough', 'cheese', 'sauce']);

       expect(message).toEqual('Successfully removed the following recipe: pizza');
    });
  });
});
