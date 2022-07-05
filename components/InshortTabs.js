import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsScreen from '../Screens/NewsScreen';
import DiscoverScreen from '../Screens/DiscoverScreen'
import TopNavigation from './TopNavigation';
const InshortTabs = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(1);

    const [routes] = useState([
        { key: 'first', title: 'Discovery' },
        { key: 'second', title: 'News' },
    ])

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen
    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => < TopNavigation index={index} setIndex={setIndex} />}
        />
    )
}

export default InshortTabs