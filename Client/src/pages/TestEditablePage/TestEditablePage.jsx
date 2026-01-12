import React from 'react';
import EditableText from '../../components/Editable/EditableText';
import { HomeContentProvider } from '../../hooks/useHomeContent.jsx';
import './TestPage.css';

const TestEditablePage = () => {
    return (
        <HomeContentProvider>
            <div style={{ padding: '100px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '20px', color: '#333' }}>
                    🎯 Test Editable Components
                </h1>

                <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
                    <EditableText
                        as="h2"
                        contentKey="home.test.heading"
                        defaultValue="Hover over this heading to edit it!"
                        style={{ color: '#667eea', marginBottom: '15px' }}
                    />

                    <EditableText
                        as="p"
                        contentKey="home.test.paragraph"
                        defaultValue="This is an editable paragraph. When you're logged in as admin, hover over this text and you'll see an edit button appear. Click it to open the editing modal!"
                        style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}
                    />
                </div>

                <div style={{ background: '#e8f5e9', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
                    <EditableText
                        as="h3"
                        contentKey="home.test.subheading"
                        defaultValue="Another Editable Heading"
                        style={{ color: '#2e7d32', marginBottom: '10px' }}
                    />

                    <EditableText
                        as="p"
                        contentKey="home.test.description"
                        defaultValue="Try editing this text too! All changes will be saved to MongoDB and persist across page reloads."
                        style={{ color: '#555' }}
                    />
                </div>

                <div style={{ background: '#fff3e0', padding: '30px', borderRadius: '8px' }}>
                    <EditableText
                        as="h4"
                        contentKey="home.test.instructions"
                        defaultValue="Instructions:"
                        style={{ color: '#e65100', marginBottom: '10px' }}
                    />

                    <EditableText
                        as="p"
                        contentKey="home.test.steps"
                        defaultValue="1. Make sure you're logged in as admin. 2. Hover over any text element. 3. Click the edit button (✏️) that appears. 4. Edit the text in the modal. 5. Click Save!"
                        style={{ color: '#666', whiteSpace: 'pre-line' }}
                    />
                </div>

                <div style={{ marginTop: '40px', padding: '20px', background: '#e3f2fd', borderRadius: '8px' }}>
                    <p style={{ margin: 0, color: '#1976d2', fontSize: '14px' }}>
                        💡 <strong>Tip:</strong> If you don't see the edit button, make sure you're logged in at <code>/admin-login</code>
                    </p>
                </div>
            </div>
        </HomeContentProvider>
    );
};

export default TestEditablePage;
