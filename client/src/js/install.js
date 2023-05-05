const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// allows webistes to prompt the user to install the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// Installation Button
butInstall.addEventListener('click', async () => {
    // This creates a window object that shows a prompt for the installation of the app
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// this is activated once app has been inbstalled
window.addEventListener('appinstalled', (event) => {
    // turns install button to null so you can't download again
    window.deferredPrompt = null;
});
