// Componenta principală App
function App() {
    return (
        <div className="app-container">
            {/* Header */}
            <header className="hero-section">
                <div className="container">
                    <h1 className="display-4">CodeCon 2025</h1>
                    <p className="lead">Conferința de programare care îți va schimba perspectiva</p>
                    <div className="social-links mt-4">
                        <a href="#"><i className="fab fa-facebook">{" "}Facebook</i></a>
                        <a href="#"><i className="fab fa-twitter">{" "}Twitter</i></a>
                        <a href="#"><i className="fab fa-linkedin">{" "}LinkedIn</i></a>
                        <a href="#"><i className="fab fa-instagram">{" "}Instagram</i></a>
                    </div>
                </div>
            </header>

            {/* Despre Secțiune */}
            <section className="py-5" id="despre">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="mb-4">Despre CodeCon 2025</h2>
                            <p>CodeCon 2025 este evenimentul anual dedicat dezvoltatorilor și pasionaților de tehnologie. În cadrul acestei conferințe, vei avea oportunitatea să descoperi cele mai noi tendințe în programare, să înveți de la experți recunoscuți la nivel internațional și să îți extinzi rețeaua de contacte profesionale.</p>
                            <p>De la inteligență artificială și machine learning până la dezvoltare web și securitate cibernetică, CodeCon 2025 acoperă o gamă largă de subiecte relevante pentru piața actuală IT.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="res/images/codecon.jpg" alt="CodeCon prezentare" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Secțiune */}
            <Schedule />
            
            {/* Locație Secțiune */}
            <section className="py-5" id="locatie">
                <div className="container">
                    <h2 className="text-center mb-5">Locație</h2>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!4v1740594412869!6m8!1m7!1sOkwNUmvduxpBo5QLjSJKYg!2m2!1d44.43235066915866!2d26.09129152242635!3f132.4492931389636!4f15.809992034393872!5f0.7820865974627469" 
                                width="600" 
                                height="300" 
                                style={{border: 0}} 
                                allowFullScreen="true" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                            <h4>Hotel Technovation</h4>
                            <p>Bulevardul Libertății nr. 25, București</p>
                            <p><strong>Transport:</strong></p>
                            <ul>
                                <li>Metrou: Stația Universitate (10 minute de mers pe jos)</li>
                                <li>Autobuz: Liniile 104, 117, 368 (stația Piața Rosetti)</li>
                                <li>Parcare: Disponibilă în cadrul hotelului (locuri limitate)</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="mb-0">Informații suplimentare</h4>
                                </div>
                                <div className="card-body">
                                    <p>Hotel Technovation oferă o sală de conferințe modernă, cu o capacitate de 300 de persoane, echipată cu cele mai noi tehnologii audio-vizuale.</p>
                                    <p>În apropiere veți găsi numeroase restaurante și cafenele unde puteți socializa după sesiunile din program.</p>
                                    <p>Pentru cazare, participanții CodeCon 2025 beneficiază de o reducere de 15% la camerele hotelului. Folosiți codul <strong>CODECON25</strong> la rezervare.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formular Înregistrare Secțiune */}
            <RegistrationForm />

        </div>
    );
}

// Randare App în elementul cu id "root"
ReactDOM.render(<App />, document.getElementById('root'));