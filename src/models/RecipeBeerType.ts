import { IRecipeBeer } from "./IRecipeBeer";

export type RecipeBeerType = Pick<
	IRecipeBeer,
	'id' | 'name' | 'description' | 'image_url' | 'volume' | 'method' | 'first_brewed' | 'ingredients'
>;

