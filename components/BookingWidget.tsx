import { useEffect } from 'react';

const BookingWidget = () => {
  useEffect(() => {
    // Dynamically load the script after the component mounts
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/Ww1L3H4P4i0f4I5EaENl"
        style={{
          width: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling="no"
        id="Ww1L3H4P4i0f4I5EaENl_1741619045766"
      ></iframe>
    </div>
  );
};

export default BookingWidget;
