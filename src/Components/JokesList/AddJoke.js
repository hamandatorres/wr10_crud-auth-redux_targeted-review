import { Component } from 'react';
import './AddJoke.scss';

class AddJoke extends Component {
    constructor() {
        super();
        this.state = {
            addMode: false,
            newJoke: '',
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleToggleAddJoke = () => {
        this.setState({ addMode: !this.state.addMode })
    }

    handleAddJoke = e => {
        e.preventDefault();
        console.log('joke added! or not...')
    }

    render() {
        const { addMode, newJoke } = this.state;

        return (
            <section className='add-joke'>
                <button className='add-joke-btn' onClick={this.handleToggleAddJoke}>
                    {
                        addMode ? 'Cancel' : 'Add Joke?'
                    }
                </button>
                {
                    addMode ? (
                        <form onSubmit={this.handleAddJoke} className='new-joke-form'>
                            <input name='newJoke' placeholder='new joke!' onChange={this.handleChange} className='new-joke-joke' />

                            <button type='submit' className='new-joke-submit'>submit</button>
                        </form>
                    ) : null
                }
            </section>
        )
    }
}

export default AddJoke;