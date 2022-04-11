import React from 'react';
import { Select, FormControl, InputLabel, MenuItem, Button, FormHelperText } from '@mui/material';

function FormAPI (props) {

    const {

        id,
        name,

    } = props;

    const [api,setApi] = React.useState('');

    const handleChange = (event) => { setApi(event.target.value); }

    return <FormControl id={id}>
        <InputLabel id={`${id}__label_input`}>{`${name}`}</InputLabel>
        <Select
            id={`${id}__select`}
            label="api"
            value={api}
            labelId={`${id}__label_input`}
            onChange={handleChange}
        >
            <MenuItem value="202.12.102.30">202.12.102.30</MenuItem>
            <MenuItem value="130.187.0.1">130.187.0.1</MenuItem>
            <MenuItem value="112.98.105.120">112.98.105.120</MenuItem>
            <MenuItem value="100.10.100.1">112.98.105.120</MenuItem>
        </Select>
        <Button>сохранить</Button>
    </FormControl>;

};

export default FormAPI;