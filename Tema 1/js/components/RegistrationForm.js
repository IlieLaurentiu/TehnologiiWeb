// Componenta pentru formularul de înregistrare
function RegistrationForm() {
    const [formData, setFormData] = React.useState({
        nume: '',
        email: '',
        telefon: '',
        companie: '',
        ziua1: false,
        ziua2: false
    });
    
    const [status, setStatus] = React.useState({
        submitting: false,
        submitted: false,
        success: false,
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validare formular
        if (!formData.nume || !formData.email) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                message: 'Numele și emailul sunt obligatorii!'
            });
            return;
        }
        
        // Verificare dacă cel puțin o zi este selectată
        if (!formData.ziua1 && !formData.ziua2) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                message: 'Selectați cel puțin o zi de participare!'
            });
            return;
        }
        
        // Trimite datele la server
        setStatus({ submitting: true, submitted: false, success: false, message: '' });
        
        try {
            const response = await fetch('api/register.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            setStatus({
                submitting: false,
                submitted: true,
                success: result.success,
                message: result.message
            });
            
            // Resetează formularul dacă înregistrarea a avut succes
            if (result.success) {
                setFormData({
                    nume: '',
                    email: '',
                    telefon: '',
                    companie: '',
                    ziua1: false,
                    ziua2: false
                });
            }
        } catch (error) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                message: 'Eroare la trimiterea formularului: ' + error.message
            });
        }
    };
    
    return (
        <section className="py-5 bg-light" id="inregistrare">
            <div className="container">
                <h2 className="text-center mb-5">Înregistrare</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                {status.submitted && (
                                    <div className={`alert ${status.success ? 'alert-success' : 'alert-danger'}`}>
                                        {status.message}
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="nume" className="form-label">Nume complet *</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="nume" 
                                            name="nume"
                                            value={formData.nume}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefon" className="form-label">Telefon</label>
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            id="telefon" 
                                            name="telefon"
                                            value={formData.telefon}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="companie" className="form-label">Companie/Organizație</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="companie" 
                                            name="companie"
                                            value={formData.companie}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Zile de participare *</label>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="ziua1" 
                                                name="ziua1"
                                                checked={formData.ziua1}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="ziua1">
                                                Ziua 1 (15 Mai 2025)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="ziua2" 
                                                name="ziua2"
                                                checked={formData.ziua2}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="ziua2">
                                                Ziua 2 (16 Mai 2025)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary btn-lg"
                                            disabled={status.submitting}
                                        >
                                            {status.submitting ? 'Se procesează...' : 'Înregistrează-te'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}