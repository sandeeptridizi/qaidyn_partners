import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import EditTextModal from './EditTextModal';
import EditImageModal from './EditImageModal';
import './Editable.css';

const Editable = ({ contentKey, type = 'text', children, className = '', style = {} }) => {
    const { isAdmin } = useAdmin();
    const [showEditButton, setShowEditButton] = useState(false);
    const [showTextModal, setShowTextModal] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);

    const handleEdit = (e) => {
        e.stopPropagation();
        if (type === 'text') {
            setShowTextModal(true);
        } else if (type === 'image') {
            setShowImageModal(true);
        }
    };

    if (!isAdmin) {
        // Public view - just render children
        return <>{children}</>;
    }

    // Admin view - wrap with editable functionality
    return (
        <>
            <div
                className={`editable-wrapper ${className}`}
                style={style}
                onMouseEnter={() => setShowEditButton(true)}
                onMouseLeave={() => setShowEditButton(false)}
            >
                {children}

                {showEditButton && (
                    <button
                        className="edit-button"
                        onClick={handleEdit}
                        title={`Edit ${type}`}
                    >
                        ✏️ Edit
                    </button>
                )}
            </div>

            {showTextModal && (
                <EditTextModal
                    contentKey={contentKey}
                    currentValue={typeof children === 'string' ? children : ''}
                    onClose={() => setShowTextModal(false)}
                />
            )}

            {showImageModal && (
                <EditImageModal
                    contentKey={contentKey}
                    onClose={() => setShowImageModal(false)}
                />
            )}
        </>
    );
};

export default Editable;
