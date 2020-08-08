const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  articleBox: {
    backgroundColor: '#36699d',
    padding: 16,
    marginVertical: 14,
    marginHorizontal: 32,
    borderRadius: 8,
    height: 'auto',
    borderTopColor: '#fffd',
    borderTopWidth: 3,
  },

  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },

  articleDescription: {
    fontSize: 14,
    color: '#fffc'
  },

  articleImage: {
    borderRadius: 8,
    marginTop: 12,
    width: '100%',
    height: 100
  },

  articleFooter: {
    marginTop: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footerText: {
    color: '#fff5',
  },
});

export default styles