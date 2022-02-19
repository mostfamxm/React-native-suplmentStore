import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES, SUPLMENTS } from "../data/dummy-data";

import CategoriesPage from "../components/Catgory";
import styles from "../assets/styles";



const MainScreen = ({ navigation }) => {
    const HomePage = ({ item }) => {
        return (
            <CategoriesPage
                title={item.title}
                Image={item.imageUrl}
                onSelect={() => {
                    let arr = SUPLMENTS.filter(suplment => suplment.categoryIds[0] == item.id);
                    let numberOfcategories = arr.length;
                    navigation.navigate("SuplmentsPage", {
                        categoryId: item.id,
                        categoryName: item.title,
                        categoryAmount: numberOfcategories,
                    });
                }}
            />

        );
    };

    return (
        <View style={styles.backGround}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={CATEGORIES}
                renderItem={HomePage}
                numColumns={3}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: "suplments app",
};


export default MainScreen;