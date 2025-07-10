import { Paper, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { Handle } from "@xyflow/react";
export function TextUpdaterNode(props) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
   
    return (
      <div>
        <Paper variant="outlined" sx={{
          p:2,
          backgroundColor:'pink'
        }}>
          <Typography>Text:</Typography>
          <TextField onChange={onChange} placeholder={props.data.value}sx={{
            backgroundColor:'white'
          }}></TextField>
        </Paper>
        <Handle type="source" position="right" />
      </div>
      
    );
  }