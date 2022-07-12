import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { SearchProduct } from "../../redux/slices/ProductSlices";
import { Color } from "../../utils/Color";
// import IconComponent from "../IconComponent/IconComponent";

const Search = () => {

  const dispatch:AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.productRedu)
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onChangeSearch = (query: string) => {setSearchQuery(query), dispatch(SearchProduct({term: searchQuery}))};
  console.log("querryy", searchQuery, products)

  return (
    <View style={{ padding: 16 }} >
      <StatusBar barStyle="light-content" backgroundColor="#1a0000" />
      <Searchbar
        placeholder="Search Products"
        //   icon={()=> <IconComponent name="search" size={16}/>}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={style.searchbar}
        iconColor="white"
        inputStyle={{ color: Color.white, fontSize: 16 }}
        placeholderTextColor={Color.white}
      />
    </View>
  )
}

const style = StyleSheet.create({
  searchbar: {
    backgroundColor: Color.bg1,
    borderRadius: 10
  }

})

export default Search;


