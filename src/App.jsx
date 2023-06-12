import { useState } from 'react'
import Servant from './components/Servant'

function App() {
  const servants = [{
    nama: "Nemo",
    gambar: "https://i.pinimg.com/originals/86/0f/b7/860fb7137c9f81f9a458ba9bfbf2c92f.jpg",
    deskripsi: "The captain of the Nautilus finally makes himself summonable with the arrival of the Imaginary Scramble event. As a single-target Arts Rider, Nemo specializes in taking down certain specific targets. Fitting his role as captain of a ship, his power varies substantially depending on where and what he’s fighting. He won’t always shine, but in his favored terrain, he can be very powerful indeed.",
    servantClass: "Rider"
  }, {
    nama: "Hassan Of The Serenity ",
    gambar: "https://i.pinimg.com/originals/48/85/5a/48855a8d02d1ac3c96abd35575786002.jpg",
    deskripsi: "The Hassan-i-Sabbah that personifies the infamous Poison Girl hailing from India’s Ancient Age, Serenity employs a variety of methods to debilitate the Master’s foes. Her Arts-focused deck and skills fit well into her image as a saboteur, giving her a unique way to control an enemy’s actions while slowly draining them",
    servantClass: "Asssasin"
  }, {
    nama: "Katsushika Hokusai",
    gambar: "https://vignette.wikia.nocookie.net/fategrandorder/images/1/1f/Portrait_Servant_198_1.png/revision/latest?cb=20171231190645",
    deskripsi: "Sometimes, artists use ink to paint. Other times, they are tentacle monsters from another planet. With a paintbrush always at her side, Hokusai makes her living as an Arts focused AoE Foreigner with the potential to fire off multiple Noble Phantasms in a row.",
    servantClass: "Foreigner"
  }]
  return (
    <>
     <header style={{backgroundColor:'brown',textAlign:'center',padding:'20px',fontSize:'80px',fontFamily:'cursive',color:'white'}}>Azriel Fgo Card</header>
    <div style={{display: 'vertical-grid',
                gridTemplateColumns: 'auto auto auto',
                padding: '50px',
                margin : 'auto',
                justifyContent: 'space-around'}}>
      
     
      {
        servants.map((value, index) => {
          return <Servant key={index} nama={value.nama} gambar={value.gambar} servantClass={value.servantClass} deskripsi={value.deskripsi}  />
        })
      }
      
      </div>
      
    </>
    
  )
}

export default App
