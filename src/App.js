
import "./App.css";
import MainApp from "./component/MainApp";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AddUser from "./component/AddUser";
// import RestApp from "./component/RestApp";

function App() {
  return (
    <div className="App">

      <p>This is header section</p>
      <Header/>
      <AddUser></AddUser>
      <MainApp />
      {/* <RestApp/> */}
      <Footer/>
    </div>
  );
}

export default App;
