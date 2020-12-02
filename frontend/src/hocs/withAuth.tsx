import React from 'react'

interface IWithAuthProps {}

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
    class AuthComponent extends React.Component<P & IWithAuthProps> {

        render() {
            // const { ...props } = this.props
            return (
                <Component {...this.props} />
            )
        }
    }

    return AuthComponent
}

export default withAuth
