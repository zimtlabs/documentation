
export default (rule, children) => {

    // eslint-disable-next-line
    switch (rule) {
        // case 'authorized':
        //     return AuthService.isLoggedIn ? children : null;

        // case 'unauthorized':
        //     return !AuthService.isLoggedIn ? children : null;

        default:
            return children;
    }
}
