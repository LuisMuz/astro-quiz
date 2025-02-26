import React from 'react';

function CardContainer({ children }) {
    return (
        <div className="flex flex-col p-3 place-content-center bg-white rounded-lg shadow-md border-bl2">
            {children}
        </div>
    );
}

export default CardContainer;