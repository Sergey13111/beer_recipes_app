type VolumeType = { value: number; unit: string };

type UnitType = 'grams' | 'celsius' | 'kilograms' | 'litres';

type TempType = {
	value: number;
	unit: UnitType;
};

type MashTempType = {
	temp: TempType;
	duration: number;
};

type FermentationType = {
	temp: TempType;
};

type MethodType = {
	mash_temp: MashTempType[];
	fermentation: FermentationType;
	twist: string | null;
};

type MaltType = {
	name: string;
	amount: TempType;
};

type HopsType = {
	name: string;
	amount: TempType;
	add: string;
	attribute: string;
};

type IngredientsType = {
	malt: MaltType[];
	hops: HopsType[];
	yeast: string;
};

export type RecipeBeerType = {
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
	volume: VolumeType;
	boil_volume: VolumeType;
	method: MethodType[];
	ingredients: IngredientsType;
	food_pairing: string[];
	brewers_tips: string;
	contributed_by: string;
};
