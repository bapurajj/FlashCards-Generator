import React from "react";
import { useState, useEffect} from "react";
import { MdUploadFile, MdAdd, MdDeleteOutline } from "react-icons/md";
import { BiEdit} from "react-icons/bi";


//getting the values of local storage
const getDatafromLocalstorage = () => {
  const myList = localStorage.getItem("myFlashCards");
  if (myList) {
    return JSON.parse(myList);
  } else {
    return [];
  }

};


const Createflashcard = () => {
  //main array of objects state
  const [inputFields, setInputFields] = useState(getDatafromLocalstorage());

  // input field states
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  // array of state for dynamic form
  const [flashTerms, setFlashTerms] = useState([{ term: "", defination: "" },]);


// accesing input valuse
  const handleChange = (index, event) => {
    let newTermValues = [...flashTerms];
    newTermValues[index][event.target.name] = event.target.value;
    setFlashTerms(newTermValues);
  };

  // for adding dynamic/more form fields
  const addFields = () => {
    setFlashTerms([...flashTerms, {term:'', defination:''}]);
    
  };

  // removing form field with the help of index no..
  const deleteFields = (index) => {
    let newFields = [...flashTerms];
    newFields.splice(index, 1);
    setFlashTerms(newFields);
  };

  const editFields = (index) => {
    
  }

  // generates uniqueId
  var Id= new Date().getTime()
 
  // submitting form data
  const handleSubmit = (event) => {
    event.preventDefault();
    let formField = { 
    Id, 
    groupName,
    description,
    flashTerms
    
  };
console.log(formField);

    setInputFields([...inputFields, formField]); //for updating input fields
    setGroupName(''); //reset input field
    setDescription('');
    setFlashTerms([flashTerms])
    event.target.reset()
};

  //saving data to local storage
  //if any flashcard is created useeffect will trigger and it will add card details to localstorage as a string
  useEffect(() => {
    localStorage.setItem("myFlashCards", JSON.stringify(inputFields));
  }, [inputFields]);
   
    
  

  return (
    <>
      <form onSubmit={handleSubmit} className="pt-5 px-24">
        <div className="grid grid-col-1 items-stretch content-center gap-6">
          <div className="p-6 bg-slate-50 rounded-md shadow-lg">
            <label className=" text-gray-500 text-sm"> Create Group * </label>

            <div className="flex mt-1.5">
              <input
                className="mb-4 p-2 h-8 w-72 border border-gray-500 rounded-sm focus:outline-none"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                name="groupName"
              />
              <label className="w-36 h-8 mx-4 border border-gray-500 rounded-sm hover:cursor-pointer ">
                <div className="flex px-2.5 text-purple-700 ">
                  <MdUploadFile className="h-8 w-6" />
                  <span className="text-xs pt-2 pl-3 font-semibold ">
                    Upload Image
                  </span>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>

            <label className="block mt-3 mb-1.5 text-gray-500 text-sm">
              Add description
            </label>
            <textarea
              className="resize-none w-2/3 p-2 text-sm border border-gray-500 rounded-sm placeholder-gray-600 placeholder-opacity-25 focus:outline-none "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              placeholder="Describe the roles,responsibility,skills required for the job and help candidate understand the role better."
            ></textarea>
          </div>

          <div className="p-6 bg-slate-50 rounded-md shadow-lg ">
            
            {
            flashTerms.map((element, index) => (
              <div key={index} className="flex flex-wrap w-full">
                
                <div className="bg-green-500 mt-2 mr-4 h-6 w-6 rounded-full text-white">
                  <span className="text-sm font-bold ml-2">
                    {index + 1}
                  </span>
                </div>
               
                <div className="mt-1">
                  <label className="block mb-0.5 text-gray-500 text-sm">
                    Enter Term *
                  </label>
                  <input
                    className="mr-4 mb-3 p-2 h-8 w-80 border border-gray-500 rounded-sm focus:outline-none"
                    type="text"
                    name="term"
                    value={flashTerms.term}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div className="mt-1 ml-10">
                  <label className="block mb-0.5 text-gray-500 text-sm">
                    Enter Defination *
                  </label>
                  <input
                    className="mr-4 p-2 h-8 w-80 border border-gray-500 rounded-sm focus:outline-none"
                    type="text"
                    name="defination"
                    value={flashTerms.defination}
                    onChange={(event) => handleChange(index, event)}

                  />
                </div>
            
              
              {
              index ? 
                <div className="flex mt-5 ml-1 text-purple-700">
                    <button className="mr-4" >
                      <MdDeleteOutline onClick={(e) => deleteFields(index,e)} className="w-6 h-12" />
                    </button>
                    <button>
                      <BiEdit onClick={(e) => editFields(index,e)} className="w-6 h-12" />
                    </button>
                </div>   
               : null
              }   
               
              </div>
            ))}

            <button
              className="flex font-semibold pt-4 pb-2 ml-10 text-blue-600"
              type="button"
              onClick={() => addFields()}
            >
              <MdAdd className="self-center mr-1" /> Add more
            </button>
          </div>
        </div>

        <div className="mt-10 grid place-content-center">
          
          <button
            className="px-14 py-1.5 rounded-sm bg-red-600 text-white text-sm
             active:bg-red-700"
            type="submit"
            >
            Create
          </button>
          
        </div>
      </form>
    </>
  );
};

export default Createflashcard;
