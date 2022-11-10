import { Link } from "react-router-dom";
import { MdEast, MdDoubleArrow } from "react-icons/md";
import { getMyflashCards } from "../service/Localstorage";
import { useEffect, useState } from "react";
//import { BiEdit} from "react-icons/bi";

const Mycards = () => {
  const [myFlashCards, setMyTasks] = useState([]);
  const [noOfCards, setNoOfCards] = useState(6);

  // onClick function to see all hidden flashcards
  const Seeall = () => {
    setNoOfCards(noOfCards + myFlashCards.length);
  };

  const slicedCards = myFlashCards.slice(0, noOfCards);

  useEffect(() => {
    setMyTasks(getMyflashCards());
  }, []);

  return (
    <>
      {myFlashCards.length > 0 ? (
        <div className="grid grid-cols-3  mt-6 gap-4 justify-items-stretch mx-24 ">
          {slicedCards.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-slate-50 border border-gray-300 rounded-md h-52 "
              >
                <div className="flex items-center px-3 pt-3 overflow-hidden text-ellipsis">
                  <span className="flex items-center justify-center text-center leading-3 text-gray-400  bg-red-100 h-12 w-12 rounded-full text-xs">
                    No <br /> Image
                  </span>

                  <div className="ml-3 ">
                    <h1 className="w-14 lg:w-auto font-bold overflow-hidden text-ellipsis">
                      {myFlashCards[index].groupName}
                    </h1>

                    <p className="text-xs">3 cards</p>
                  </div>
                </div>

                <div className="px-4 mt-2 h-24 text-sm overflow-hidden">
                  <p className=" break-all ">
                    {myFlashCards[index].description}
                  </p>
                </div>

                <button className="flex ml-4 mt-2 text-yellow-700 font-semibold text-sm">
                  <Link
                    className="view link"
                    to={`/View/Card/${myFlashCards[index].Id}`}
                  >
                    View Cards
                  </Link>
                  <MdEast className="ml-3 mt-1" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mx-24 my-10 font-semibold text-xl">
          <h3 className="text-red-600 ">
            No Flash Cards to Show.
            <br />
          </h3>
          <h2 className="mt-8 "> Click Below to Create Your Flash Cards </h2>
          <Link to="/" className="flex text-blue-600">
            <MdDoubleArrow /> <MdDoubleArrow /> <MdDoubleArrow />{" "}
          </Link>
        </div>
      )}

      <div className="flex flex-wrap justify-end mx-24 h-32 ">
        <button
          onClick={() => Seeall()}
          className="text-yellow-700 font-semibold text-md"
          href="/"
        >
          See all
        </button>
      </div>
    </>
  );
};

export default Mycards;
