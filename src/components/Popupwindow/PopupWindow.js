import React  from 'react';
import './PopupWindow.scss'
import {connect} from 'react-redux';
import {
  removeCurrency,
  clearCurrency,
  popupWindow
} from "../../redux/currencylist/currencylist.actions";

const PopupWindow = ({clearCurrency,closeWindow,  favouriteList,id,removeCurrency})=>{
  let render = id? ()=>removeCurrency(id): ()=>clearCurrency();

    return favouriteList.length>0?(
     <div className='modal'>
      <div className="modal-content" >
         <div className="container">
         <h3>Confirm </h3>
    
         <p>Are you sure you want to delete ?</p>
         
           <div className="clearFix">
             <button type="button"  onClick={closeWindow} className="cancelBtn">Cancel</button>
             <button type="button" onClick={()=>{render();closeWindow()}}  className="deleteBtn">Delete</button>
           </div>
         </div>
       </div>
       </div>
    ):null  
    
}

const mapStateToProps = ({
  currencylist: { currency, currencies, id, favouriteList ,isOpen}
}) => ({
  currency,
  currencies,
    id,
  favouriteList,
  isOpen
});
const mapDispatchToProps = dispatch => ({
  clearCurrency: () => dispatch(clearCurrency()),
  closeWindow:()=>dispatch(popupWindow()),
    removeCurrency: id => dispatch(removeCurrency(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(PopupWindow)