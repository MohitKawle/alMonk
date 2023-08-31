import React, { useState } from 'react';
import "./Tc.css"
import TreeNode from './TreeNode';


const TreeComponent = ({ tree }) => {
  const [treeData, setTreeData] = useState(tree);
  const [exportData,setExportData]=useState(false)


  const handleEdit = (nodeName, newData) => {
    const updatedTree = updateTreeData(treeData, nodeName, newData);
    setTreeData(updatedTree);
  };

  const updateTreeData = (node, nodeName, newData) => {
    if (node.name === nodeName) {
      return { ...node, data: newData };
    };

    if (node.children) {
      const updatedChildren = node.children.map((child) =>
        updateTreeData(child, nodeName, newData)
      );
      return { ...node, children: updatedChildren };
    }

    return node;
  };

  return <> <TreeNode node={treeData} onEdit={handleEdit} setTreeData={setTreeData} />;

  <button onClick={(e)=>setExportData(val=>!val)} >Export </button>
     {exportData  &&   <div> { JSON.stringify(treeData) } </div> }
</>

};




export default TreeComponent;