
import React, { useEffect, useState } from 'react';
import { styles } from './style';

import { Text, View, TouchableOpacity, FlatList } from 'react-native'



export function PostCard(props) {



    return (

        <View style={styles.postcard}>
            <View style={styles.postcard1}>
                <Text style={{ fontSize: 17 }}>{props.name}</Text>
            </View>
            <View style={styles.postcard2}>

                <Text style={{ fontSize: 13 }}>{props.desc}</Text>
            </View>
        </View>

    )
}

const getAPI = `https://jsonplaceholder.typicode.com/posts`

function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(getAPI)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert(error))




    })



    function postnew(navigation) {

        navigation.navigate('NewPostPanel')


    }


    return (

        <View style={styles.feedpanel}>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.newpostbutton}
                    onPress={() => postnew(navigation)}
                >

                    <Text style={{ color: 'white', fontSize: 30, }}>New Post</Text>
                </TouchableOpacity>

                <View style={styles.container2}>



                    <FlatList data={data}
                        renderItem={({ item }) => {
                            return (
                                <PostCard key={item.id} name={item.title} desc={item.body} />

                            )
                        }}
                    />


                </View>


            </View>
        </View >




    )
} export default HomeScreen;







