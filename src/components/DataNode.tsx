import { Paper, Typography } from "@mui/material";
import { Handle } from "@xyflow/react";
const data =
    {
        id:1,
        name:"tony",
        age:23,
        hobby:'play'
    }
export function DataNode(props) {
    
    return (
      <div>
        <Paper variant="outlined" sx={{
          p:2,
          backgroundColor:'pink'
        }}>
          <Typography>Id:{data.id}</Typography>
          <Typography>Name:{data.name}</Typography>
          <Typography>Age:{data.age}</Typography>
          <Typography>Hobby:{data.hobby}</Typography>
        </Paper>
        <Handle type="target" position="top" />
      </div>
      
    );
  }