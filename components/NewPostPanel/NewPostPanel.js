import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native'

const postAPI = `https://jsonplaceholder.typicode.com/posts`;

function NewPostPanel({ navigation }) {

    const [postTitle, setPostTitle] = useState()
    const [postBody, setPostBody] = useState()
    const [data, setData] = useState([]);



    useEffect(() => {


    })


    function newPost(title, body) {

        if (title != null && body != null) {

            fetch(postAPI, {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => setData(json)).catch(((error) => alert(error)))

            Alert.alert('Posted')
            setPostTitle('')
            setPostBody('')
            navigation.goBack(null)
        } else {
            Alert.alert('Please Enter Title and Description')
        }

    }

    return (



        <View style={styles.postcontainer}>


            <View style={styles.newpost}>
                <TextInput style={styles.posttitle} placeholder='Post Title' value={postTitle} onChangeText={(pt) => setPostTitle(pt)}></TextInput>



                <TextInput style={styles.postdesc} multiline={true} numberOfLines={10} placeholder='Post Description' value={postBody} onChangeText={(pb) => setPostBody(pb)}></TextInput>

                <TouchableOpacity
                    style={styles.savebtn}
                    onPress={() => newPost(postTitle, postBody)}
                >

                    <Text style={{ color: 'black', fontSize: 30, }}>Save Post</Text>
                </TouchableOpacity>

            </View>
        </View>


    )


} export default NewPostPanel;





const styles = StyleSheet.create({




    postcontainer: {


        flex: 1,
        backgroundColor: '#fdffc9',
        alignItems: 'center',
        justifyContent: 'center',




    },

    newpost: {

        backgroundColor: 'white',
        borderRadius: 8,
        height: '80%',
        width: '95%',
        elevation: 10,
        shadowColor: '#52006A',


    },
    posttitle: {
        borderRadius: 10,
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '90%',



    },


    postdesc: {
        borderRadius: 10,
        height: "60%",
        margin: 12,
        borderWidth: 1,
        padding: 10,

        width: '90%',
    },

    savebtn: {
        borderRadius: 10,
        margin: 12,
        backgroundColor: '#A2D2FF',
        justifyContent: 'center',
        alignItems: 'center',

    },



})