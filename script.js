// Event Array (5 events)
let events = [
    { name: "Clay Modeling Workshop", date: "05 Feb 2025", desc: "Learn simple clay figures." },
    { name: "Origami Art Session", date: "10 Feb 2025", desc: "Make basic paper shapes." },
    { name: "Resin Art Workshop", date: "20 Feb 2025", desc: "Create resin keychains." },
    { name: "Watercolor Basics", date: "25 Feb 2025", desc: "Learn basic watercolor blending." },
    { name: "DIY Gift Making", date: "01 Mar 2025", desc: "Make handmade creative gifts." }
];

// Display events
function displayEvents(list) {
    let eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    // If no match → show message, NOT alert
    if (list.length === 0) {
        eventList.innerHTML = `<div class="event-card" style="text-align:center; font-weight:bold;">No results found</div>`;
        return;
    }

    // Show all events
    list.forEach(event => {
        eventList.innerHTML += `
            <div class="event-card">
                <strong>${event.name}</strong><br>
                <span style="font-size:14px; color:#555;">Date: ${event.date}</span><br>
                <span style="font-size:14px; color:#777;">${event.desc}</span>
            </div>
        `;
    });
}

// Search function
function searchEvents() {
    let key = document.getElementById("searchBox").value.toLowerCase();

    let filtered = events.filter(e => 
        e.name.toLowerCase().includes(key)
    );

    displayEvents(filtered);
}

// Load all events initially
displayEvents(events);
