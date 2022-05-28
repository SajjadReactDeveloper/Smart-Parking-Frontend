self.addEventListener('push', (e) => {
    const data = e.data.json();
    console.log("Data: ",data.body);
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'abc'
    })
})
