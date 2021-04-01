import { Component } from 'react';
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
            searchJokes: '',
            addJoke: false,
            newCategory: '',
            newJoke: '',
            editJokeId: '',
            updatedJoke: ''
        }
    }

    componentDidMount() {
        // what do?
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleToggleAddJoke = () => {
        this.setState({ addJoke: !this.state.addJoke})
    }

    handleAddJoke = e => {
        e.preventDefault();
        console.log('joke added! or not...')
    }

    handleToggleEditJoke = (jokeId) => {
        console.log(jokeId)
        this.setState({ editJokeId: jokeId})
    }

    handleEditJoke = () => {

    }

    cancelEditJoke = () => {
        const { editJokeId, updatedJoke } = this.state;

        this.setState({
            editJokeId: '',
            updatedJoke: ''
        })
    }

    render() {
        const { addJoke, jokes } = this.state;

        const jokesMapped = jokes.map((jokeObj, i) => {
            const { editJokeId } = this.state;
            return (
                <div key={i}>
                    <div className='jokes-list-joke'>
                        <p>{jokeObj.joke_text}</p>
                        <button onClick={() => this.handleToggleEditJoke(jokeObj.joke_id)}>edit</button>
                    </div>
                    {
                        editJokeId === jokeObj.joke_id && (
                            <>
                                <form onSubmit={this.handleEditJoke} className='jokes-list-edit-joke'>
                                    <input name='updatedJoke' onChange={this.handleChange} />

                                    <button type='submit'>submit</button>
                                </form>
                                <button onClick={this.cancelEditJoke}>cancel</button>
                            </>
                        ) 
                    }
                </div>
            )
        })

        // we'll update this so only users can see jokes
        if (false) {
            return <Redirect to='/' />
        }

        return (
            <section className='jokes-list'>
                <button onClick={this.handleToggleAddJoke}>
                    {
                        addJoke ? 'Cancel' : 'Add Joke?'
                    }
                </button>
                {
                    addJoke ? (
                        <form onSubmit={this.handleAddJoke} className='new-joke-form'>
                            <input name='newCategory' placeholder='category' onChange={this.handleChange} className='new-joke-category' />

                            <input name='newJoke' placeholder='new joke!' onChange={this.handleChange} className='new-joke-joke'/>

                            <button type='submit' className='new-joke-submit'>submit</button>
                        </form>
                    ) : null
                }
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