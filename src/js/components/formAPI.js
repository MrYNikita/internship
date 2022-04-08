import { Select, FormControl, InputLabel, MenuItem, Button, FormHelperText } from '@mui/material';

function FormAPI (props) {

    return <FormControl fullWidth id={props.id}>
        <InputLabel>{props.name} API</InputLabel>
        <Select
        onChange={() => {}}
        id={`${props.id}__select`}
        >
            {((n) => {

                let arr = new Array(n).fill(0);

                for (let i in arr) {
                    
                    const value = Math.random();

                    arr[i] = <MenuItem key={`${props.id}__select_item-${i}`} value={value}>{value}</MenuItem>
                
                };

                return arr;

            })(5)}
        </Select>
        <FormHelperText>Select {props.name} API</FormHelperText>
        <Button>Save</Button>
    </FormControl>;

};

export default FormAPI;