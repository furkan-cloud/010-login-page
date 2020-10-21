import React from 'react';
import { SafeAreaView, Text, View, Button} from 'react-native';

const First = (props) => {
    return(
        <SafeAreaView>
            <View>
                <Text>
                    FirstPage
                </Text>
                <Button
                title="Second Page"
                onPress={() => props.navigation.navigate('SecondPage')}
                />
            </View>
        </SafeAreaView>
    )
}

export default First;