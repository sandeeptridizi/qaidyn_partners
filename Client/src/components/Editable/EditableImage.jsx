import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useHomeContent } from '../../hooks/useHomeContent.jsx';
import EditImageModal from './EditImageModal';
import './Editable.css';

const API_BASE = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : 'http://localhost:5000';

const EditableImage = ({
    contentKey,
    defaultValue,
    className = '',
    style = {},
    alt = 'Image',
    ...props
}) => {
    const { isAdmin } = useAdmin();
    const { getContent } = useHomeContent();
    const [showEditButton, setShowEditButton] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Get content from CMS
    // If defaultValue is an imported asset (path), use it.
    const [currentSrc, setCurrentSrc] = useState(getContent(contentKey, defaultValue));

    useEffect(() => {
        const cmsValue = getContent(contentKey, defaultValue);
        if (cmsValue !== currentSrc) {
            setCurrentSrc(cmsValue);
        }
    }, [getContent, contentKey, defaultValue]);

    // Format src - handle local uploads vs remote URLs (Cloudinary)
    const getFormattedSrc = (src) => {
        if (!src) return src;
        // If it's already an absolute URL (Cloudinary, external link, or data URI), use it as is
        if (typeof src === 'string' && (src.startsWith('http') || src.startsWith('https') || src.startsWith('data:'))) {
            return src;
        }
        // If it's a local upload path, prepend the API base
        if (typeof src === 'string' && src.startsWith('/uploads')) {
            return `${API_BASE}${src}`;
        }
        return src;
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShowModal(true);
    };

    if (!isAdmin) {
        return (
            <img
                src={getFormattedSrc(currentSrc)}
                alt={alt}
                className={className}
                style={style}
                {...props}
            />
        );
    }

    return (
        <>
            <div
                className="editable-image-container"
                style={{ position: 'relative', display: 'inline-block', width: 'fit-content', maxWidth: '100%', lineHeight: 0 }}
                onMouseEnter={() => setShowEditButton(true)}
                onMouseLeave={() => setShowEditButton(false)}
            >
                <img
                    src={getFormattedSrc(currentSrc)}
                    alt={alt}
                    className={className}
                    style={{ ...style }}
                    {...props}
                />

                {showEditButton && (
                    <>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.4)',
                                zIndex: 999,
                                transition: 'opacity 0.3s ease',
                                pointerEvents: 'none'
                            }}
                        />
                        <button
                            className="edit-button-image"
                            onClick={handleEdit}
                            title="Change Image"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1000,
                                padding: '12px 20px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translate(-50%, -50%) translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translate(-50%, -50%)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                            }}
                        >
                            📷 Change Image
                        </button>
                    </>
                )}
            </div>

            {showModal && (
                <EditImageModal
                    contentKey={contentKey}
                    onClose={() => setShowModal(false)}
                    onSave={(newUrl) => {
                        setCurrentSrc(newUrl);
                        setShowModal(false);
                    }}
                />
            )}
        </>
    );
};

export default EditableImage;
