import { RecipeBeerType } from './RecipeBeerType';

export type RecipeItemType = Pick<
	RecipeBeerType,
	'id' | 'name' | 'description' | 'image_url' | 'volume' | 'method' | 'first_brewed' | 'ingredients'
>;
