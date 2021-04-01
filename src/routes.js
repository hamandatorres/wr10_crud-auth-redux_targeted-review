import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import JokesList from './Components/JokesList/JokesList';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/jokes' component={JokesList} />
    </Switch>
);