import React, { useState, useCallback } from 'react';
import ResultText from './components/textarea'
import './App.css'


export function CitationButton(props) {

    return (
      <>
      <div className='button-wrap'>
      <br></br>
          <button onClick={async () => {await props.setCiteString(await createNewObject(props.selectedMedia, props.selectedData, props.selectedPage, props.selectedFormat, props.selectedData.isbn13, props.selectedData.isbn10 ))}} type="button">Cite</button>
      </div>
      </>
      )
  }

  // createNewObject(props.selectedMedia, props.selectedData, props.selectedPage, props.selectedFormat, props.selectedData.isbn13, props.selectedData.isbn10 )
async function createNewObject(media, data, page, format, isbn13, isbn10) {
  // console.log(isbn13, isbn13)
  let citeData = new Citation(media, data, page, format, isbn13, isbn10);
  let aCiteation = await citeData.cellBuilder();
  return aCiteation
}

class Citation {
  constructor(media, data, page, format, isbn13, isbn10){
    this.media = media,
    this.data = data,
    this.page = page,
    this.format = format
    this.isbn13 = isbn13
    this.isbn10 = isbn10
  }

  cellBuilder(){
    if (this.media === 'Print'){
      // console.log("Print")
      if (this.format === "MLA"){
        return mlaCite(this.data)
      }
      if (this.format === "APA"){
        return apaCite(this.data)
      }
      if(this.format === "Chicago"){
        return chicagoCite(this.data, this.isbn13, this.isbn10)
      }
    }
  }
}


export const HandleSearchData = (clickdata) => {
  // let data = new Citation(this.props.clickdata)
  // console.log(clickdata)
}

function mlaCite(data){
  // console.log(data)
  let authorString = mlaNameParse(data.author)
  let titleString = data.title
  let publisher = ""
  if (data.publisher !== undefined){
    publisher = data.publisher
  } else {
    publisher = "n.p. "
  }
  let publishDate = data.publishDate.slice(0, 4)
  let citationString = authorString + titleString+ ". " + publisher + ", " + publishDate + "."
  return citationString
}

function apaCite(data){
  let authorString = apaNameParse(data.author)
  let titleString = data.title
  let publisher = ""
  if (data.publisher !== undefined){
    publisher = data.publisher
  } else {
    publisher = "n.p. "
  }
  let publishDate = data.publishDate.slice(0, 4)
  let citationString = authorString + " (" + publishDate + "). "+ titleString + ". " + publisher+"."
  return citationString
}

async function chicagoCite(data, isbn13, isbn10){
  let authorString = apaNameParse(data.author)
  let titleString = data.title
    let publisher = ""
  if (data.publisher !== undefined){
    publisher = data.publisher
  } else {
    publisher = "n.p. "
  }
  let publishDate = data.publishDate.slice(0, 4)
  let publishPlace = ""
  let calldata
  if(isbn13)
  {await openLibCall(isbn13)
    let dataKey = await Object.keys(calldata)[0];
    if(calldata[dataKey].publish_places){
      publishPlace = calldata[dataKey].publish_places[0].name }
    else {
      publishPlace = "n.p. "
    } 
  } else if(isbn10) 
  {await openLibCall(isbn10)
    let dataKey = await Object.keys(calldata)[0];
    if(calldata[dataKey].publish_places){
      publishPlace = calldata[dataKey].publish_places[0].name }
    else {
        publishPlace = "n.p. "
      } 
  }
  async function openLibCall(isbnNum){
    const searchterm = JSON.stringify(isbnNum)
    await fetch('http://localhost:3001/api/openlibraryapi',  {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "searchterm" : searchterm
      }),
    })
    .then(res => res.json())
    .then(data => calldata = data)
  } 
  let citationString = authorString + ". " + titleString + ". " + publishPlace + ": " + publisher+"," + publishDate +"."
  return citationString

}

function apaNameParse(arrayOfNames){
  if (arrayOfNames) {
  let allNamesString = ""
  for (let i=0; i < arrayOfNames.length; i++){
    let formatedName = ""
    let fullname = arrayOfNames[i]
    let nameArray = fullname.split(" ");
    let lastName = nameArray.pop()
    formatedName += lastName + " "
    for (let names of nameArray){
      let intitials = names.slice(0,1)
      formatedName +=  intitials
    }
    if (arrayOfNames.length === 3){
      let altFinalString = formatedName + ", et al."
      return altFinalString
    }
    if (i == 1 && arrayOfNames.length === 2) {
      allNamesString += "and "
    }
    allNamesString += formatedName + ", "
  }
  let finalString = allNamesString.slice(0, -2) + ".";
  return finalString
}
else {
  return ""
}
}

function mlaNameParse(arrayOfNames){
  if (arrayOfNames){
    let allNamesString = ""
  for (let i=0; i < arrayOfNames.length; i++){
    let formatedName = ""
    let fullname = arrayOfNames[i]
    let nameArray = fullname.split(" ");
    let firstName = nameArray.shift()
    let lastName = nameArray.pop()
    formatedName += lastName + ", " + firstName
    if (arrayOfNames.length === 3){
      let altFinalString = formatedName + ", et al."
      return altFinalString
    }
    for (let names of nameArray){
      let intitials = names.slice(0,1)
      formatedName +=  " " + intitials
    }
    if (i == 1 && arrayOfNames.length === 2) {
      allNamesString += "and "
    }
    allNamesString += formatedName + ", "
  }
  let finalString = allNamesString.slice(0, -2) + ".";
  return finalString
  }
  else {
    return ""
  }
  
}
