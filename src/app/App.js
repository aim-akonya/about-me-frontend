import React , {Component}from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';


const styles = {
  dark:{
    minHeight: '100vh',
    display: 'flex',
    backgroundColor:'#282c34',
    color:"#e5e5e5"
  },
  light:{
    minHeight: '100vh',
    display: 'flex',
    backgroundColor:"#e5e5e5",
    color:'#282c34'
  }

}


 class App extends Component{
   constructor(props){
     super(props);
     this.handleThemeChange = this.handleThemeChange.bind(this);
     this.state={
       theme:'dark'
     }
   }
   handleThemeChange(value){
     this.setState((state)=>({
       theme: value
     }))
   }
   render(){
     return (
       <div className={this.state.theme==="dark"? this.props.classes.dark : this.props.classes.light } >
         <CssBaseline />
       </div>
     );
   }
}

export default withStyles(styles)(App);
