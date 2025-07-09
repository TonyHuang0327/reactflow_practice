import React, { useCallback } from 'react';
import { ReactFlow, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import { TextUpdaterNode } from './components/TextUpdaterNode';
import { SelectNode } from './components/SelectNode';
const nodeTypes = {
  textUpdater: TextUpdaterNode,
  selectAge: SelectNode
}
 
const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-2',
    type: 'selectAge',
    position: { x: 300, y: 0 },
    data: { value: 20 },
  },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}