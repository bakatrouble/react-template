import React from 'react';
import { ModalsEnum, ModalStore } from "../stores/ModalStore";
import { useInjection } from "inversify-react";
import { ScrollLock } from "../components/ScrollLock";
import { observer } from "mobx-react";
import DemoModal from "./DemoModal";

const MODAL_REGISTRY = {
    [ModalsEnum.DemoModal]: DemoModal,
}

const ModalsContainer = observer(() => {
    const modalStore = useInjection(ModalStore);

    return (
        <>
            {modalStore.activeModals.length > 0 && <ScrollLock />}
            {modalStore.activeModals.map((m, i) => {
                const Component = MODAL_REGISTRY[m.key];
                return Component ? <Component key={i} data={m.data} modalId={i} /> : null;
            })}
        </>
    )
});

export default ModalsContainer;
