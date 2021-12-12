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
                const myCookbook = new Cookbook();
	        const myCookbookCli = new CookbookCli(myCookbook);

	        myCookbookCli.add('biriyani',['rice','chicken','spices']);
	        myCookbookCli.add('hotdog',['bun','sausage','ketchup']);

	        const message =  myCookbookCli.get('hotdog');

	        expect(message).toEqual('The ingredients for hotdog are: bun, sausage and ketchup');
	  test('should display the ingredients required to make the specified recipe', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
