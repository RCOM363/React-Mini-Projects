import { useState } from 'react'
//import the data
import data from './data';

const Accordion = () => {
    const [singleSelection,setSingleSelected] = useState(null);
    const [multipleSelection,setMultipleSelection] = useState([]); 
    const [mulSel,setMulSel] = useState(false);

    const handleSingleClick = (itemId) => {
        setSingleSelected(singleSelection===itemId?null:itemId);
        // expands the selected item, collapses if it is already selected (toggle)
    }

    const handleMultipleSelection = (itemId) => {
        let selectedItems = [...multipleSelection];
        const index = selectedItems.indexOf(itemId);
        index === -1? selectedItems.push(itemId):selectedItems.splice(index,1)
        setMultipleSelection(selectedItems);
    }

  return (
    <div className=' w-[50em]  mx-auto p-5 flex flex-wrap justify-center gap-3'>
      <div className=' basis-full flex justify-start gap-2 items-center'>
        <input 
          type="checkbox" 
          className=' w-5 h-5 outline-none border-[white] border-[3px] accent-purple-400 rounded-none cursor-pointer' 
          onClick={()=> setMulSel((prev)=>!prev)}
          defaultChecked={mulSel}
        />
        <label className=' font-semibold'>Multiple Selection</label>
      </div>
      {
        data && data.length > 0 &&
        data.map((item)=>(
            <div key={item.id} onClick={mulSel?()=>handleMultipleSelection(item.id):()=>handleSingleClick(item.id)} className='  basis-full p-3 cursor-pointer bg-white'>
                <div className=' flex justify-between items-center p-2 '>
                  <h3 className=' inline font-semibold'>{item.question}</h3>
                  <span className='font-bold text-xl text-white text-center w-8 bg-purple-400 p-1'>
                    {
                      mulSel? multipleSelection.indexOf(item.id) !== -1 ? "-":"+":
                      singleSelection === item.id? "-":"+"
                    }
                  </span>
                </div>
                <div>
                  {
                    mulSel? multipleSelection.indexOf(item.id) !== -1 && (
                      <div className=' p-2'>{item.answer}</div>
                    ):
                    singleSelection === item.id && (
                      <div className=' p-2'>{item.answer}</div>
                    )
                  }
                </div>
            </div>
        ))
      }
    </div>
  )
}
export default Accordion
