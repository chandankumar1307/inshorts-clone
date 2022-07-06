import { View, Text, useWindowDimensions, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsScreen from '../Screens/NewsScreen';
import DiscoverScreen from '../Screens/DiscoverScreen'
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';
const InshortTabs = () => {
    const { index, setIndex, fetchNews } = useContext(NewsContext)

    const layout = useWindowDimensions();
    // console.log(fetchNews(1));

    // const [index, setIndex] = useState(1);

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