import React from 'react';
import Web3 from "web3";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import classNames from "classnames";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/scss/main.scss';
import ModalsContainer from "./modals";

const App = observer(() => {

    return (
        <>
            <div className={classNames('wrapper')}>
                <Switch>
                    <Route exact path='/' component={IndexPage} />
                </Switch>
                <div style={{ flex: 1 }} />
                <ModalsContainer />
            </div>
            <ToastContainer theme='dark' position='bottom-right' />
        </>
    )
});

export default App;
