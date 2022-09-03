async function notify(message) {
    let DataSource = browser.i18n.getMessage("DataSource");

    const qoutes = await fetch(DataSource)
        .then(response => {
            return response.text();
        })
        .then(data => {
            return JSON.parse(data);
        });
    const i = Math.floor(Math.random() * qoutes.length)
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/link-48.png"),
        "title": qoutes[i].author,
        "message": qoutes[i].text
    });

}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);
