
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    feedpanel: {
        flex: 1,
        backgroundColor: '#ECFFFB',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

    },



    container: {

        backgroundColor: 'white',

        height: '100%',
        width: '100%',

    },

    newpostbutton: {

        flex: 1,
        margin: 5,
        backgroundColor: '#3d3d59',
        justifyContent: 'center',
        alignItems: 'center',

    },

    container2: {


        flex: 9,
        margin: 5,
        flexDirection: 'column',


    },


    postcard: {

        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 3,
        height: 200,
        margin: 5,
        elevation: 20,
        shadowColor: '#52006A',
        flexDirection: 'column'

    },


    postcard1: {
        backgroundColor: '#FDFFC9',
        flex: 4,
        paddingLeft: 20,
        paddingRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },


    postcard2: {

        flex: 7,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 10,
        alignItems: 'flex-start',

    }

})