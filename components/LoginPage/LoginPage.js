


import React, { Component } from 'react';


import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'


class LoginPage extends Component {
    constructor(props) {

        super(props);
        this.state = {
            username: '',
            password: '',

        }
    }
  


    loginCheck = () => {





        if (this.props.flag == true) {
            this.state.username = '';
            this.state.password = '';
            this.props.navigation.navigate('HomeScreen')
        } else {
            this.state.username = '';
            this.state.password = '';
            Alert.alert('WRONG USERNAME OR PASSWORD')
        }
    }


    render() {



        return (


            <View style={styles.container} >


                <TextInput style={styles.textfields} placeholder='UserName' value={this.state.username} onChangeText={username => this.setState({ username: username })} />
                <TextInput style={styles.textfields} placeholder='Password' value={this.state.password} secureTextEntry={true} onChangeText={password => this.setState({ password: password })} />
                <TouchableOpacity
                    style={styles.loginbtn}
                    onPress={() => ((this.props.checklogin({

                        userName: this.state.username,
                        password: this.state.password,
                    })), this.loginCheck())}

                >

                    <Text style={{ color: 'white', fontSize: 30, }}>Login</Text>

                </TouchableOpacity>
            </View>


        )
    }



}

function mapStateToProps(state) {


    return {
        userName: state.userName,
        password: state.password,
        flag: state.flag,
    }
}

function mapDispatchToProps(dispatch) {

    return {

        checklogin: (loginCredentials) => dispatch({ type: 'checklogin', payload: loginCredentials }),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ea7455',
        alignItems: 'center',
        justifyContent: 'center',
    },



    textfields: {

        height: 40,
        margin: 12,
        borderWidth: 0,
        width: '90%',
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 20,



    },
    loginbtn: {
        backgroundColor: '#3d3d59',
        height: 50,
        margin: 12,
        borderWidth: 2,
        borderColor: 'white',
        width: '90%',
        alignItems: 'center'



    }


});
