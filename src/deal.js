export class Deal {
  constructor() {
    this.deal = {};
    this.deal.name = "example deal ";
    this.deal.description = "deal description goes here";
  }

  activate(params){
  	if(params.id)
  		this.deal.name += " " + params.id;
  }
}
