import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { contentAPI } from '../../services/api';
import { toast } from 'react-toastify';
import { useHomeContent } from '../../hooks/useHomeContent.jsx';
import './Editable.css';

const EditImageModal = ({ contentKey, onClose, onSave }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const { refetch } = useHomeContent();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Validate file type
            if (!selectedFile.type.startsWith('image/')) {
                toast.error('⚠️ Please select a valid image file', {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            }

            if (selectedFile.size > 10 * 1024 * 1024) {
                toast.error('⚠️ Image size should be less than 10MB', {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            }

            setFile(selectedFile);

            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            toast.error('⚠️ Please select an image', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        setUploading(true);
        try {
            const result = await contentAPI.uploadImage(contentKey, file);

            if (result.success) {
                // Get current time in IST
                const istTime = new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });

                toast.success(`🎨 Image uploaded successfully!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        background: 'linear-gradient(135deg, #1db5be 0%, #0088ff 100%)',
                        color: 'white',
                        fontWeight: '500',
                        borderRadius: '12px',
                        boxShadow: '0 8px 25px rgba(29, 181, 190, 0.3)',
                    }
                });

                // Refetch content from server
                if (refetch) {
                    await refetch();
                }

                if (onSave) {
                    // Pass the new image URL (response should contain it in result.content.value)
                    onSave(result.content.value);
                }

                onClose();
            } else {
                toast.error(result.message || 'Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Failed to upload image');
        } finally {
            setUploading(false);
        }
    };

    return createPortal(
        <div className="modal-overlay" onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999 }}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Upload Image</h2>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>

                <div className="modal-body">
                    <label>Content Key: <code>{contentKey}</code></label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <p className="upload-info">
                        Max file size: 10MB. Supported formats: JPG, PNG, GIF, WebP
                    </p>

                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Preview" />
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn-save"
                        onClick={handleUpload}
                        disabled={uploading || !file}
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default EditImageModal;
