import React, { useState } from 'react';
import "./Tc.css"
function TreeNode  ({ node, onEdit ,setTreeData }) {
    const [editedData, setEditedData] = useState(node.data);
    const [isEditing, setIsEditing] = useState(false);
    const [isactive,setIsactive]=useState(false);
    
  
    const handleAddChild=()=>{
      const newNode = {
        name: node.data || `Child of ${node.name}`,
        data: '',
        children: [],
      };
      node.data=null
      if (!node.children) {
        node.children = [];
      }
  
      node.children.push(newNode);
  
      setTreeData((prevTree) => ({ ...prevTree }));
    }
  
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = (e) => {
      if(e.key!="Enter") return
  
      onEdit(node.name, editedData);
      setIsEditing(false);
    };
    console.log(node.data, node.data!==undefined  , isEditing);
    return (
      <div  className='container'>
        { node.name && <> <span className='name_box' >
            <button className='activeButton' 
            onClick={()=>{setIsactive((value)=>!value)}}
            >{ isactive ?  <> V </>:<> &gt;</>   } </button>
            <span>   {  node.name} </span>
          
            <button onClick={handleAddChild}>addchild</button>
  
        </span>
        
         </>  }
       {isactive &&  <> { node.data &&  ( isEditing ? (
        <> <div>
            <input
              type="text"
              value={editedData}
              onChange={(e) => setEditedData(e.target.value)}
              onKeyDown={handleSave} 
  
          
            /></div>
          </>
      
        ) : (
            <div onClick={handleEdit} >Data:  {node.data}</div>
        )
        )
      }
        {node.children && node.children.map((child) => (
          <TreeNode key={child.name} node={child} onEdit={onEdit} setTreeData={setTreeData} />
        ))}
   </>
        }
      </div>
    );
  };

  export default TreeNode