import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useHomeContent } from '../../hooks/useHomeContent.jsx';
import EditTextModal from './EditTextModal';
import './Editable.css';

/**
 * Universal EditableText Component
 * Supports: h1, h2, h3, h4, h5, h6, p, span, button, div
 * 
 * Usage:
 * <EditableText as="h1" contentKey="home.hero.title" defaultValue="Default Title" />
 */
const EditableText = ({
    as = 'p',
    contentKey,
    defaultValue = '',
    className = '',
    style = {},
    children,
    onClick,
    useHtml = false,
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
        // In admin mode, allow normal click behavior (navigation)
        // Only the edit button click will open the modal
        if (onClick) {
            onClick(e);
        }
    };

    // Create the appropriate HTML element
    const Tag = as;

    if (!isAdmin) {
        if (useHtml) {
            return (
                <Tag
                    className={className}
                    style={style}
                    onClick={onClick}
                    {...props}
                    dangerouslySetInnerHTML={{ __html: currentValue || defaultValue }}
                />
            );
        }
        return (
            <Tag className={className} style={style} onClick={onClick} {...props}>
                {children || currentValue || defaultValue}
            </Tag>
        );
    }

    // Admin view
    if (useHtml) {
        return (
            <>
                <div
                    className={`editable-wrapper-html ${className}`}
                    style={{ ...style, position: 'relative', display: 'block' }}
                    onMouseEnter={() => setShowEditButton(true)}
                    onMouseLeave={() => setShowEditButton(false)}
                    onClick={handleClick}
                >
                    <Tag {...props} dangerouslySetInnerHTML={{ __html: currentValue || defaultValue }} />

                    {showEditButton && (
                        <button
                            className="edit-button edit-button-inline"
                            onClick={handleEdit}
                            onMouseEnter={() => setShowEditButton(true)}
                            title="Edit HTML"
                            style={{ position: 'absolute', top: 5, right: 5, zIndex: 10 }}
                        >
                            ✏️ HTML
                        </button>
                    )}
                </div>

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
    }

    return (
        <>
            <div
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setShowEditButton(true)}
                onMouseLeave={() => setShowEditButton(false)}
            >
                <Tag
                    className={`editable-text ${className}`}
                    style={style}
                    onClick={handleClick}
                    {...props}
                >
                    {children || currentValue || defaultValue}
                </Tag>

                {showEditButton && (
                    <button
                        className="edit-button edit-button-inline"
                        onClick={handleEdit}
                        title="Edit text"
                        style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            zIndex: 1000
                        }}
                    >
                        ✏️
                    </button>
                )}
            </div>

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

export default EditableText;
