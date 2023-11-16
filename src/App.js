
import './App.css';
import Playerliste from './Components/Playerliste';
import Players from './Components/Players';



function App() {
  const users = [
    {
      name: "HANNIBAL",
      equipe:"Equipe: Manchester",
      numero:"Numéro:10",
      age:"Age:27",
      nationalite:"Nationalite: Tunisie",
      imageUrl:
        "https://www.lequipe.fr/special/Football/guide/v5/cdm-2022/images/tuni2.jpg",
    },
    {
        name: "Cristiano Ronaldo",
        equipe:"Equipe:Nasr",
        numero:"Numéro:7",
        age:"Age:30",
        nationalite:"Nationalite:Portugal",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9daBql5yay9UdsfgwcjyvxGPq1aK-_WmwA&usqp=CAU",
      },
      {
        name: "Ronaldo",
        equipe:"Equipe:Inter milan",
        numero:"Numéro:9",
        age:"Age:33",
        nationalite:"Nationalite:Brazil",
        imageUrl:
          "https://cdn.theathletic.com/app/uploads/2022/09/27120504/ronaldo-brazil.jpg",
      },
      {
        name: "Aboutrika",
        equipe:"Equipe:Ahly masri",
        numero:"Numéro:22",
        age:"Age:33",
        nationalite:"Egypt",
        imageUrl:
          "https://static.onzemondial.com/photo_article/439643/164529/1200-L-the-total-caf-champions-league-portrait-mohamed-aboutrika.jpg",
      },
    
  ];
  
  return (
    <div className="App">
     
      {users.map((user) => {
        return <Players userInfo={user} />;
      })}
 <Playerliste/>
    </div>
  );
}

export default App;
