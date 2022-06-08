import React, {useState} from "react";
import axios from "axios";
import "./App.css"
export default function DogButton () {

const [dog, setDog] = useState([])
const [DisplayImage, setDisplayImage] = useState(false)

const dogList = ()=>{
    try{
      axios.get(`https://dog.ceo/api/breeds/image/random`).then(response => {
        setDog(response.data.message)
        setDisplayImage(true)
      }) 
    }catch(error){
      console.log("Tratar erro:", error)
    }
}
    return (
        <>
            <section id="container-btn-dog">
                <div>
                  <button onClick={() =>{dogList()}}><b>dog pictures to relax</b></button>
                </div>
                <figure>
                  {DisplayImage && (<img id="dog-img" onClick={() =>{dogList()}} src={dog} alt="imagem de cachorro aleatoria"/>)}  
                </figure>

            </section>
        </>
    )
}