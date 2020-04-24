import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from "./data.json"
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [textValue, setValue] = useState([]);
  const [contentDisplay, setContentDisplay] = useState([])
  const [exisitingBill, setExisitingBill] = useState(0)
  let total = 0
  const dispatch = useDispatch()
  const getValuefromStore = useSelector((state) => state)
  function filterContent(event) {
    if (event.target.value.length > 0) {
      const grocerySelectedList = GroceryList.filter((item) => item.vegetable.toLowerCase().indexOf(event.target.value) >= 0)
      setValue(grocerySelectedList)
    }
    else
      setValue([])
  }

  useEffect(() => {
    setContentDisplay(getValuefromStore.grocerySelectedBilling)
    setExisitingBill(getValuefromStore.BillingAmount)
    console.log("DISPLAY", getValuefromStore)
  }, [getValuefromStore])

  return (
    <>
      <div className="mainTag">
        <div className="subTag1">
          <h1 className="contentCenter">Grocery Application</h1>
          <br />
          <input type="text" onChange={filterContent} />
          {
            textValue.map((item, index) => {
              return (

                <div className="listTag">
                  <h3 style={{ width: "35%" }}>{item.vegetable}</h3>
                  <h3>{item.cost}</h3>
                  <button onClick={() => dispatch({
                    type: "GROCERYBILLING", data: item, itemCost: item.cost,
                    exisitingBill: exisitingBill
                  })}>Billing</button>
                </div>
              )
            })
          }
        </div>
        <div className="subTag2">
          <h1>Billing</h1>
          <div className="listTagForBilling"></div>
          {
            contentDisplay.map((item, index) => {

              return (
                <>
                  <div className="listTagForBillingContent">
                    <h5>{item.vegetable}</h5>
                    <h5>{item.cost}{" Rs"}</h5>
                  </div>
                </>
              )
            })
          }
          <div className="listTagForBillingContent">
            <div>
              <h5>Total {exisitingBill} Rs</h5>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
