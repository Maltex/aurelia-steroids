export class App {
  configureRouter(config, router) {
    config.title = 'Crazy Golf Deals';
    config.map([
      { route: ['','welcom'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'deals',         name: 'deals',        moduleId: 'deals',   nav: true, title:"deals"},
      { route: 'deals/:id', name: 'deal', moduleId: 'deal' }
    ]);

    this.router = router;
  }
}
