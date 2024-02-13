console.log('/notify/service-worker.js loaded')

self.addEventListener("push", (event) => {
	const data = event.data.json()
	self.registration.showNotification(data.title, data.options)
})

self.addEventListener("notificationclick", (event) => {
	event.notification.close();
	event.waitUntil(self.clients.openWindow(event.notification.data.url));
})