import Header from "./components/Header";

function App() {
  const data= [
    {
      name :"name:Жома",
      age:"age:22",
      car:"car:undefined",
      job:"job:techAdmin"
    },
    {
      name :"name:Бека",
      age:"age:29",
      car:"car:TRUE",
      job:"job:Manager"
    },
    {
      name :"name:Аскат",
      age:"age:19",
      car:"car:NONE",
      job:"job:Admin"
    }
  ]
  return (
    <div className="header">
      <Header data={data}></Header>
     
    </div>
  );
}

export default App;
