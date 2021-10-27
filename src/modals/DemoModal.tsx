import React, { useState } from 'react';
import Modal from "../components/Modal";
import { useInjection } from "inversify-react";
import { ModalStore } from "../stores/ModalStore";
import { toast } from "react-toastify";

interface ITransferModalProps {
    modalId: number;
}

const DemoModal = ({ modalId }: ITransferModalProps) => {
    const modalStore = useInjection(ModalStore);

    return (
        <Modal modalId={modalId}>
            <h2 className="section-title text-center">Demo modal</h2>
            <button onClick={() => modalStore.hideModal(modalId)}>Close</button>
        </Modal>
    )
};

export default DemoModal;
