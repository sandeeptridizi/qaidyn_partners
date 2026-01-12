import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useHomeContent } from '../../hooks/useHomeContent.jsx';
import EditTextModal from './EditTextModal';
import './Editable.css';

/**
 * EditableButton Component
 * Makes button text editable in admin mode
 * 
 * Usage:
 * <EditableButton contentKey="home.hero.button" defaultValue="Click Me" className="btn-primary" onClick={handleClick} />
 */
const EditableButton = ({
    contentKey,
    defaultValue = 'Button',
    className = '',
    style = {},
    onClick,
    type = 'button',
    ...props
}) => {
    const { isAdmin } = useAdmin();
    const { getContent } = useHomeContent();
    const [showEditButton, setShowEditButton] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Get content from CMS or use default
    const [currentValue, setCurrentValue] = useState(getContent(contentKey, defaultValue));

    // Update when content changes
    useEffect(() => {
        const cmsValue = getContent(contentKey, defaultValue);
        if (cmsValue !== currentValue) {
            setCurrentValue(cmsValue);
        }
    }, [getContent, contentKey, defaultValue]);

    const handleEdit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShowModal(true);
    };

    const handleClick = (e) => {
        if (isAdmin && showEditButton) {
            // In edit mode, don't trigger the button's normal onClick
            e.preventDefault();
            e.stopPropagation();
        } else if (onClick) {
            onClick(e);
        }
    };

    if (!isAdmin) {
        // Public view - regular button
        return (
            <button
                className={className}
                style={style}
                onClick={onClick}
                type={type}
                {...props}
            >
                {currentValue || defaultValue}
            </button>
        );
    }

    // Admin view - editable button
    return (
        <>
            <button
                className={`editable-button ${className}`}
                style={{ ...style, position: 'relative' }}
                onMouseEnter={() => setShowEditButton(true)}
                onMouseLeave={() => setShowEditButton(false)}
                onClick={handleClick}
                type={type}
                {...props}
            >
                {currentValue || defaultValue}

                {showEditButton && (
                    <span
                        className="edit-button edit-button-inline edit-button-on-button"
                        onClick={handleEdit}
                        title="Edit button text"
                        style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            background: '#667eea',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '50%',
                            width: '28px',
                            height: '28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '14px',
                            zIndex: 1000,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        ✏️
                    </span>
                )}
            </button>

            {showModal && (
                <EditTextModal
                    contentKey={contentKey}
                    currentValue={currentValue || defaultValue}
                    onClose={() => setShowModal(false)}
                    onSave={(newValue) => {
                        setCurrentValue(newValue);
                        setShowModal(false);
                    }}
                />
            )}
        </>
    );
};

export default EditableButton;
