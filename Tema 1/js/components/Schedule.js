// Componenta pentru programul evenimentului
function Schedule() {
    const scheduleData = [
        {
            day: 'Ziua 1 - 15 Mai 2025',
            events: [
                {
                    time: '09:00 - 10:00',
                    title: 'Înregistrare și micul dejun',
                    presenter: ''
                },
                {
                    time: '10:00 - 11:30',
                    title: 'Viitorul dezvoltării web: Tendințe și tehnologii noi',
                    presenter: 'Mihai Popescu, CTO la TechForward'
                },
                {
                    time: '12:00 - 13:30',
                    title: 'React și modern JavaScript: Best practices în 2025',
                    presenter: 'Ana Ionescu, Senior Frontend Developer'
                },
                {
                    time: '14:30 - 16:00',
                    title: 'PHP modern și arhitecturi scalabile',
                    presenter: 'Cristian Dumitrescu, Lead Developer la WebSolutions'
                }
            ]
        },
        {
            day: 'Ziua 2 - 16 Mai 2025',
            events: [
                {
                    time: '09:30 - 11:00',
                    title: 'Inteligență artificială pentru dezvoltatori',
                    presenter: 'Elena Constantinescu, AI Research Specialist'
                },
                {
                    time: '11:30 - 13:00',
                    title: 'DevOps și automatizare: Strategii pentru echipe moderne',
                    presenter: 'Andrei Vasilescu, DevOps Team Lead'
                },
                {
                    time: '14:00 - 16:30',
                    title: 'Workshop: Dezvoltarea unei aplicații complete folosind React, PHP și Bootstrap',
                    presenter: 'Ioana Popa, Full Stack Developer'
                }
            ]
        }
    ];

    return (
        <section className="py-5 bg-light" id="program">
            <div className="container">
                <h2 className="text-center mb-5">Programul evenimentului</h2>
                
                {scheduleData.map((day, dayIndex) => (
                    <React.Fragment key={dayIndex}>
                        <h4 className={dayIndex > 0 ? "mt-5" : ""}>{day.day}</h4>
                        
                        {day.events.map((event, eventIndex) => (
                            <div className="schedule-item" key={eventIndex}>
                                <h5>{event.time}</h5>
                                <p className="fw-bold">{event.title}</p>
                                {event.presenter && <p>Prezentator: {event.presenter}</p>}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}