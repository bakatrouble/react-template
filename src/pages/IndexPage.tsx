import React from 'react';
import { useInjection } from "inversify-react";
import { ModalsEnum, ModalStore } from "../stores/ModalStore";
import Picsum from "../components/Picsum";

interface IIndexPageProps {
}

const IndexPage = ({}: IIndexPageProps) => {
    const modalStore = useInjection(ModalStore);

    return (
        <>
            <h1>Index Page</h1>
            <div><button onClick={() => modalStore.showModal(ModalsEnum.DemoModal)}>Show modal</button></div>
            <Picsum width={300} />
        </>
    )
};

export default IndexPage;
