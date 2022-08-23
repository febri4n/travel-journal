import Card from "./components/Card";
import Header from "./components/Header";
import data from './data';

function App() {
  console.log(data);
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
