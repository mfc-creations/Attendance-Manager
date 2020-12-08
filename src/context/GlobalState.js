import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// import axios from "axios";
const initialState = {
  //   transactions: [],
  department: "",
  batch: "3rd year IT A",
  subject: "Wireless",
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function storeDepartment(dep) {
    dispatch({
      type: "STORE_DEPARTMENT",
      payload: dep,
    });
  }
  function storeBatch(batch) {
    dispatch({
      type: "STORE_BATCH",
      payload: batch,
    });
  }
  function storeSubject(sub) {
    dispatch({
      type: "STORE_SUBJECT",
      payload: sub,
    });
  }

  //   async function deleteTransaction(id) {
  //     try {
  //       await axios.delete(`/api/v1/transactions/${id}`);
  //       dispatch({
  //         type: "DELETE_TRANSACTION",
  //         payload: id
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: "TRANSACTION_ERROR",
  //         payload: error.response.data.error
  //       });
  //     }
  //   }

  //   async function addTransaction(transaction) {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     };
  //     try {
  //       const res = await axios.post("/api/v1/transactions", transaction, config);
  //       dispatch({
  //         type: "ADD_TRANSACTION",
  //         payload: res.data.data
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: "TRANSACTION_ERROR",
  //         payload: error.response.data.error
  //       });
  //     }
  //   }

  return (
    <GlobalContext.Provider
      value={{
        department: state.department,
        batch: state.batch,
        subject: state.subject,

        loading: state.loading,
        error: state.error,
        storeDepartment,
        storeBatch,
        storeSubject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
