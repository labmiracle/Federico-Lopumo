import "./App.css";


//Componentes
import Title from "./components/Title";
import Text from "./components/Text";
import ListItem from "./components/List/ListItem";
// import List from "./components/List/List";
import Link from "./components/Link";




function App(props) {
  return (
    <div>
      <Title></Title>
      <Text></Text>
      <ListItem></ListItem>
      <Link></Link>
    </div>
  );
}

export default App;
