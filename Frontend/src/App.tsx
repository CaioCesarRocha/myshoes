import AppRoutes from "./routes/App.routes";
import {useAppSelector} from './redux/hooks/useAppSelector';


function App() {
  const theme = useAppSelector(state => state.theme)
  var newTheme = document.getElementById("setDarkTheme") as HTMLDivElement
  
  //setando theme DARK em toda app
  if(theme.isDark){  
    console.log('passei no true dark')
    newTheme.classList.add('dark')  
  }else{
    try{
      newTheme.classList.remove('dark')
    }catch(err){
      console.log(err)
    }  
  }

  return (
        <div className="App">
          <div id="setDarkTheme" className="dark:bg-gray-900"> 
            <AppRoutes/>
          </div>       
        </div>  
  );
}

export default App;
