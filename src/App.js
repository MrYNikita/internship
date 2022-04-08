import FormAPI from './js/components/formAPI.js';

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="App-body">
                <FormAPI id='form_TTS' name='TTS'/>
                <FormAPI id='form_STT' name='STT'/>
            </div>
            <footer className="App-footer"></footer>
        </div>
    );
}

export default App;