import './App.css';
import Header from "./Mycomponents/Header";
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/footer';
 
function App() {
  let todos =[
    {
      sno:1,
      title:"Learn React",
      desc:"It is for your projects"
    },
    {
      sno: 2,
      title: "Learn CPP",
      desc: "Build a great knowledge of data structure"
    },
    {
      sno:3,
      title:"Complete Ybi course",
      desc:"It will enhance your knowledge"
    }
  ]
  return(
    <>
    <Header title="My Todos List" SearchBar={false}/>
    <Todos todos={todos}/>
    <todo/>
    <Footer/>

    </>
  )
}

export default App;
