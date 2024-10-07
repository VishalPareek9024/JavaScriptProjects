import { useState } from 'react'
import { useEffect } from 'react'
import { FaVolumeHigh } from "react-icons/fa6";

function App() {
  const [search, setSearch] = useState(0)
  const [audioSrc,setaudioSrc]= useState('')
  const [word, setWord] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');

  const handleClick = ()=>{
    setSearch(true)
  }

  let audio = document.getElementById('audio')
  const handleAudioEvent = ()=>{
  //  console.log(audioSrc);
   audio.src = audioSrc
   if(audio.src != '')
   {
     audio.play();
   }
   else{
    alert("Audio Is Not Available")
   }
  //  console.log(audio);
 }

// Using Use Effect Hook

  useEffect(()=>{
    if(search)
    {
     let input = document.getElementById('inp').value
     let h2  = document.getElementById('word')
     let showOutput = document.querySelector('.show-output')
     let handleAudioEvent;

      let ApiRef = "https://api.dictionaryapi.dev/api/v2/entries/en/"

      fetch(`${ApiRef}${input}`).then((response)=>response.json()).then((data)=>{
        // console.log(data)
       h2.innerHTML = input; 
      
        showOutput.style.display = 'block'

        // Set the value of usestate hook

        setaudioSrc(data[0].phonetics[1].audio)
        setPartOfSpeech("Part Of Speech : "+data[0].meanings[0].partOfSpeech);
        setPhonetic(data[0].phonetic || '');
        setDefinition(data[0].meanings[0].definitions[0].definition);
        setExample(data[0].meanings[0].definitions[0].example || 'Example not available');
        setaudioSrc(data[0].phonetics[1]?.audio || '');
        
      }).catch((error)=>{
        alert("Word Is Not Found")
      })

     setSearch(false)
    }
  },search)

  return (
    <>
      <div className='main'>
        <div className="container">
          <div className="search-box">
            <input type="text" id='inp' placeholder='Type a word here' />
            <button onClick={handleClick}>Search</button>
          </div>

          <div className="show-output">
           <div className='wordVoice'>
              <h2 id='word'>Hello</h2>
              <audio src="" controls  id='audio'></audio>
              <FaVolumeHigh id='volumeIcon' onClick={handleAudioEvent}
               fontSize="28px" color='#77d777' cursor="pointer"/>
           </div>
            <span id='partOfSpeech'>{partOfSpeech}</span>
            <span id='phonetic'>{phonetic}</span>

            <p id="definition">{definition}</p>
            <p className='example' id='example'>{example}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
