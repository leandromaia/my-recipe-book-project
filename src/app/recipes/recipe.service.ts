import { Recipe } from './recipe.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Bolo de Cenoura', 'This is simply a test', 'https://melepimenta.com/wp-content/uploads/2018/01/Bolo-de-cenoura-de-liquidificador-Baixa-2-1024x683.jpg'),
        new Recipe('Bolo de Mandioca', 'This is simply a test', 'https://t2.rg.ltmcdn.com/pt/images/1/2/0/bolo_de_mandioca_cremoso_6021_paso_6_600.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
