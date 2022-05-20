import React from 'react';
import ContentLoader, {BulletList,Facebook} from 'react-content-loader/native'
import LottieView from 'lottie-react-native';
import {Text,Image, TouchableOpacity} from  'react-native';
import Svg, {
    Circle,
    Rect,
  } from 'react-native-svg';
import AppColors from './AppColors';
import { View} from 'react-native';
import { FontFamily } from './FontFamily';
import { height, width } from 'react-native-dimension';
import Modal from "react-native-modal"

  export const LottieIcon = ({icon,size}) => {
    return(
        <LottieView 
          source={icon}
          autoPlay={true}
          style={{
              width: size || 150,
              height: size || 150
          }}
          loop={true}
      />
    )
  }

  export const ProfileLoader = () => (
    <Container
        flex={1}
        verticalAlignment="center"
        horizontalAlignment="center"
    >
        <ContentLoader
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        // {...props}
        >
        <Rect x="80" y="73" rx="3" ry="3" width="254" height="6" />
        <Rect x="78" y="88" rx="3" ry="3" width="254" height="6" />
        <Rect x="150" y="103" rx="3" ry="3" width="118" height="6" />
        <Circle cx="210" cy="40" r="22" />
        </ContentLoader>
    </Container>
  )

  export const P = (props) => (
    <Text
        style={[
            {
                fontSize : width(props.fontSize) || width(3.5),
                fontFamily : FontFamily.RobotoRegular,
                color : props.color || AppColors.font,
                textAlign : props.textAlign,
            },
            props.style
        ]}
    >
     {props.children}
    </Text>
  )

  export const H1 = (props) => (
    <Text
      style={[
        {
            fontSize : width(props.fontSize) || width(4),
            fontFamily : FontFamily.RobotoBold,
            color : props.color || AppColors.font,
            textAlign: props.textAlign
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
  
export const SizedBox = (props) => (
  <View 
    style={{
      height : height(props.size || 1)
    }}
  />
)

  export const Container = (props) => (
    <View 
      style={[
        {
            flex : props.flex,
            flexDirection : props.flexDirection,
            width : props.width ? width(props.width) : props.widthPercent ? props.widthPercent : '100%',
            padding : props.padding ? width(props.padding) : height(2),
            justifyContent:
            props.direction === 'row'
                ? props.horizontalAlignment
                : props.verticalAlignment,
            alignItems:
            props.direction === 'row'
                ? props.verticalAlignment
                : props.horizontalAlignment,
            paddingVertical : props.paddingVertical ? height(props.paddingVertical) : height(0),
            paddingHorizontal : props.paddingHorizontal ? width(props.paddingHorizontal) : width(0),
            marginTop : props.marginTop ? height(props.marginTop) : 0,
            marginBottom : props.marginBottom ? height(props.marginBottom) : 0,
            paddingBottom : props.paddingBottom ? height(props.paddingBottom) : 0,
            marginLeft : props.marginLeft,
            paddingTop : props.paddingTop ? height(props.paddingTop) : 0,
            paddingRight : props.paddingRight ? width(props.paddingRight) : 0,
            paddingLeft : props.paddingLeft ? width(props.paddingLeft) : 0,
            marginRight : props.marginRight ? width(props.marginRight) : 0,
            backgroundColor : props.backgroundColor || "transparent",
            borderWidth : props.borderWidth ? width(props.borderWidth) : null,
            alignSelf : props.alignSelf,
            height : props.height ? height(props.height) : null
          },props.style
      ]}
    >
      {props.children}
    </View>
  )

  export const Avatar = (props) => (
    <Image 
      source={{uri : props.url}}
      style={{
        width : width(props.size || 18),
        height: width(props.size || 18),
        resizeMode : "cover",
        borderRadius : 50,
        backgroundColor : "transparent"
      }}
    />
  )

  export const Rounded = (props) =>(
    <Container
      style={{
        width : width(props.size || 15),
        height: width(props.size || 15),
        borderRadius : 50,
        backgroundColor : props.backgroundColor || AppColors.font,
        justifyContent : "center",
        alignItems : "center"
      }}
    >
      {props.children}
  </Container>
  )

  export const SuccessModal = ({isVisible,setVisible}) => (
    <Modal isVisible={isVisible}
      style={{flex:1,justifyContent : "flex-end"}}
      onBackdropPress={()=>setVisible(false)}
    >
        <Container backgroundColor={AppColors.white}
          height={50}
        >
          <Container flex={1} verticalAlignment="center">
            <H1 fontSize={10} textAlign="center">Success!!</H1>
          </Container>
        </Container>
    </Modal>
  )

  export const Button = (props) => (
    <TouchableOpacity onPress={props.onPress}
      style={{
        paddingVertical : props.paddingVertical ? height(props.paddingVertical) : null,
        marginTop : props.marginTop ? height(props.marginTop) : null,
        marginLeft : props.marginLeft ? width(props.marginLeft) : null,
        backgroundColor : props.backgroundColor,
        width : props.width ? width(props.width) : width(30),
        borderRadius : props.borderRadius,
        borderWidth : props.borderWidth ? width(props.borderWidth) : null,
        borderColor : props.borderColor
      }}
    >
      <Container height={5} verticalAlignment="center">
        {props.children}
      </Container>
    </TouchableOpacity>
  )