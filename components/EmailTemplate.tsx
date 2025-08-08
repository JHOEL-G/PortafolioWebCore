import * as React from 'react';


interface EmailTemplateProps {
    firstName: string;
    lastname: string
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastname,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
        <h1 style={{ color: '#0070f3' }}>Nuevo mensaje desde tu portafolio</h1>
        <p>Hola, {firstName} {lastname} te ha enviado un mensaje a través del formulario de contacto.</p>
        <div style={{ padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px', marginTop: '20px' }}>
            <p style={{ margin: '0 0 10px 0' }}><strong>Nombre:</strong> {firstName}</p>
            <p style={{ margin: '0 0 10px 0' }}><strong>Apellido:</strong> {lastname}</p>
            <p style={{ margin: '0 0 10px 0' }}><strong>Email:</strong> {email}</p>
            <p style={{ margin: '0 0 0 0' }}><strong>Mensaje:</strong></p>
            <div style={{
                padding: '10px',
                backgroundColor: '#f6f6f6',
                borderLeft: '4px solid #0070f3',
                borderRadius: '4px',
                marginTop: '10px',
                whiteSpace: 'pre-wrap',
            }}>
                {message}
            </div>
        </div>
        <p style={{ marginTop: '20px', color: '#999' }}>Este correo fue enviado desde tu sitio web.</p>
    </div>
);

export default EmailTemplate;
