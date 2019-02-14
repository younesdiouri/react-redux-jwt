import React from "react";
import Banner from "../components/Banner";
import ToggleButton from "../components/ToggleButton";

export default class ToggleButtonContainer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            theme: 'black'
        }

        this.toggleTheme = this.toggleTheme.bind(this); //mettre le contexte de this dans une fonction non arrow 

    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === "black" ? "light" : "black"
        });

        this.alertChange();
    }

    alertChange = () => alert(this.state.theme);

    render() { //chaque composant a render
        return ( //React.Fragment obligatoire si return + deux balises
            <React.Fragment> 
                <ToggleButton toggleHandler={this.toogleTheme}/>
                <Banner content={this.state.theme}/>
            </React.Fragment>
        )
    }

}