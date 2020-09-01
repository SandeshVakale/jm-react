import React from 'react';
import './App.css';
import Grid from "./components/Grid";
import SearchList from "./components/SearchList";
function App() {

   React.useEffect(() => {
       document.title = 'JoliMoi'
   })

  return (
    <div className="App">
      <Grid/>
      <SearchList />
    </div>
  );
}

export default App;
