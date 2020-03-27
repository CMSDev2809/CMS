import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  iconButton: {
    padding: 0,
    borderRadius: 50,
    backgroundColor: "#2a2a2a"
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  form: { flex: 1, width: Dimensions.get("window").width * 0.9 },
  form_header: {},
  form_header_text: {
    fontSize: 30
  },
  form_submit_button: {
    backgroundColor: "#2a2a2a",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  form_content: { flex: 4 },
  form_content_block: { marginTop: 10, marginBottom: 10 },
  header: {
    backgroundColor: "#56d4af",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  overlay: {
    flex: 1,
    justifyContent: "center"
  },
  overlay_wrapper: {
    marginTop: 15,
    marginBottom: 15
  },
  overlay_text: {
    fontSize: 20
  },
  services: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  services_button: {
    backgroundColor: "#2a2a2a",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 25
  },
  services_button_wrapper: {
    margin: 5,
    width: Dimensions.get("window").width * 0.9
  },
  services_block: {
    flex: 5,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  services_header: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  services_header_text: {
    fontSize: 35
  },
  spinnerTextStyle: {
    color: "#ffffff"
  }
});
