import { doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect } from "react"
import { Alert, Pressable, Text, View } from "react-native"
import { db } from "../firebaseConfig";

const OrderDetailView = ({ navigation, route }) => {
  // {"id":"syApqV56v158sqXXaNrO",
  // "vehicle":"Yoq3p1WAHBJ1xmE6mIIm",
  // "endDate":{"seconds":1711771200,"nanoseconds":420000000},
  // "comfirmationCode":"123asdf",
  // "price":100,
  // "startDate":{"seconds":1711684800,"nanoseconds":988000000}}
  useEffect(() => {
    console.log(JSON.stringify(order));
  })
  const order = route.params.item

  const updateFireDoc = async (status) => {
    try {
      let updateToDB = {
        status: status
      }
      if (status === "APPROVED") {
        updateToDB.confirmCode = generateRandomString()
      }

      await updateDoc(doc(db, "Orders", order.id), updateToDB)
      Alert.alert(`Order ${status}`)
    } catch (err) {
      console.error(err);
    }
  }

  const generateRandomString = () =>{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }  

  const onAPPROVEPress = () => {
    updateFireDoc("APPROVED")
    console.log(`onAPPROVEPress`);
    updateDoc(doc(db, "Vehicles", order.vehicle), {
      isRent: true
    })
    navigation.goBack()
  }

  const onDECLINEDPress = () => {
    updateFireDoc("DECLINED")
  }

  return (
    <View>
      <Text>{order.id}</Text>
      <Text>{order.vehicle}</Text>

      {
        order.status === "PENDING" ? (
          <View>
            <Pressable onPress={onAPPROVEPress}>
              <Text>APPROVE</Text>
            </Pressable>

            <Pressable onPress={onDECLINEDPress}>
              <Text>DECLINE</Text>
            </Pressable>
          </View>

        ) : order.status === "DECLINED" ? (
          <Text>DECLINED</Text>
        ) :
        <View>
          <Text> APPROVED </Text>
          <Text> {order.confirmCode} </Text>
        </View> 
      }
    </View>
  )
}

export default OrderDetailView