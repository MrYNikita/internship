import FormAPI from './js/components/formAPI.js';

function App() {
    return (
        <div className="App">
            <header className="app-header"></header>
            <div className="app-body">
                <FormAPI id='form_TTS' name='TTS'/>
                <FormAPI id='form_STT' name='STT'/>
            </div>
            <footer className="app-footer"></footer>
        </div>
    );
}

export default App;