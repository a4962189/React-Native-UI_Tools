/**
 * Created by wangl on 2017/4/26.
 */
/**
 * Created by wangl on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


import RangeSlider from '../RangeSlider/RangeSlider'



export default class ViewTools extends Component {
    render() {
        return (
        <View >
            <View style={{marginTop:40}}>
                <Button title="返回" onPress={() => {
                    this.props.navigator.pop()
                }
                }/>
            </View>
            <View style={{marginTop:40}}>
                <RangeSlider
                    min={10}
                    max={100}
                    step={5}
                    values={[25, 75]}
                    valueRenderer={value => `*${value}`}
                />

            </View>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});