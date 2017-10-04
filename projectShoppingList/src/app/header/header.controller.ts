import {AppComponent} from './../app.component';

export class HeaderController {
    private static controller: HeaderController;
    private component: AppComponent;
    public static getInstance() {
        if ( this.controller == null) {
            this.controller = new HeaderController();
        }
        return this.controller;
    }
    public registerMainComponent(mainComponent: AppComponent) {
        this.component = mainComponent;
    }
    public setModule(module: string) {
        this.component.setModule(module);
    }
}
