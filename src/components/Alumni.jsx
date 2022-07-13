import React from 'react'
import "./alumni.styles.css"

export default function Alumni() {
    const data = [
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "Ramraj Shastri", Design: "-", Depart: "Education" },
        { name: "Ramanand Mishra", Design: "A.S.I.", Depart: "Police"},
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
        { name: "RamSwaroop Tripathi", Design: "Teacher", Depart: "Education" },
      ]
  return (
    <>      
        <div style={{textAlign: "center", width: "80%", margin: "auto"}}>
         <h1>Our Alumni</h1>
         <p >Here is the List of all the alumni which are working in several departments. There are 14 students which are currently working in the Educational department. Eight Students are working in the Police Department. Ten Students are working in the Health Department. Some of the Students are working in the other Department as well such as Revenue, Panchayat, Custom, Railway, Enterprise, Transport, Agricultural, Co-Operative Bank and National Bank. We are proud List the name of the Students which hav e made us feel proud. Below is the List of Alumni of our School.</p>
         </div>
        <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.Design}</td>
              <td>{val.Depart}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}
