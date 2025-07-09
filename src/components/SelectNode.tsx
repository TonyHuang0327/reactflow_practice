import { Paper, InputLabel, Select, MenuItem} from "@mui/material";
import { useCallback } from "react";
export function SelectNode(props) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
   
    return (
      <Paper variant="outlined" sx={{
        p:2,
        backgroundColor:'pink'
      }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.data.value}
            label="Age"
            onChange={onChange}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Paper>
    );
  }