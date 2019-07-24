import React from "react";

export default class Menu extends React.Component {

    state = {
        message: ""
    };

    saveState = () => {
        this.props.saveState();
        this.flashMessage("Tracker Saved")
    };

    resetState = () => {
        if (!window.confirm("Are you sure you want to reset?")) {
            return;
        }
        this.props.resetState();
        this.flashMessage("Tracker Reset");
    };

    flashMessage = message => {
        this.setState({message: message});
        setTimeout(() => {
            this.setState({message: ""});
        }, 3000);
    };

    render() {
        return(
            <div className="navbar is-fixed-top is-dark">
                <div style={{width: "100%", maxWidth: "1000px", margin: "auto"}}>
                    <nav>
                        <h1 className="is-size-4 navbar-item has-text-white has-text-weight-bold">
                            ZOoTR Entrance Tracker
                        </h1>
                    </nav>
                    <div className="has-background-dark nav-bottom">
                        <div className="nav-bottom-left">
                            <div
                                className="nav-bottom-item"
                                onClick={this.props.toggleRouteFinder}
                            >
                                {this.props.routeFinderVisible ? "Hide" : "Show"} Route Finder
                            </div>
                            <div
                                className="nav-bottom-item"
                                onClick={this.props.toggleOverworldOnly}
                            >
                                {this.props.overworldOnly ? "Show All Entrances" : "Hide Non-Overworld Entrances"}
                            </div>
                        </div>
                        <div className="nav-bottom-right">
                            <div className="nav-bottom-item has-text-white has-text-weight-bold">
                                {this.state.message}
                            </div>
                            <a href="#save" className="nav-bottom-item has-text-primary" onClick={this.saveState}>
                                Save
                            </a>
                            <a href="#reset" className="nav-bottom-item has-text-light" onClick={this.resetState}>
                                Reset
                            </a>
                            <a
                                href="https://github.com/brakkum/ZOoTR-Entrance-Tracker"
                                className="nav-bottom-item has-text-grey-light"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
