import React, { useState, useRef, useEffect} from 'react';
import '../App.css'
import FetchedSearchList from './searchlist';


export default function ResultText(props) {
  const [citationArray, setCitationArray] = useState([])


  useEffect(() => {
    chrome.storage.local.get(["chromeStoreage"], function(result) {
      // console.log(result);
      // console.log('Value on load ' + result.chromeStoreage);
      // console.log(typeof result.chromeStoreage)
      // console.log(Object.values(result))
      setCitationArray(citationArray => [result.chromeStoreage.map(data => data).join('\n')])
    });
  },[])
  

  useEffect(() => {
    setCitationArray(citationArray => [...citationArray, props.citeString])
  }, [props.citeString])

  useEffect(()=> {
    chrome.storage.local.set({"chromeStoreage": citationArray}, function() {
      console.log('Value is set to ' + citationArray);
    });
    // chrome.storage.local.get(["chromeStoreage"], function(result) {
    //   console.log(result);
    //   console.log('Value currently is ' + result.chromeStoreage);
    // });
  }, [citationArray])

  // chrome.storage.onChanged.addListener(function (changes, namespace) {
  //   for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
  //     console.log(
  //       `Storage key "${key}" in namespace "${namespace}" changed.`,
  //       `Old value was "${oldValue}", new value is "${newValue}".`
  //     );
  //   }
  // });


  return (
    <>
    <div>
    <textarea className='resultTextarea' defaultValue={citationArray.map(data => data).join('\n')}>
    </textarea>
    </div>
    </>
    );
  };
  