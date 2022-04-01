import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Select, FormControl, InputLabel, MenuItem, Button } from '@mui/material';

class FormAPI extends React.Component {

    constructor (props) {

        super(props);

        let {

            id,
            name,
            items,

        } = props;

        this.id = id;
        this.name = name;
        this.items = items;

    };

    render() {

        return (

            <FormControl fullWidth id={this.id}>
                <InputLabel>{this.name} API</InputLabel>
                <Select onChange={() => {}} id={`${this.id}__select`}>
                    {((n) => {

                        let arr = new Array(n).fill(0);

                        for (let i in arr) { arr[i] = <MenuItem>{Math.random()}</MenuItem> };

                        return arr;

                    })(5)}
                </Select>
                <Button>Save</Button>
            </FormControl>

        );

    };

};

ReactDOM.render(
    <div>
        <FormAPI id='form_TTS' name='TTS'/>
        <FormAPI id='form_STT' name='STT'/>
    </div>, document.getElementById('root')
);