import React from "react";
import "../Error/Error.css";
import { useDispatch } from "react-redux";
import { clearRecipes, getAllRecipes } from "../../../redux/action";
const Error = () => {
  const dispatch = useDispatch();
  return (
    <div className="contain_error">
      <div className="color_error">
        <div className="color_error_w">
          <div className="msg_error">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SMyMCQB7BRh3O-iR20yG_AlpjtNA7bSsSj3WNiOEupwkXVioVPGhH6Caar3ZAUGCgis&usqp=CAU"
              alt="four"
              className="img_4"
            />
            <img
              src="https://img1.freepng.es/20180407/cuw/kisspng-plants-vs-zombies-pumpkin-vegetable-cucurbita-plants-vs-zombies-5ac8fc3f3dbb05.0127328915231212152529.jpg" 
              alt="patillo_0" />
            <img
              src="https://i.pinimg.com/736x/8a/59/29/8a5929df585100f29c2e748f6766ae56.jpg"
              alt="pea"
              className="img_0"
            />
          </div>
          <div>
          The recipe does not exist, please enter an existing recipe ...
          </div>
          <div className="button_error">
            <img
              src="https://i.pinimg.com/originals/62/40/4f/62404f1d626d3b953d30f4f3e7ced637.jpg"
              alt="shovel"
              className="carita_feliz"
            />
            <div onClick={(e) => {
                dispatch(clearRecipes())
                dispatch(getAllRecipes())}}>
                Return Home!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Error;

