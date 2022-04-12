import { Button } from '@mui/material';
import FormAPI from './js/components/formAPI.js';

function App() {
    return (
        <div className="App">
            <header className="app-header"></header>
            <div className="app-body">
                <FormAPI/>
            </div>
            <footer className="app-footer"></footer>
        </div>
    );
}

export default App;