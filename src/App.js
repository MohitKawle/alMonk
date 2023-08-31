import './App.css';
import { useState } from 'react';
import TreeComponent from './TreeComponent';
function App() {
  const [treeData,setTreeData]=useState({
    name: 'root',
    children: [
    {
    name: 'child1',
    children: [
    {name: 'child1-child1', data: "c1-c1 Hello"},
    {name: 'child1-child2', data: "c1-c2 JS"}
    ]},
    {name: 'child2',children: [
    ]}
    ]
    })
  return (
    <div>
     <TreeComponent tree={treeData} />

    </div>
  );
}

export default App;
