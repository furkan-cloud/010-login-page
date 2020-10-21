import React from 'react';
import { SafeAreaView, Text, View, Button} from 'react-native';

const Second = (props) => {
    return(
        <SafeAreaView>
            <View>
                <Text>
                    SecondPage
                </Text>
                <Button title="Go back" onPress={() => props.navigation.goBack()} />
            </View>
        </SafeAreaView>
    )
}

export default Second;