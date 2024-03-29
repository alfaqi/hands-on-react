import { useState, useEffect } from "react"
import ListCast from "./compnents/ListCast"
import Modals from "./compnents/Modals";
import Nav from "./compnents/Nav";
import './App.css';

function App() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [cast, setCast] = useState([]);

  let first = 0;
  let last = Number(cast.length)
  console.log(`first ${first}, last ${last}`)

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  }, [])

  return (
    <>
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1> Meet the StarGazers </h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {
            memberInfo && <Modals member={memberInfo} handleChange={(info) => { setMemberInfo(cast[info]) }} handleClose={() => { setMemberInfo(null) }} />
          }
        </hgroup>
      </div>
    </>
  )
}
export default App