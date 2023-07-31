import React,{Component} from "react";
import './sports.css';
class Kdappform extends React.Component{
    constructor(){
        super();
        this.state={phn:null,fe:null,reff:null,errmsg:""}
        this.state.tot=(this.state.reff)*(this.state.fe);
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="phn")
        {
            if(v!="" && !Number(v))
            {
                // err=<h2>Invalid Age! Must be a number</h2>
                event.preventDefault();
                alert("Invalid Phone number!");
            }
        }
        if(n=="fe")
        {
            if(v!="" && !Number(v))
            {
                // err=<h2>Invalid Age! Must be a number</h2>
                event.preventDefault();
                alert("Invalid Fees!");
            }
        }
        if(n=="reff")
        {
            if(v!="" && !Number(v))
            {
                event.preventDefault();
                alert("Invalid Reference!");
            }
            var r = document.getElementById("reff").value;
            var f = document.getElementById("fe").value;
            var t = r*f;
            document.getElementById("tot").value=t; 
        }
        this.setState({[n]:v});
    }
    formsubmit=(event)=>
    {
        event.preventDefault();
        alert("Form Submitted");
    }
    show=()=> {
        var x = document.getElementById('im');
        if (x.style.display == "none") {
            x.style.display = "block";
        }   
        else{
            x.style.display = "none";
        }
    }
    render(){
        return(
            <div className="body">
                <h1 className="heading">SPORTS REGISTRATION FORM</h1>
            <form className="form" action="post">
                <p className="label">Sport <select className="ip">
                    <option onClick={this.show}><a className="hovtext" onClick={this.show} id="dd">BasketBall</a></option>
                    <option><a className="hovtext" onClick={this.show} id="dd">Football</a></option>
                    <option><a className="hovtext" onClick={this.show} id="dd">Cricket</a></option>
                </select>
                <img src="./images/hpy.jpeg" id="im" alt="sport"></img>
                </p>
                <p className="label">Name <input className="ip" type="text" name="username"></input></p>
                <p className="label">Phone  <input className="ip" type="text" name="phn" onChange={this.uservalue}></input></p>
                <p className="label">Address <input className="ip" type="text" name="add"></input></p>
                <p className="label">Fees <input className="ip" type="text" id="fe" onChange={this.uservalue}></input></p>
                <p className="label">References <input className="ip" type="text" id="reff" onChange={this.uservalue}></input></p>
                <p className="label">Total amount to be paid <input className="ip" type="number" id="tot"></input></p>
                <button className="sub" onClick={this.formsubmit}>SUBMIT</button>
            </form> 
            </div>
            

        );
    }
}
export default Kdappform;