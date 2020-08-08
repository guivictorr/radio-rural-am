const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#36699d',
  },
  radioLogo:{
    transform:[{scaleX:0.2}, {scaleY: 0.2}],
    marginBottom:250,
  },
  backgroundImage:{
    width:'100%',
    height: '100%',
    opacity:0.2,
    position:'absolute'
  },
  bottomView:{
    position:'absolute',
    bottom:0,
  }
});

export default styles