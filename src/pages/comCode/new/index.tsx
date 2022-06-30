import React from 'react';
import Container from './NewComCodeContainer';

interface IComCodePopup {
    hideModal2: (e) => void;
}

const CommonCodeNew: React.FunctionComponent<IComCodePopup> = ({ hideModal2 }) => {
    return <Container hideModal2={hideModal2} />;
};

export default CommonCodeNew;
