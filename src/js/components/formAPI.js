import React from 'react';
import { Select, FormControl, InputLabel, MenuItem, Box, Button } from '@mui/material';

function FormAPI (props) {

    const {

        id,
        url,
        name,

    } = props;

    const [apiTTS,setApiTTS] = React.useState({});
    const [apiSTT,setApiSTT] = React.useState({});
    const [apiTTSCatalog,setApiTTSCatalog] = React.useState([]);
    const [apiSTTCatalog,setApiSTTCatalog] = React.useState([]);

    const handleChangeApiTTS = (event) => {

        setApiSTT({});
        setApiTTS(event.target.value);

    }
    const handleChangeApiSTT = (event) => {
        
        setApiSTT(event.target.value);
    
    }

    React.useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setApiTTSCatalog(json));
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setApiSTTCatalog(json));

    },[]);

    return (
        <Box id="box_form" sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="box_form__label_TTS">TTS</InputLabel>
                <Select
                    id="box_form__label_TTS__select"
                    label="TTS"
                    value={apiTTS}
                    labelId="box_form__label_TTS"
                    onChange={handleChangeApiTTS}
                >
                    {apiTTSCatalog.map(item => <MenuItem value={item} key={item.id}>{item.name}</MenuItem> )}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="box_form__label_STT">STT</InputLabel>
                <Select
                    id="box_form__label_STT__select"
                    label="STT"
                    value={apiSTT}
                    labelId="box_form__label_STT"
                    onChange={handleChangeApiSTT}
                >
                    {apiSTTCatalog.filter(item => item.userId === apiTTS?.id).map(item => <MenuItem value={item} key={item.id}>{item.title}</MenuItem> )}
                </Select>
            </FormControl>
            <Button fullWidth id="box_button">СОХРАНИТЬ</Button>
        </Box>
    )

}

//{apiSTTCatalog.map(item => <MenuItem value={item.id}>{item.id}</MenuItem> )}
//{apiTTSCatalog.map(item => <MenuItem value={item.id}>{item.id}</MenuItem> )}

export default FormAPI;