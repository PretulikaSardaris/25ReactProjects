import React, { useState } from 'react'

const CustomTab = () => {
    const [tabs, setTab] = useState(['Tab 1'])
    const [selectedTab, setSelectedTab] = useState(['Tab 1'])


    function addNew() {
        if (tabs.length < 5) {
            const newTab = `Tab ${tabs.length + 1}`;
            setTab([...tabs, newTab])
        }
        else {
            alert('Maximum of 5 Tabs allowed')
        }
    }

    function reloadPage(){
        window.location.reload()
    }


    const handleTabCLick = (tab) => {
        setSelectedTab(tab)
    }

    return (



        <div className='flex flex-col gap-10'>
            <nav><ul className='flex gap-10 justify-center items-center bg-slate-400 rounded-md text-2xl text-black'>
                <button onClick={addNew} className='text-white float-left bg-slate-500'>Add new</button>

                {tabs.map((tab, index) => (
                    <li key={index} onClick={() => handleTabCLick(tab)} className='hover:cursor-pointer'>{tab}</li>
                ))}
            </ul></nav>
            <div className={`w-full h-96 g-5 rounded-md text-black text-2xl ${selectedTab === 'Tab 1' ? 'bg-teal-200' : selectedTab === 'Tab 2' ? 'bg-red-200' : selectedTab === 'Tab 3' ? 'bg-blue-200' : selectedTab === 'Tab 4' ? 'bg-green-200' : 'bg-pink-200'}`}>
    This is {selectedTab}
    <p className='text-xl'>This puzzle creates a new tab onClick of Add New and changes the background color of the div according to new tab</p>
</div>
<div><button onClick={reloadPage}>refresh</button></div>
        </div>
    )
}

export default CustomTab
