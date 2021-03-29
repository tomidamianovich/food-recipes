export interface Recipe {
	id: number; 
	title: string;
  description?: string;
	ingredients: Array<string>;
	steps: Array<string>;
}