import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    border: '10px solid red',
    boxShadow: 'inset 0 0 0 15px orange',
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "#b5b5b5",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 14,
  },
  email: {
    fontSize: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  }
});