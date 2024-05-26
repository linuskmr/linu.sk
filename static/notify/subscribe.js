async function enableNotifications() {
	await Notification.requestPermission();
	updateStatus()
	enablePush()
}


function sendDemoNotification() {
	if (Notification.permission != "granted") {
		alert("You have not granted notification access yet. Please click the button above.")
		return
	}
	// TODO: also test the push via service worker. Therefore, send a test-subscription to the server
	new Notification(
		"Demo notification",
		{
			"body": "Demo notification from linu.sk",
			"silent": true,
    		"data": {
      			"url": "https://linu.sk"
    		}
		})
}


async function enablePush() {
	// Adapted from https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager#examples
	const serviceWorkerRegistration = await navigator.serviceWorker.register("/notify/service-worker.js")
	const subscribeOptions = {
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array("BMbtMSqzn89X6UZurxt6bxfF_rTx6wgg4cldI-rn5BBUGbEWf4NtubrhjGFv8aKa_iykcsHOjE13fg01MiwpCCY=") // Public key
	}
	const pushSubscription = await serviceWorkerRegistration.pushManager.subscribe(subscribeOptions)
	console.log(pushSubscription.toJSON())
	await fetch("https://webpush.linu.sk/subscriptions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			endpoint: pushSubscription.endpoint,
			auth: pushSubscription.toJSON().keys.auth,
			p256dh: pushSubscription.toJSON().keys.p256dh
		})
	})
}


function updateStatus() {
	document.getElementById("status").innerText = Notification.permission
}
updateStatus()


// From https://github.com/GoogleChromeLabs/web-push-codelab/blob/469a70b1eb195eeb27f5901ab58bd8452f015d9a/app/scripts/main.js
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}