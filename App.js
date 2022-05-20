/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Avatar, Container, H1, LottieIcon, P, PageLoader, ProfileLoader, Rounded,Button, SuccessModal } from './helpers/components';
import AppColors  from './helpers/AppColors';
import { apiFunctions } from './helpers/apiCalls';
import { Capitalize, ToastError } from './helpers/functions';
import Toast from 'react-native-toast-message';

const App = () => {
  const [loading,setLoading] = React.useState(true)

  const [data,setData] = React.useState([])
  const [selected,setSelected] = React.useState([])
  const [selectedCategories,setSelectedCategories] = React.useState([])
  const [modal,setModal] = React.useState(false)

  const getData = async () => {
    try{
      let res =  await apiFunctions.getBallotData()
      let grpData = res.items.map(item=>{
        return {
          title: item.title,
          key : item.id,
          data: [
            {
             key: item.id,
             list: item.items,
            },
          ],
        }
      })
      setData(grpData)
      setLoading(false)
    }catch(err){
    }
  }
  const Card = ({item,section}) => {
    const handleVote = () => {
      let index = selected.indexOf(`${item.id}__${section.key}`)
      if(index === -1 && selectedCategories.includes(section.key)){
        return ToastError("You have selected another contestant in this category")
      }
      if(index > -1){
        let arr = [...selected]
        let arr2 = [...selectedCategories]
        arr.splice(index,1)
        arr2.splice(index,1)
        setSelectedCategories(arr2)
        return setSelected(arr)
      }
      setSelected([...selected,`${item.id}__${section.key}`])
      setSelectedCategories([...selectedCategories,section.key])
    }
    return(
      <Container borderWidth={0.2} width={40} alignSelf="center" 
        marginBottom={2}
        height={30}
        paddingLeft={2}
        paddingRight={2}
        verticalAlignment="space-around"
        horizontalAlignment="center"
       backgroundColor={selected.includes(`${item.id}__${section.key}`) ? AppColors.selectedCard : AppColors.card}
      >
        <H1 textAlign="center">{item?.title}</H1>
        <Avatar url={item?.photoUrL} />
        <Button backgroundColor={AppColors.buttonBackground}
          onPress={handleVote}

        > 
          <H1 textAlign="center">Vote</H1>
        </Button>
      </Container>
    )
  }

  const renderItem = ({section,index}) => {
    return(
      <FlatList 
        data={section.data[index].list}
        renderItem={({item})=><Card item={item} section={section} />}
        columnWrapperStyle={{justifyContent : "space-evenly"}}
        numColumns={2}
      />
    )
  }

  const ListHeaderComponent = () => (
    <Container marginTop={3} marginBottom={1}>
      <H1 textAlign="center" fontSize={6}>GOLDEN GLOBE</H1>
      <H1 textAlign="center" fontSize={6}>AWARD</H1>
    </Container>
  )
  const renderSectionHeader = ({section : {title}}) => {
    return(
      <Container backgroundColor={AppColors.category}
        borderWidth={0.2}
        width={90}
        alignSelf="center"
        verticalAlignment="center"
        height={3.5}
        paddingHorizontal={3}
        marginBottom={2}
        marginTop={2}
        paddingLeft={2}
      >
        <H1>{title ? Capitalize(title) : null}</H1>
      </Container>
    )
  }
  const ListFooterComponent = () => {
    const handleSubmit = () =>{
      if(!selected.length){
        return ToastError("Please select at least one contestant in any category.")
      }
      setModal(true)
      setSelected([])
      setSelectedCategories([])
    }
    return(
      <Container horizontalAlignment="center"
        paddingTop={2}
      >
          <Button
            backgroundColor={AppColors.green}
            borderRadius={10}
            borderWidth={1}
            borderColor={AppColors.green}
            onPress={handleSubmit}
            width={50}
          >
            <H1 textAlign="center" fontSize={4}>SUBMIT VOTE</H1>
          </Button>
      </Container>
    )
  }
  useEffect(()=>{
    getData();
  },[])
  return(
    <SafeAreaView style={{flex : 1}}>
              <Container backgroundColor={AppColors.page} flex={1}>
      {
        loading ? <ProfileLoader /> : null
      }
      {
        !loading ? <SectionList
          ListHeaderComponent={ListHeaderComponent}
          sections={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListEmptyComponent={<Container horizontalAlignment="center" 
            marginTop={30}
          ><H1 fontSize={6}>No Record Found :(</H1></Container>}
        /> : null
      }
      <ListFooterComponent />
      <Toast />
      {
        modal ? <SuccessModal isVisible={modal} setVisible={setModal} /> : null
      }
    </Container>
    </SafeAreaView>
  )
}

export default App;
