import React from 'react';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
        };
    }

    componentDidMount() {

        fetch("https://api.github.com/users/kkalpaxis/")
        .then(response => {
            return response.json();
        }).then(data => {
            let user = data.response.map((person) => {
                return(
                    <div key={person.response}>
                        <h1>{person.response.name}</h1>
                    </div>
                )
        }).catch(error => console.log("big YIKES!"));
        this.setState({user: user});
        console.log("state", this.state.user)
    })}

    render() {
        return (
            <div className="User">
                {this.state.user}
            </div>
        )
    }
}

export default User;

