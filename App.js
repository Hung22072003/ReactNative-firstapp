import { StyleSheet, SafeAreaView, Platform, ScrollView, View, Text, StatusBar, FlatList, SectionList } from 'react-native';
import pokemonList from "./data.json"
import groupedPokemonList from "./grouped-data.json"
export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      {/* <ScrollView style = {styles.scrollView}>
        {
          pokemonList.map((pokemon) => {
            return (
              <View style = {styles.card} key = {pokemon.id}>
                <Text style = {styles.cardText}>{pokemon.type}</Text>
                <Text style = {styles.cardText}>{pokemon.name}</Text>
              </View>
            );
          })
        }
      </ScrollView> */}

      <View style = {styles.scrollView}>
        {/* <FlatList 
          data = {pokemonList}
          renderItem={({item}) => {
            // console.log(item.id)
            return (
              <View style = {styles.card} key = {item.id}>
                <Text style = {styles.cardText}>{item.type}</Text>
                <Text style = {styles.cardText}>{item.name}</Text>
              </View>
            );
          }}

          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style = {{height: 16}}></View>}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={<Text style = {styles.headerList}>Pokemon List</Text>}
          ListFooterComponent={<Text style = {styles.footerList}>End of List</Text>}
        /> */}

        <SectionList 
          sections={groupedPokemonList}
          renderItem={({item}) => {
            // console.log(item)
            return (
              <View style = {styles.card}>
                <Text style = {styles.cardText}>{item}</Text>
              </View>
            )
          }}

          renderSectionHeader={({section}) => {
            // console.log(section)
            return (
              <Text style = {styles.sectionHeaderText}>{section.type}</Text>
            )
          }}

          ItemSeparatorComponent={() => (<View style = {{height: 16}}></View>)}
          SectionSeparatorComponent={() => (<View style = {{height: 16}}></View>)}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    paddingHorizontal: 16,
    justifyContent:"center"
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    // marginBottom: 16,
    elevation: 5
  },

  cardText: {
    fontSize: 30
  },

  headerList: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12
  },

  footerList: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12
  },

  sectionHeaderText: {
    fontSize: 24,
  }
});
