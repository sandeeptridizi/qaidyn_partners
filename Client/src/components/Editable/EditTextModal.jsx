import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { contentAPI } from '../../services/api';
import { toast } from 'react-toastify';
import { useHomeContent } from '../../hooks/useHomeContent.jsx';
import './Editable.css';

const EditTextModal = ({ contentKey, currentValue, onClose, onSave }) => {
    const [value, setValue] = useState(currentValue);
    const [saving, setSaving] = useState(false);
    const { refetch } = useHomeContent();

    const handleSave = async () => {
        if (!value.trim()) {
            toast.error('⚠️ Content cannot be empty', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        setSaving(true);
        try {
            const result = await contentAPI.updateContent(contentKey, 'text', value);

            if (result.success) {
                // Get current time in IST
                const istTime = new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });

                toast.success(`✨ Content saved successfully!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        background: 'linear-gradient(135deg, #5d5fee 0%, #764ba2 100%)',
                        color: 'white',
                        fontWeight: '500',
                        borderRadius: '12px',
                        boxShadow: '0 8px 25px rgba(93, 95, 238, 0.3)',
                    }
                });

                // Refetch content from server
                if (refetch) {
                    await refetch();
                }

                // If onSave callback provided, use it (for immediate update)
                if (onSave) {
                    onSave(value);
                }

                onClose();
            } else {
                toast.error(result.message || '❌ Failed to update content', {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Error updating content:', error);
            toast.error('❌ Failed to update content', {
                position: "top-right",
                autoClose: 3000,
            });
        } finally {
            setSaving(false);
        }
    };

    return createPortal(
        <div className="modal-overlay" onClick={(e) => { e.stopPropagation(); onClose(); }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999 }}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Edit Text</h2>
                    <button className="modal-close" onClick={(e) => { e.stopPropagation(); onClose(); }}>×</button>
                </div>

                <div className="modal-body">
                    <label>Content Key: <code>{contentKey}</code></label>
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter your content here..."
                        autoFocus
                    />
                </div>

                <div className="modal-footer">
                    <button className="btn-cancel" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                        Cancel
                    </button>
                    <button
                        className="btn-save"
                        onClick={(e) => { e.stopPropagation(); handleSave(); }}
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : 'Change'}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default EditTextModal;
