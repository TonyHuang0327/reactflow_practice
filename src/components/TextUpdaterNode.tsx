import { Paper, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
export function TextUpdaterNode(props) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
   
    return (
      <Paper variant="outlined" sx={{
        p:2,
        backgroundColor:'pink'
      }}>
        <Typography>Text:</Typography>
        <TextField onChange={onChange} placeholder={props.data.value}sx={{
          backgroundColor:'white'
        }}></TextField>
      </Paper>
    );
  }