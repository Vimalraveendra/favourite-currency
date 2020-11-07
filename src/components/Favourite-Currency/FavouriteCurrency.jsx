import React from "react";
import { popupWindow } from "../../redux/currencylist/currencylist.actions";
import { connect } from "react-redux";
import PopupWindow from '../Popupwindow/PopupWindow'


const FavouriteCurrency = ({ id, currency, rate,isOpen,popupWindow}) => {
  return (
    <React.Fragment>
      <li className="item" key={id}>
        <span className="left-push">{currency}</span>
        <span className="right-push">{rate}</span>
        <span className="remove-item" onClick={()=>popupWindow(id)}>
          {" "}
          &#10060;
        </span>
        {
          isOpen?(
          <PopupWindow />
          ):null
        }
      </li>
      
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  popupWindow:(id)=>dispatch(popupWindow(id))
});
export default connect(null, mapDispatchToProps)(FavouriteCurrency);
