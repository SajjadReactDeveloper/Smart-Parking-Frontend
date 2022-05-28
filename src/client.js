const publicVapidKey = 'BGDdtg4B3fXUvOJg_coC0y_cfYjXkEBBsi63Js1BieWHJ_CnwgvJoX1YjkKsOu8w9T_9albH2aKD--YaDM1J_Wo';

if('serviceWorker' in navigator){
    send().catch(err => console.log(err))
}

async function send(){
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    })
    console.log("Registered");

    const subscription = await register.pushManager.subscribe({
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })

    await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });
    console.log("Send");
}

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}