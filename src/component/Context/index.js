import React, { Component } from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
    // Context state
    state = {
        url: '/',
        filter: null,
        top: 0,
        focused: 0,
        count: 0,
    };
    // Method to update state
    setTheme = async theme => {
        this.setState(
            {
                theme: theme ? 'dark' : 'light',
            }
        );
    };
    setTop = top => {
        this.setState(prevState => ({ top }));
    };
    setFocused = focused => {
        this.setState(prevState => ({ focused }));
    };
    setCount = count => {
        this.setState(prevState => ({ count }));
    };
    setFilter = filter => {
        this.setState(prevState => ({ filter }));
    };
    //
    render() {
        const { children } = this.props;
        const { url, theme, topNum, focused, count, filter } = this.state;
        const { setTheme, setTop, setFocused, setCount, setFilter } = this;

        return (
            <UserContext.Provider
                value={{
                    theme,
                    url,
                    topNum,
                    focused,
                    count,
                    filter,
                    setTheme,
                    setTop,
                    setFocused,
                    setCount,
                    setFilter,
                }}>
                {children}
            </UserContext.Provider>
        );
    }
}

export default UserContext;

export { UserProvider };
