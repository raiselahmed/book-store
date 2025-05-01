import { toast } from "react-toastify";

const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;

    }else{
        return   [];
    }
}

const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();
     if (storedList.includes(id))  {
        alert('allready exists this books')
        // toast('allready exists this books')
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
       toast('Added Read List')
    }
}

export {addToStoredReadList, getStoredReadList}