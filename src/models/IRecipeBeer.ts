type Volume = { value: number; unit: string };

type Unit = 'grams' | 'celsius' | 'kilograms' | 'litres';

interface ITemp {
	value: number;
	unit: Unit;
}

interface IMashTemp {
	temp: ITemp;
	duration: number;
}

interface IFermentation {
	temp: ITemp;
}

interface IMethod {
	mash_temp: IMashTemp[];
	fermentation: IFermentation;
	twist: string | null;
}

interface IMalt {
	name: string;
	amount: ITemp;
}

interface IHops {
	name: string;
	amount: ITemp;
	add: string;
	attribute: string;
}

interface IIngredients {
	malt: IMalt[];
	hops: IHops[];
	yeast: string;
}

export interface IRecipeBeer {
	id: number;
	name: string;
	tagline: string;
	first_brewed: string;
	description: string;
	image_url: string;
	abv: number;
	ibu: number;
	target_fg: number;
	target_og: number;
	ebc: number;
	srm: number;
	ph: number;
	attenuation_level: number;
	volume: Volume;
	boil_volume: Volume;
	method: IMethod;
	ingredients: IIngredients;
	food_pairing: string[];
	brewers_tips: string;
	contributed_by: string;
}


