export class Deals {
  deals = [];

  constructor() {
  }

  activate(){
    this.deals = [{id:1,name:"example deal 1", description:"deal description"},
                    {id:2,name:"example deal 2", description:"deal description"},
                    {id:3,name:"example deal 3", description:"deal description"}];
  }
}
