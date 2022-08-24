import React, { useState } from 'react';
import './App.css'


export default function HandleData(data) {
    console.log(data)
    console.log("HandleData")
    let selectionStack = document.querySelector('.page-input')
    console.log(selectionStack)
    selectionStack.click();
  };
  