import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text>
            {props.placeName}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        margin: 5,
        padding: 10,
        backgroundColor: '#eee',
        alignItems: 'center',
    }
});

export default listItem;