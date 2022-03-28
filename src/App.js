import  { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import ProfileCard from './components/ProfileCard';
import useLocalStorage from './hooks/useLocalStorage';
function App() {
  const [Profiles, setProfiles]=useLocalStorage("profiles",[])
   
  
  const updateProfiles=(profile)=>{
    let arr =Profiles;
    arr.push(profile);
    setProfiles([...arr]);
  };

  return (
    <div  className='app'>
    <h1>Profile Maker</h1>
    
    <ProfileForm submit={updateProfiles}/>
    <hr/>
    <div className='list'>
    {
      Profiles.map((person, index) =>(
        <ProfileCard key={index} card={person}/>
      ))
    }
    </div>
    
    </div>
  

  )
}

export default App