import { Component } from 'react';
import AddJoke from './AddJoke';
import JokeItem from './JokeItem';
import './JokesList.scss';
import { Redirect } from 'react-router-dom';

class JokesList extends Component {
    constructor() {
        super();
        this.state = {
            jokes: [
                {joke_id: 1, joke_text: 'This is dummy data!'},
                {joke_id: 2, joke_text: 'Yet MORE dummy data!'}
            ], // we'll move this to redux
            searchJokes: ''
        }
    }

    componentDidMount() {
        // what do?
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { addJoke, jokes } = this.state;

        const jokesMapped = jokes.map((jokeObj, i) => <JokeItem key={i} jokeObj={jokeObj} />)

        // we'll update this so only users can see jokes
        if (false) {
            return <Redirect to='/' />
        }

        return (
            <section className='jokes-list'>
                <AddJoke />

                <div className='search-jokes'>
                    <input name='searchJokes' placeholder='search jokes' onChange={this.handleChange} className='search-input' />
                    <button className='search-submit'>search</button>
                </div>

                { jokesMapped }
            </section>
        )
    }
}

export default JokesList;