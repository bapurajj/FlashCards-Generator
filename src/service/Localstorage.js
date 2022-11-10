export const getMyflashCards = () => {
    if (!localStorage["myFlashCards"]) {
      localStorage["myFlashCards"] = "[]";
    }
  
    let myFlashCards = localStorage["myFlashCards"];
    myFlashCards = JSON.parse(myFlashCards);
    return myFlashCards;
  };

  export const getMyflashCardById = (Id) => {
    const myFlashCard = getMyflashCards();
    const myCard = myFlashCard.find((myCard) => myCard.Id === Id);
    return myCard;
    
  };
 
  