import {StyleSheet} from "react-native";
import colors from "./colors";
const smallFont = 15;
const defaultFont = 15;
const bigFont = 20;

const styles = StyleSheet.create({
  buttonViewRight: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
  buttonViewLeftt: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
  button: { backgroundColor: colors.primary , alignContent: 'center'},
  button2: { backgroundColor: colors.secondary },
  button2Text: { fontSize: defaultFont, color: colors.black, alignSelf: 'center', fontWeight: '600' },
  buttonText: { fontSize: defaultFont, color: colors.white, alignSelf: 'center', fontWeight: '600' },
  Asterix:{color: colors.compulsory,fontSize:defaultFont,fontWeight: 'bold'},
  headerText: { fontSize: bigFont,  fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
  subText: { fontSize: bigFont,  fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
  labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: defaultFont},
  textInput: {width: '55%', height: 35, fontSize: defaultFont, paddingLeft: 5, marginRight: 15, borderColor: colors.whiteAlt, borderWidth: 1, backgroundColor: colors.whiteAlt,color: colors.black, flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',},
  container: {flex: 1,justifyContent: "center",backgroundColor:colors.secondary,alignItems: 'center'},
  logo: {width: 100,height: 100,borderRadius: 50,margin: '5%',},
  mainText:{padding:'1%', fontSize:bigFont, textAlign: 'center', fontWeight:'bold', textTransform:'uppercase',alignSelf:'center'},
  descriptionText:{padding:'0.5%',fontSize:defaultFont, textAlign: 'center', lineHeight:29, textTransform:'capitalize', alignSelf:'center'},
  buttonView:{margin: '2%', width:'30%'},
  buttonText:{fontSize:bigFont, color:'#fff',alignSelf:'center'},
  picker:{ height: 35, width: 150, backgroundColor: '#f2f2f2' },
  labelTextLong: { width: '45%', height: 35, lineHeight: 35, textAlign: 'left', flex: 1, flexWrap: 'wrap', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: smallFont},
  labelTextCenter: { width: '90%', height: 35, lineHeight: 35, textAlign: "center", marginRight: 10, justifyContent:'center', alignItems: 'center', fontSize: defaultFont},
  displayItems:{ flex:1, flexWrap:"wrap", fontWeight:'bold', color: colors.primary},


})
export {
    styles
}