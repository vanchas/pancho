import React, { useEffect, useState } from "react";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      showInstallPromotion(true);
    });
  }, []);

  const onClick = () => {
    // Hide the app provided install promotion
    // setSupportsPWA(false)
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  return (
    supportsPWA &&
      <div className="fixed-bottom shadow-lg p-2 bg-light d-flex justify-content-center justify-items-center ">
        <button
          className="link-button btn btn-warning"
          id="setup_button"
          aria-label="Install app"
          title="Install app"
          onClick={onClick}
        >
          Установить приложение <b> Pancho </b> на рабочий стол
        </button>
        <button className="btn" onClick={() => setSupportsPWA(false)}>
          <i className="fas fa-times"/>
        </button>
      </div>
  );
};

export default InstallPWA;
