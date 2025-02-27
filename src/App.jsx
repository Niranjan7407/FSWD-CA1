import './App.css'
import ServiceCard from './Components/ServiceCard'
function App() {
  const details=[
    {
      title:"Password Manager",
      description:"Used to manage passwords"
    },
    {
      title:"Spam Alert",
      description:"Used to identify spam emails."
    },
    {
      title:"App Manager",
      description:"Used to manage application."
    }
  ]
  return (
    <>
     {
      details.map((detail,ind)=>{
        return (
          
          <div key={ind}>
          <ServiceCard props={detail}  />
          </div>
          
        
        )
      })
     }
    </>
  )
}

export default App
