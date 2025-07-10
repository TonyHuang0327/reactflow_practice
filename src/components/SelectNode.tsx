import { Paper, InputLabel, Select, MenuItem} from "@mui/material";
import { Handle } from "@xyflow/react";
import { useCallback } from "react";
export function SelectNode(props) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
   
    return (
        <div>
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
            <Handle type="target" position="left"/>
            <Handle type="source" position="bottom" id="a" />
            <Handle type="source" position="right" id="b" />
        </div>
    );
  }