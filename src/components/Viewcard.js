import React, { useState, useEffect } from "react";
import { MdOutlinePrint, MdWest, MdDownload } from "react-icons/md";
import { GrRedo } from "react-icons/gr";
import { Link} from "react-router-dom";
import {getMyflashCards} from "../service/Localstorage";
import Popup from "../components/modals/Popup";

function Viewcard() {
  //state for Modal open and close 
  const[openModal, setOpenModal]=useState(false);
  //state to get/store localstorage data
  const [myFlashCard, setMyFlashCard]=useState([]);
 
  useEffect(() => {
    setMyFlashCard(getMyflashCards())
   },[]);
  
  

  return (
    <div>
        <div className="relative">
        {myFlashCard.length > 0 ? (

          <div className="mx-24">
            <div className="pt-4">
            
                <div className="flex  break-all">
                  <Link to="/Mycards">
                    <MdWest className="mr-4 mt-1.5 text-lg" />
                  </Link>
                  <div className="pr-6">
                    <h1 className="font-bold">{myFlashCard[0].groupName}</h1>
                    <p className="text-gray-500 mb-6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Suscipit dolorum mollitia assumenda facere reprehenderit
                      fuga aspernatur dicta nostrum labore, quas repudiandae
                      distinctio asperiores natus fugit ipsum nesciunt earum ab
                      ratione!
                    </p>
                  </div>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-6">
              <div className="bg-slate-50  h-80 p-6 rounded-md border border-gray-200 shadow-md">
                <h2 className="mb-3 font-semibold">Flashcards</h2>
                <hr />

                <ul className="text-gray-500 font-semibold">
                  <li className="my-3 cursor-pointer">card 1</li>
                  <li className="my-3 cursor-pointer">Card 2</li>
                  <li className="my-3 cursor-pointer">Card 3</li>
                  <li className="my-3 cursor-pointer">Card 4</li>
                  <li className="my-3 cursor-pointer">Card 5</li>
                  <li className="my-3 cursor-pointer">Card 6</li>
                </ul>
              </div>
              <div className="grid grid-flow-col gap-6 px-14 py-8 col-span-4 bg-slate-50  rounded-md border border-gray-200 shadow-md">
                <div className="flex items-center justify-center h-60 w-80 border-2 rounded-md">
                  <span className="text-center text-slate-300">
                    No Image <br /> Available
                  </span>
                </div>
                <div className="w-40 md:w-auto">
                  <p className="text-gray-500 capitalize break-all">
                    lo Facere! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Architecto illo, amet accusamus dolores
                    saepe, sed natus ipsa harum exercitationem tenetur at
                    quibusdam consectetur soluta omnis modi ut repudiandae aut
                    quasi.
                  </p>
                </div>
              </div>

              <div className=" text-gray-500">
                <button onClick={()=>{setOpenModal(true)}} className="btn">
                  <GrRedo className="my-3" />
                  <div className="my-1.5 ml-6"> Share </div>
                </button>
                <button className="btn">
                  <MdDownload className="my-3" />
                  <div className="my-1.5 ml-6"> Download </div>
                </button>
                <button className="btn">
                  <MdOutlinePrint className="my-3" />
                  <div className="my-1.5 ml-6"> Print </div>
                </button>
              </div>
            </div>
          </div>
         ):null}
        </div>
        {openModal && <Popup closeModal={setOpenModal}/>}
        
    </div>
  );
}

export default Viewcard;
