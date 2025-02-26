import React from 'react';

interface Props {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    disabled?: boolean;
}

function SButton({ children, onClick, disabled } : Props) {
    return (
        <button type="button"
                onClick={onClick}
                disabled={disabled}
                className={`text-gray-900 hover:bg-gray-400 bg-gray-200 border border-gray-200
                 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 inline-flex items-center me-2 mb-2`}>
            {children}
        </button>
    );
}

export default SButton;