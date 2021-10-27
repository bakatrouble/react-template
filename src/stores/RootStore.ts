import { createBrowserHistory, History } from 'history';
import { syncHistoryWithStore } from "mobx-react-router";
import { Container } from "inversify";
import { wrapHistory } from "oaf-react-router";
import { HistoryStore, RouterStore } from "./index";
import { ModalStore } from "./ModalStore";

class RootStore {
    public historyStore: History;
    public routerStore: RouterStore;
    public modalStore: ModalStore;

    public container: Container;

    constructor() {
        const browserHistory = createBrowserHistory();
        wrapHistory(browserHistory, {
            smoothScroll: true,
            primaryFocusTarget: 'body',
        });

        this.routerStore = new RouterStore();
        this.modalStore = new ModalStore(this);
        this.historyStore = syncHistoryWithStore(browserHistory, this.routerStore);

        this.container = new Container();
        this.container.bind(RouterStore).toConstantValue(this.routerStore);
        this.container.bind(HistoryStore).toConstantValue(this.historyStore);
        this.container.bind(ModalStore).toConstantValue(this.modalStore);
    }
}

export default RootStore;
