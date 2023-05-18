import React from 'react';
import emailjs from 'emailjs-com';

const DealerPage = () => {
  const handleSendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_yogknkd';
    const templateId = 'template_cyu3s5f';
    const userId = 'oTRpc9rMm5VwpDu1U';

    const emailParams = {
      from_name: 'Dealer',
      from_email: 'luxemotorsdealership@gmail.com', // replace with the actual dealer's email address
      to_email: 'lola.eng.23@gmail.com',
      subject: 'Dealership | New message from Dealer',
      message: 'This is a test email from the dealer to Lola.',
    };

    emailjs.send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.text);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
  };

  return (
    <div>
      <h1>Welcome, dealer!</h1>
      <p>Here's some information for you:</p>
      <p>...</p>
      <button onClick={handleSendEmail}>Send email to Lola</button>
    </div>
  );
};

export default DealerPage;